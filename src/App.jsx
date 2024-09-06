import "./App.css";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col gap-12">
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;
