'use client'

import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { mainnet } from '@reown/appkit/networks'

import { AppKitButtons } from '@/app/components/AppKitButtons'
// import { AppKitInfo } from '@/app/components/AppKitInfo'
import { AppKitWalletButtons } from '@/app/components/AppKitWalletButtons'
import { AppKitProvider } from '@/app/context/AppKitContext'
import { ConstantsUtil } from '@/app/utils/ConstantsUtil'

const networks = ConstantsUtil.EvmNetworks

const ethersAdapter = new EthersAdapter()

const config = {
  adapters: [ethersAdapter],
  networks,
  defaultNetwork: mainnet,
  projectId: ConstantsUtil.ProjectId
}

export default function Ethers() {
  return (
    <AppKitProvider config={config}>
      <AppKitButtons />
      {/* <AppKitInfo /> */}
      <AppKitWalletButtons
        wallets={[...ConstantsUtil.EvmWalletButtons,
          //  ...ConstantsUtil.Socials, ConstantsUtil.Email
          ]}
      />
    </AppKitProvider>
  )
}
