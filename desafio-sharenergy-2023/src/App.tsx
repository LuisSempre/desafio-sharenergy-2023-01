import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import One from "./pages/One";

export default function App() {
  return (
    <Router>
      <div className='pt-20'>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/one' element={<One />} />
        </Routes>
      </div>
    </Router>
  );
}
