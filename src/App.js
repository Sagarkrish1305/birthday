import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Person from "./Pages/Person/Person";
import ThakiJa from "./Pages/ThakiJa/ThakiJa";
import Clue from "./Pages/Clues/Clue";
import Home from "./Pages/Home";
import SantaClaus from "./Pages/SantaClause/SantaClause";
 const mapRoutes = {
    "clue1" : <Clue clueFileName={'jiya'} /> ,
    "jiya": <Person textFileName={'jiya'} personName={'Jiya'} />,

    "clue2" : <Clue clueFileName={'saloni'} />, 
    "saloni": <Person textFileName={'saloni'} personName={'Saloni'} />,

    "clue3" : <Clue clueFileName={'krish'} />, 
    "krish": <Person textFileName={'krish'} personName={'Krish'} />, 

    "clue4" : <Clue clueFileName={'dhara'} />,
    "dhara": <Person textFileName={'dhara'} personName={'Dhara'} />, 

    "clue5" : <Clue clueFileName={'sarjana'} />, 
    "sarjana": <Person textFileName={'sarjana'} personName={'Sarjana'} />, 
    
    "clue6" : <Clue clueFileName={'viha'} />, 
    "viha": <Person textFileName={'viha'} personName={'Viha'} />, 

    "clue7" : <Clue clueFileName={'riza'} />, 
    "riza": <Person textFileName={'riza'} personName={'Riza'} />, 

    "clue8" : <ThakiJa />, 
  }

  const routeList = [];
  
  routeList.push(
    <Route key={-1} path="/" element={<Home />} />,
    <Route key={-2} path="/santaclaus" element={<SantaClaus />} />
  )
  let str = ""
  Object.entries(mapRoutes).forEach(([clueName, element], index) => {
    str += '/'
    str += clueName
    routeList.push(
      <Route key={index} path={str} element={element} />
    )
  });
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routeList}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
