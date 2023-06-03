import React from "react";
import Homecrud from "./Components/Homecrud";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createuser from "./Components/Createuser";
import Users from "./Components/Users";
import Edituser from "./Components/EditUser";
const App=()=>{
    return(
        <div>
            <BrowserRouter>
               <Homecrud/>
               <Routes>
                 <Route element={<Createuser/>} path='/'/>
                 <Route element={<Users/>} path='/users'/>
                 <Route element={<Edituser/>} path='/edit/:abc'/>
               </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App