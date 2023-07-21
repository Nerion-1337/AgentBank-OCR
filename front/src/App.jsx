import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Links } from "#data/links";
import Error from "#page/error";
import Home from "#page/home";
import Signin from "./page/sign_in";
import User from "./page/user";
import Nav from "#components/build/nav";
import Footer from "#components/build/footer";
//
//
function App() {
//
//
  if (Links) {
    return (
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path={Links[0].url} element={<Home />} />
          <Route path={Links[1].url} element={<Signin />} />
          <Route path={Links[2].url} element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    );
  } else {
    return <Error id="1337" error="Error system !" />;
  }
}

export default App;
