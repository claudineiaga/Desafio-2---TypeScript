import './Header.css'
import {
  ChakraProvider,
  Box,
  Center
} from '@chakra-ui/react'

export const Header = () => {
  return (
    <ChakraProvider>
      <Box minHeight='80px' backgroundColor='#941' padding='25px' width='100%' color='white'>
        <Center>
          <h1>Aplicação</h1>
        </Center>
      </Box>
    </ChakraProvider>

  )
}
