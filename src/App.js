import { Navigate, Routes, Route } from "react-router-dom";
import './index.css';
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Portfoliopage from "./pages/Portfoliopage";
import Resumepage from "./pages/Resumepage";
import Contactpage from "./pages/Contactpage";
import Nav from "./components/Nav";
import ProjectsSectionpage from "./pages/ProjectsSectionpage";
import Programmingpage from "./pages/Programmingpage";

function App() {
    return (
        <main>
            <Nav />
            <Routes>
                <Route path="/home" element={<Homepage/>} />
                <Route path="/about" element={<Aboutpage/>} />
                <Route path='/portfolio' element={<Portfoliopage/>} />
                <Route path="/resume" element={<Resumepage />} />
                <Route path="/contact" element={<Contactpage />} />
                <Route path="*" element={<Navigate to="/home" />} />
                <Route path="/projects" element={<ProjectsSectionpage/>} />
                <Route path="/programming" element={<Programmingpage/>} />
            </Routes>
        </main>
    );
}

export default App;