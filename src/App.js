import { ChakraProvider } from '@chakra-ui/react'
import { Main } from './pages/Main'
import { Nav } from './pages/Nav'

function App() {
  return (
    <ChakraProvider>
      <Nav />
      <Main />
    </ChakraProvider>
  );
}

export default App;
