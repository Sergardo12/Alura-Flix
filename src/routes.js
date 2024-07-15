import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewVideo from "./pages/Newvideo";
import Header from "./components/Header";
import Footer from "./components/Footer";


function AppRoutes (){
    return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Newvideo" element={<NewVideo/>}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
       
    </>
    
    )
}
export default AppRoutes;