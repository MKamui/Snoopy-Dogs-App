import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import BreedDetails from "./components/BreedDetail/BreedDetails";
import CreateBreed from "./components/CreateBreed/CreateBreed";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import PageNotFound from "./components/PageNotFound/PageNotFound"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/create-breed" element={<CreateBreed/>}/>
      <Route path="/breed-details/:id" element={<BreedDetails/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;