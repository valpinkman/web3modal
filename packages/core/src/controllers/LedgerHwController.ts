import { subscribeKey as subKey } from 'valtio/utils'
import { proxy, subscribe as sub } from 'valtio/vanilla'

// -- Types --------------------------------------------- //
export interface LedgerHwWalletControllerState {
  scannedDevices: Record<string, string>
  connectedDevices: Record<string, string>
  errors: Record<string, string>
}


type StateKey = keyof AssetControllerState

// -- State --------------------------------------------- //
const state = proxy<LedgerHwWalletControllerState>({
  walletImages: {},
  networkImages: {},
  connectorImages: {},
  tokenImages: {},
  currencyImages: {}
})