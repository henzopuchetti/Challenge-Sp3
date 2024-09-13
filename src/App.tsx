import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const LazyHome = lazy(() => import("./pages/Home/Home"));
const LazySearch = lazy(() => import("./pages/Serach/Search"));
const LazyProfile = lazy(() => import("./pages/Profile/Profile"));
const LazyLogin = lazy(() => import("./pages/Login/Login"));
const LazyCadastro = lazy(() => import("./pages/Cadastro/Cadastro"));

function App() {
    return(
        <>
        <BrowserRouter>
            <Suspense fallback={<>Carrgeando</>}>
                <Routes>
                    <Route path="/" element={<LazyHome />} />
                    <Route path="/login" element={<LazyLogin />} />
                    <Route path="/cadastro" element={<LazyCadastro />} />
                    <Route path="/busca" element={<LazySearch />} />
                    <Route path="/perfil" element={<LazyProfile />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
        </>
    );
}

export default App;
