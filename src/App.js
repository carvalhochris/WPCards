import "./App.css";
import { useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import GetCards from "./components/GetCards";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={toggleColorMode} mt={7} size={10} mb={7}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        <GetCards />
      </header>
    </div>
  );
}

export default App;
