import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Home from "./components/Home";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#181818";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
     <Router>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <div className="container my-4 mx-10"> */}
        
        {/* <About/> */}
      {/* </div> */}
      {/* <Route exact path='/' element={< Home />}></Route> */}
      <Routes>
      <Route exact path='/' element={<TextForm heading="Enter the text to analyze below..." mode = {mode} />}></Route>
      <Route exact path='/about' element={< About />}></Route>
      <Route exact path='/home' element={<TextForm heading="Enter the text to analyze below..." mode = {mode} />}></Route>
      <Route exact path='/homee' element={<Home/>}></Route>

      </Routes>
      </Router>
    </>
  );
}

export default App;
