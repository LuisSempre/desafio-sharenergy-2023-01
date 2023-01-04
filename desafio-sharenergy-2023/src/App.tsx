import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Four from "./pages/Four";
import Home from "./pages/Home";
import Two from "./pages/Two";
import Three from "./pages/Three";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { AuthContext } from "./contexts/Auth/AuthContext";
import { useContext } from "react";

export default function App() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  };
  return (
    <>
      <header>
        <nav>{auth.user && <button onClick={handleLogout}>Sair</button>}</nav>
      </header>
      <Router>
        <div className='pt-20'>
          <Routes>
            <Route
              path='/'
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path='/Two' element={<Two />} />
            <Route path='/Three' element={<Three />} />
            <Route path='/four' element={<Four />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
