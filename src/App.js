import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa"
import Contato from "./components/pages/Contato"
import NovoProjeto from "./components/pages/NovoProjeto"
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar"
import Projects from "./components/pages/Projects";

import {BrowserRouter as Router, Routes,Route } from "react-router-dom"
import './App.css';


function App() {
  return (
<Router>

    <NavBar/>

    <Container customClass='min-height'>
      <Routes>
          <Route exact path="/" element={ <Home />}/>
          
          <Route exact path="/Projects" element={ <Projects />}/>

          <Route exact path="/Contato" element={ <Contato />}/>

          <Route exact path="/Empresa" element={ <Empresa />}/>

          <Route exact path="/NovoProjeto" element={ <NovoProjeto />}/>
        </Routes>
    </Container>
    <Footer />
    </Router >
  );
}

export default App;
