import Signup from "./signup"
import Login from "./login"
import Dashboard from "./dashboard"
//import { Navbar,Container,Nav,NavDropdown,Form,Row,Col,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route,Routes,Navigate } from 'react-router-dom'

function App() {
   
   const user = localStorage.getItem("token");

  return (
   <Router>
     <Routes>
      {user && <Route path="/" exact element={<Dashboard />} />}
      <Route path="/signup" exact element={<Signup />}></Route>
      <Route path="/login" exact element={<Login />}></Route>
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
   </Router>
  );
}

export default App;
