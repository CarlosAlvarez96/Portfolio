import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './Navbar'

ReactDOM.render(
  <ChakraProvider>
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
