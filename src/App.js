import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";


const App = () => {
    return(
       <div>
          <Header />
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element= {<About />}/>
             <Route path="/contact" element={<Contact />} />
             <Route path="/cart" element= {<Cart />} />
          </Routes>
       </div>
    )
}

export default App;