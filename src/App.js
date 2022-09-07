import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Login from "./Login";
import Sign from "./Sign";
import Main from "./Main";
import Income from "./Income";
import Expense from "./Expense";


export default function App(){
    return <>
    <GlobalStyle />
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/sign" element={<Sign/>}/>
    <Route path="/main" element={<Main/>}/>
    <Route path="/income" element={<Income/>}/>
    <Route path="/expense" element={<Expense/>}/>
    </Routes>
    </BrowserRouter>
    </>
}

