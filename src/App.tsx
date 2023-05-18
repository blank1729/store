import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Id from "./pages/Id";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

function App() {
  const location = useLocation();
  return (
    <Routes key={location.key}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Id />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
