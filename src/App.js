import {             
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Contenido from "./componentes/contenido";
import Main from "./componentes/main";
import Input from "./componentes/input";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={ <Main/> } />
        <Route path="/input" element= { <Input/> } />
      </Routes>
    </Router>
  );
}

export default App;
