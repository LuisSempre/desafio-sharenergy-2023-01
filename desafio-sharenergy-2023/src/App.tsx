import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Four from "./pages/Four";
import Home from "./pages/Home";
import Two from "./pages/Two";
import Three from "./pages/Three";

export default function App() {
  return (
    <>
      <Router>
        <div className='pt-20'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Two' element={<Two />} />
            <Route path='/Three' element={<Three />} />
            <Route path='/four' element={<Four />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
