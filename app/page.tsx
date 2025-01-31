import { Box, Button, ClientOnly, HStack, Heading, Skeleton, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { ColorModeToggle } from '../components/ui/color-mode-toggle'
import { FaWallet } from 'react-icons/fa'

export default async function Page() {
  return (
    <Box textAlign="center" fontSize="xl" pt="30vh">
      <VStack gap="8">
        <FaWallet size="80" />
        <Heading size="2xl" letterSpacing="tight">
          Consumer Power as Activism
        </Heading>

        <Link href="https://discord.gg/MNQeAvQMAy" passHref target="_blank" rel="noopener noreferrer">
          <Button colorScheme="blue">Let's go!</Button>
        </Link>
      </VStack>

      <Box pos="absolute" top="4" right="4">
        <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
          <ColorModeToggle />
        </ClientOnly>
      </Box>
    </Box>
  )
}
