import { subscribeKey as subKey } from 'valtio/utils'
import { proxy, subscribe as sub } from 'valtio/vanilla'

// -- Types --------------------------------------------- //
export interface LedgerHwWalletControllerState {
  scannedDevices: Record<string, string>
  connectedDevices: Record<string, string>
  errors: Record<string, string>
}


type StateKey = keyof LedgerHwWalletControllerState

// -- State --------------------------------------------- //
const state = proxy<LedgerHwWalletControllerState>({
  walletImages: {},
  networkImages: {},
  connectorImages: {},
  tokenImages: {},
  currencyImages: {}
})

// -- Controller ---------------------------------------- //
export const LedgerHwWalletController = {
  state,

  subscribeListeningDevices(callback: (value: LedgerHwWalletControllerState['scannedDevices']) => void) {
    return sub(state.scannedDevices, () => callback(state.scannedDevices))
  }
}