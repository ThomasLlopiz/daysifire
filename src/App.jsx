import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="container mx-auto flex flex-col justify-center gap-40 w-10/12">
      <Nav></Nav>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
