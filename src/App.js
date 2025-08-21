import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Today from "./pages/Today";
import Week from "./pages/Week";


export default function App() {




return (

<div className="App">
    <Router>
       <NavBar />
      <Routes>
        <Route path="/"  element= {<Today />} />
        <Route path="/week" element={<Week />} />
        
      </Routes>
    </Router>
</div>
  );
}
