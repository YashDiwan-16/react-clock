import Current from "./components/Currenttime";
import { Heading } from "./components/Heading";
import List from "./components/List";
import Slogan from "./components/Slogan";

function App() {
  return (
    <>
      <div className="container text-center">
        <Heading> </Heading>
        <Slogan></Slogan>
        <Current></Current>
        <List></List>
      </div>
    </>
  );
}

export default App;
