import Current from "./components/Currenttime";
import { Heading } from "./components/Heading";
import Slogan from "./components/Slogan";

function App() {
  return (
    <>
      <div className="container text-center">
        <Heading> </Heading>
        <Slogan></Slogan>
        <Current></Current>
      </div>
    </>
  );
}

export default App;
