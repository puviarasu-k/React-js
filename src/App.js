import Result from "./result";
import Home from "./home";
import { useState } from "react";
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import userContext from "./context";
import Reduxhome from "./redexhome";
import Reduxresult from "./reduxresult";
function App() {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  return (
    <BrowserRouter>
      <userContext.Provider value={{ user,setuser,pass,setpass }}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/result' element={<Result />} />
          <Route path='/reduxhome' element={<Reduxhome />} />
          <Route path='/reduxresult' element={<Reduxresult />} />
        </Routes>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;
