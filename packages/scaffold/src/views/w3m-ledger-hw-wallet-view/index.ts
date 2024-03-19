import { ApiController, AssetUtil, CoreHelperUtil, OptionsController } from '@web3modal/core'
import { customElement } from '@web3modal/ui'
import { LitElement, html } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'


@customElement('w3m-ledger-hw-wallet-view')
export class W3mLedgerHwWalletView extends LitElement {
  // -- Render -------------------------------------------- //
  public override render() {
    return html`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <button
          onClick=${() => {console.log("Scan for Ledger HW Wallets")}}
        />
      </wui-flex>
    `
  }

  // -- Private ------------------------------------------- //
  private recommendedWalletsTemplate() {
    const { recommended, featured } = ApiController.state
    const { customWallets } = OptionsController.state
    const wallets = [...featured, ...(customWallets ?? []), ...recommended].slice(0, 4)

    return wallets.map(
      wallet => html`
        <wui-list-wallet
          name=${wallet.name ?? 'Unknown'}
          tagVariant="main"
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          @click=${() => {
            CoreHelperUtil.openHref(wallet.homepage ?? EXPLORER, '_blank')
          }}
        ></wui-list-wallet>
      `
    )
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-ledger-hw-wallet-view': W3mLedgerHwWalletView
  }
}
