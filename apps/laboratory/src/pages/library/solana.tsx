import { Center, Text, VStack } from '@chakra-ui/react'
import { createWeb3Modal, defaultSolanaConfig } from '@web3modal/solana/react'

import { SolanaConnectButton } from '../../components/Solana/SolanaConnectButton'
import { ThemeStore } from '../../utils/StoreUtil'

const projectId = process.env['NEXT_PUBLIC_PROJECT_ID']
if (!projectId) {
    throw new Error('NEXT_PUBLIC_PROJECT_ID is not set')
}

const chains = []

const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Laboratory',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const solanaConfig = defaultSolanaConfig({
    chains,
    projectId,
    metadata
})

const modal = createWeb3Modal({
    solanaConfig,
    projectId,
    chains,
    enableAnalytics: false,
    metadata,
    termsConditionsUrl: 'https://walletconnect.com/terms',
    privacyPolicyUrl: 'https://walletconnect.com/privacy'
})

ThemeStore.setModal(modal)

export default function Solana() {
    return (
        <>
            <Center paddingTop={10}>
                <Text fontSize="xl" fontWeight={700}>
                    Solana default
                </Text>
                <Center h="65vh">
                    <VStack gap={4}>
                        <SolanaConnectButton />
                    </VStack>
                </Center>
            </Center>
        </>
    );
}