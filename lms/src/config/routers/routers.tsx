import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../screens/Login";
import Signupuser from "../../screens/SignUpuser";
import Home from "../../screens/Home";
import Donor from "../../screens/Donor";
import Acceptors from "../../screens/Acceptors";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home/:id" element={<Home />} />
          <Route path="signup" element={<Signupuser />} />
          <Route path="/donors/:id" element={<Donor />} />
          <Route path="/acceptors/:id" element={<Acceptors />} />



        </Routes>
      </BrowserRouter>
    </>
  );
}
