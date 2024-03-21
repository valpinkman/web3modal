/* eslint-disable no-console */
/* eslint-disable prefer-promise-reject-errors */
// eslint-disable-next-line require-extensions/require-extensions
import type { RequestArguments } from 'packages/scaffold-utils/dist/types/src/EthersTypesUtil'
import { createPublicClient, http } from 'viem'
import { sepolia } from 'viem/chains'
import { LedgerDeviceSdk, LedgerDeviceSdkBuilder } from '@ledgerhq/device-sdk-core'

class LedgerHwRpcHandler {
  private _ledgerDeviceSdk: LedgerDeviceSdk
  private _walletClient

  constructor() {
    this._ledgerDeviceSdk = new LedgerDeviceSdkBuilder().build()
    this._walletClient = createPublicClient({
      chain: sepolia,
      transport: http()
    })
  }

  /**
   * Handles an RPC request and returns a promise of the corresponding RPC response.
   * @param request The RPC request to handle.
   * @returns A promise of the RPC response.
   */

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/require-await, prefer-promise-reject-errors
  async handleRequest(request: RequestArguments): Promise<any> {
    const methodName: string = request.method
    console.log('LedgerHwHandler', `Method Name => ${methodName}`)
    switch (methodName) {
      case 'eth_requestAccounts':
        return this._ledgerDeviceSdk.hackConnectAndDiscover()
      case 'eth_accounts':
        return this._ledgerDeviceSdk.hackGetEthAddress()
      case 'eth_sign':
        // Handle eth_sign
        Promise.reject('Need to implements with device SDK')
        break
      case 'eth_signTransaction':
        // Handle eth_signTransaction
        Promise.reject('Need to implements with device SDK')
        break
      case 'web3_clientVersion':
      case 'web3_sha3':
      case 'net_version':
      case 'net_listening':
      case 'net_peerCount':
      case 'eth_protocolVersion':
      case 'eth_syncing':
      case 'eth_coinbase':
      case 'eth_chainId':
      case 'eth_mining':
      case 'eth_hashrate':
      case 'eth_gasPrice':
      case 'eth_blockNumber':
      case 'eth_getBalance':
      case 'eth_getStorageAt':
      case 'eth_getTransactionCount':
      case 'eth_getBlockTransactionCountByHash':
      case 'eth_getBlockTransactionCountByNumber':
      case 'eth_getUncleCountByBlockHash':
      case 'eth_getUncleCountByBlockNumber':
      case 'eth_getCode':
      case 'eth_sendTransaction':
      case 'eth_sendRawTransaction':
      case 'eth_call':
      case 'eth_estimateGas':
      case 'eth_getBlockByHash':
      case 'eth_getBlockByNumber':
      case 'eth_getTransactionByHash':
      case 'eth_getTransactionByBlockHashAndIndex':
      case 'eth_getTransactionByBlockNumberAndIndex':
      case 'eth_getTransactionReceipt':
      case 'eth_getUncleByBlockHashAndIndex':
      case 'eth_getUncleByBlockNumberAndIndex':
      case 'eth_newFilter':
      case 'eth_newBlockFilter':
      case 'eth_newPendingTransactionFilter':
      case 'eth_uninstallFilter':
      case 'eth_getFilterChanges':
      case 'eth_getFilterLogs':
      case 'eth_getLogs':
        return this._walletClient.request(
          request as unknown as Parameters<typeof this._walletClient.request>
        )
      default:
        Promise.reject(new Error(`Method not known${methodName}`))
        break
    }

    return 'toto'
  }
}

export { LedgerHwRpcHandler }
