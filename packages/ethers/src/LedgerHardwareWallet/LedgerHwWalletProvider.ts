/* eslint-disable @typescript-eslint/no-explicit-any */
import EventEmitter from 'eventemitter3'

import type { Provider, RequestArguments } from '@web3modal/scaffold-utils/ethers'
// eslint-disable-next-line require-extensions/require-extensions
import { LedgerHwRpcHandler } from './LedgerHwRpcHandler'

export class LedgerHwWalletProvider extends EventEmitter implements Provider {
  private _rpcHandler: LedgerHwRpcHandler

  constructor() {
    super()
    this._rpcHandler = new LedgerHwRpcHandler()
  }

  async request<T>(args: RequestArguments): Promise<T> {
    return this._rpcHandler.handleRequest(args)
  }

  override on<T extends string | symbol>(
    event: T,
    fn: (...args: any[]) => void,
    context?: any
  ): this {
    // eslint-disable-next-line no-console
    console.log('Emit called inside LedgerHw Provider')

    return super.on(event, fn, context)
  }

  override emit<T extends string | symbol>(event: T, ...args: any[]): boolean {
    // eslint-disable-next-line no-console
    console.log('Emit called inside LedgerHw Provider')

    return super.emit(event, ...args)
  }
}
