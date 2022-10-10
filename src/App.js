import { Alert, AlertDescription, AlertIcon, AlertTitle, ChakraProvider, CloseButton, useToast } from '@chakra-ui/react'
import { Main } from './pages/Main'
import { Nav } from './pages/Nav'
import "./global/index.css"
import { useEffect } from 'react'

function App() {
  const toast = useToast();

  useEffect(() => {
    if (window.innerWidth <= 310) {
      toast({
        position: 'bottom',
        duration: 6000,
        isClosable: true,
        render: (onClose) => (
          <Alert
            status='warning'
            variant='solid'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='max-content'
            position={'relative'}
          >
            <AlertIcon />
            <AlertTitle >Beralih ke Mode Dekstop!</AlertTitle>
              <AlertDescription maxWidth='sm'>
                Jika tidak akan mengganggu penampilan beberapa halaman
              </AlertDescription>
            <CloseButton
              position={'absolute'}
              top={0} 
              right={0}
              onClick={() => toast.closeAll()}
            />
          </Alert>
        )
      })
    }
  })

  return (
    <ChakraProvider>
      <Nav />
      <Main />
    </ChakraProvider>
  );
}

export default App;
