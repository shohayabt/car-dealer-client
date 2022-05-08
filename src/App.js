import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import PrivateAuth from "./components/PrivateAuth/PrivateAuth";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="addProduct"
          element={
            <PrivateAuth>
              <AddProduct></AddProduct>
            </PrivateAuth>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
