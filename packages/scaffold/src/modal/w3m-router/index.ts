import type { RouterControllerState } from '@web3modal/core'
import { RouterController } from '@web3modal/core'
import { customElement } from '@web3modal/ui'
import { LitElement, html } from 'lit'
import { state } from 'lit/decorators.js'
import styles from './styles.js'

@customElement('w3m-router')
export class W3mRouter extends LitElement {
  public static override styles = styles

  // -- Members ------------------------------------------- //
  private resizeObserver?: ResizeObserver = undefined

  private prevHeight = '0px'

  private prevHistoryLength = 1

  private unsubscribe: (() => void)[] = []

  // -- State & Properties -------------------------------- //
  @state() private view = RouterController.state.view

  public constructor() {
    super()
    this.unsubscribe.push(RouterController.subscribeKey('view', val => this.onViewChange(val)))
  }

  public override firstUpdated() {
    this.resizeObserver = new ResizeObserver(async ([content]) => {
      const height = `${content?.contentRect.height}px`
      if (this.prevHeight !== '0px') {
        await this.animate([{ height: this.prevHeight }, { height }], {
          duration: 150,
          easing: 'ease',
          fill: 'forwards'
        }).finished
        this.style.height = 'auto'
      }
      this.prevHeight = height
    })
    this.resizeObserver.observe(this.getWrapper())
  }

  public override disconnectedCallback() {
    this.resizeObserver?.unobserve(this.getWrapper())
    this.unsubscribe.forEach(unsubscribe => unsubscribe())
  }

  // -- Render -------------------------------------------- //
  public override render() {
    return html`<div>${this.viewTemplate()}</div>`
  }

  // -- Private ------------------------------------------- //
  private viewTemplate() {
    switch (this.view) {
      case 'Connect':
        return html`<w3m-connect-view></w3m-connect-view>`
      case 'ConnectingWalletConnect':
        return html`<w3m-connecting-wc-view></w3m-connecting-wc-view>`
      case 'ConnectingExternal':
        return html`<w3m-connecting-external-view></w3m-connecting-external-view>`
      case 'ConnectingSiwe':
        return html`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`
      case 'AllWallets':
        return html`<w3m-all-wallets-view></w3m-all-wallets-view>`
      case 'LedgerHwWallet':
        return html`<w3m-ledger-hw-wallet-view></w3m-ledger-hw-wallet-view>`
      case 'Networks':
        return html`<w3m-networks-view></w3m-networks-view>`
      case 'SwitchNetwork':
        return html`<w3m-network-switch-view></w3m-network-switch-view>`
      case 'Account':
        return html`<w3m-account-view></w3m-account-view>`
      case 'AccountSettings':
        return html`<w3m-account-settings-view></w3m-account-settings-view>`
      case 'WhatIsAWallet':
        return html`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`
      case 'WhatIsANetwork':
        return html`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`
      case 'GetWallet':
        return html`<w3m-get-wallet-view></w3m-get-wallet-view>`
      case 'Downloads':
        return html`<w3m-downloads-view></w3m-downloads-view>`
      case 'EmailVerifyOtp':
        return html`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`
      case 'EmailVerifyDevice':
        return html`<w3m-email-verify-device-view></w3m-email-verify-device-view>`
      case 'ApproveTransaction':
        return html`<w3m-approve-transaction-view></w3m-approve-transaction-view>`
      case 'Transactions':
        return html`<w3m-transactions-view></w3m-transactions-view>`
      case 'UpgradeEmailWallet':
        return html`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`
      case 'UpgradeToSmartAccount':
        return html`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`
      case 'UpdateEmailWallet':
        return html`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`
      case 'UpdateEmailPrimaryOtp':
        return html`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`
      case 'UpdateEmailSecondaryOtp':
        return html`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`
      case 'UnsupportedChain':
        return html`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`
      case 'OnRampProviders':
        return html`<w3m-onramp-providers-view></w3m-onramp-providers-view>`
      case 'OnRampActivity':
        return html`<w3m-onramp-activity-view></w3m-onramp-activity-view>`
      case 'OnRampTokenSelect':
        return html`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`
      case 'OnRampFiatSelect':
        return html`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`
      case 'WhatIsABuy':
        return html`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`
      case 'BuyInProgress':
        return html`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`
      case 'WalletReceive':
        return html`<w3m-wallet-receive-view></w3m-wallet-receive-view>`
      case 'WalletCompatibleNetworks':
        return html`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`
      case 'WalletSend':
        return html`<w3m-wallet-send-view></w3m-wallet-send-view>`
      case 'WalletSendSelectToken':
        return html`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`
      case 'WalletSendPreview':
        return html`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`
      default:
        return html`<w3m-connect-view></w3m-connect-view>`
    }
  }

  private async onViewChange(newView: RouterControllerState['view']) {
    const { history } = RouterController.state
    let xOut = -10
    let xIn = 10
    if (history.length < this.prevHistoryLength) {
      xOut = 10
      xIn = -10
    }

    this.prevHistoryLength = history.length
    await this.animate(
      [
        { opacity: 1, transform: 'translateX(0px)' },
        { opacity: 0, transform: `translateX(${xOut}px)` }
      ],
      { duration: 150, easing: 'ease', fill: 'forwards' }
    ).finished
    this.view = newView
    await this.animate(
      [
        { opacity: 0, transform: `translateX(${xIn}px)` },
        { opacity: 1, transform: 'translateX(0px)' }
      ],
      { duration: 150, easing: 'ease', fill: 'forwards', delay: 50 }
    ).finished
  }

  private getWrapper() {
    return this.shadowRoot?.querySelector('div') as HTMLElement
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-router': W3mRouter
  }
}
