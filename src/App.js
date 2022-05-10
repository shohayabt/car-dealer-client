import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Management } from "./components/Management/Management";
import MyItems from "./components/MyItems/MyItems";
import { NavBar } from "./components/NavBar/NavBar";
import PrivateAuth from "./components/PrivateAuth/PrivateAuth";
import Signup from "./components/Signup/Signup";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/car/:id" element={<UpdateProduct />}></Route>
        <Route
          path="addProduct"
          element={
            <PrivateAuth>
              <AddProduct></AddProduct>
            </PrivateAuth>
          }
        ></Route>
        <Route
          path="myitems"
          element={
            <PrivateAuth>
              <MyItems />
            </PrivateAuth>
          }
        ></Route>
        <Route
          path="management"
          element={
            <PrivateAuth>
              <Management></Management>
            </PrivateAuth>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
