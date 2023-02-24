import logo from './logo.svg';
import './App.css';
import { useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { Text, Link } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="App">
      <header className="App-header">
      <Button onClick={toggleColorMode} mt={7} size={10} mb={7}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
        <Text fontSize="2xl" mt={7}>
          ChakCRA
        </Text>
        <Link href="https://github.com/carvalhochris/chakCRA" isExternal>
        <Button
          // className="App-link"
          
          target="_blank"
          rel="noopener noreferrer"
          colorScheme="blue"
          mt={7}
        >
          Fork me on Github
        </Button>
        </Link>
      </header>
    </div>
  );
}

export default App;