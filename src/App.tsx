import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const LazyHome = lazy(() => import("./pages/Home/Home"));
const LazyLogin = lazy(() => import("./pages/Login/Login"));
const LazyCadastro = lazy(() => import("./pages/Cadastro/Cadastro"));
const LazyChatbot = lazy(() => import("./pages/Chatbot/Chatbot"));
const LazyChamados = lazy(() => import("./pages/Chamados/Chamados"));
const LazyIntegrantes = lazy(() => import("./pages/Integrantes/Integrantes"))

function App() {
    return(
        <>
        <BrowserRouter>
            <Suspense fallback={<>Carrgeando</>}>
                <Routes>
                    <Route path="/" element={<LazyHome />} />
                    <Route path="/login" element={<LazyLogin />} />
                    <Route path="/cadastro" element={<LazyCadastro />} />
                    <Route path="/chatbot" element={<LazyChatbot />} />
                    <Route path="/chamados" element={<LazyChamados />} />
                    <Route path="/integrantes" element={<LazyIntegrantes />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
        </>
    );
}

export default App;
