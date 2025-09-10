import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";      // importa componente Home
import Contato from "./components/pages/Contato"; // importa componente Contato
import NewProject from "./components/pages/NewProject"; // importa componente Contato
import Company from "./components/pages/Company"; // importa componente Contato
import Container from "./components/layouts/container";
import Footer from "./components/footer";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/company">Company</Link>
                <Link to="/NewProject">NewProject</Link>
            </nav>

            <Container customClass = 'min-height'>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contato" element={<Contato />} />
                    <Route exact path="/company" element={<Company />} />
                    <Route exact path="/newProject" element={<NewProject />} />
                </Routes>
            <Footer/>
            </Container>

        </BrowserRouter>
    );
}

export default App;
