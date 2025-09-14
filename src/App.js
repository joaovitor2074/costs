import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./components/pages/Home";      // importa componente Home
import Contato from "./components/pages/Contato"; // importa componente Contato
import NewProject from "./components/pages/NewProject"; // importa componente Contato
import Company from "./components/pages/Company"; // importa componente Contato
import Projects from "./components/pages/Projects";
import Container from "./components/layouts/container";
import Project from "./components/pages/project";

import Navbar from "./components/layouts/navbar"
import Footer from "./components/layouts/Footer"

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Container customClass="min-height">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/newproject" element={<NewProject />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/newproject" element={<NewProject />} />
                    <Route path="/project/:id" element={<Project />} />
                </Routes>
            </Container>

            <Footer />
        </BrowserRouter>

    );
}

export default App;
