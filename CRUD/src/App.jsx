// import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import ViewTable from "./pages/ViewTable";
import EditPage from "./pages/EditPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/view" element={<ViewTable />} />
        <Route path="/edit-employee/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
