
import {
  ChakraProvider,
  Box,
  Center
} from '@chakra-ui/react'

export const Footer = () => {
  return (
    <ChakraProvider>
      <Box minHeight='80px' backgroundColor='#941' padding='25px' 
      width='100%' color='white' marginBottom='0' position='absolute'>
        <Center>
          <h1>Rodapé</h1>
        </Center>
      </Box>
    </ChakraProvider>

  )
}
