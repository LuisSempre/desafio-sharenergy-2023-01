import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageCats from "./pages/PageCats";
import Dogs from "./components/Dogs";
import Clients from "./components/Clients";

export default function App() {
  return (
    <>
      <Router>
        <div className='pt-20'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pagecats' element={<PageCats />} />
            <Route path='/pagedogs' element={<Dogs />} />
            <Route path='/pageclients' element={<Clients />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
