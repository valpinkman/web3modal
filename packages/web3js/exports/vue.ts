import type { Web3ModalOptions } from '@web3modal/connectors'
import { Web3Modal } from '@web3modal/connectors'
import { ConstantsUtil } from '@web3modal/scaffold-utils'
import { getWeb3Modal } from '@web3modal/scaffold-vue'
import { onUnmounted, ref } from 'vue'
import { ethereumHelpers } from '../utils/ethereumHelpers.js'

// -- Types -------------------------------------------------------------------
export type { Web3ModalOptions } from '@web3modal/connectors'

// -- Setup -------------------------------------------------------------------
let modal: Web3Modal | undefined = undefined

export function createWeb3Modal(options: Web3ModalOptions) {
  if (!modal) {
    modal = new Web3Modal({
      ...options,
      _sdkVersion: `vue-web3js-${ConstantsUtil.VERSION}`,
      ethereumHelpers
    })
    getWeb3Modal(modal)
  }

  return modal
}

// -- Composites --------------------------------------------------------------
export function useWeb3ModalProvider() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalProvider" composition')
  }

  const walletProvider = ref(modal.getWalletProvider())
  const walletProviderType = ref(modal.getWalletProviderType())

  const unsubscribe = modal.subscribeProvider(state => {
    walletProvider.value = state.provider
    walletProviderType.value = state.providerType
  })

  onUnmounted(() => {
    unsubscribe?.()
  })

  return {
    walletProvider,
    walletProviderType
  }
}

export function useDisconnect() {
  async function disconnect() {
    await modal?.disconnect()
  }

  return {
    disconnect
  }
}

export function useWeb3ModalAccount() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalAccount" composition')
  }

  const address = ref(modal.getAddress())
  const isConnected = ref(modal.getIsConnected())
  const chainId = ref(modal.getChainId())

  const unsubscribe = modal.subscribeProvider(state => {
    address.value = state.address
    isConnected.value = state.isConnected
    chainId.value = state.chainId
  })

  onUnmounted(() => {
    unsubscribe?.()
  })

  return {
    address,
    isConnected,
    chainId
  }
}

export {
  useWeb3ModalTheme,
  useWeb3Modal,
  useWeb3ModalState,
  useWeb3ModalEvents
} from '@web3modal/scaffold-vue'

// -- Universal Exports -------------------------------------------------------
export { defaultConfig } from '@web3modal/connectors'