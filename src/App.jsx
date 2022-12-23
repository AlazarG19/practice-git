import Container from "./Components/Container";
import Navigation from "./Components/Navigation";
import {BrowserRouter as  Routes, Route, Link, Router} from "react-router-dom"
import './index.css';
function App() {
  return (
    <div className="App">
     <Navigation />
     <Container />
     {/* <Router>
        <Routes>
          <Route path='/' element={<Container/>}/>
          <Route path='blogDetails' element={<BlogDetail/>} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
