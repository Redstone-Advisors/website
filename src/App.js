import Home from "./pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./styles/global.scss";
import Theme from "./Theme.jsx";
import About from "./pages/About/About";
import Who from "./pages/Who/Who";
import Blog from "./pages/Blog/Blog";
import What from "./pages/What/What";
import Why from "./pages/Why/Why";
import FAQ from "./pages/FAQ/FAQ";
import Philosophy from "./pages/Philosophy/Philosophy";

function App() {
  return (
    <Theme>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/who">
          <Who />
        </Route>
        <Route path="/what">
          <What />
        </Route>
        <Route path="/why">
          <Why />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
      </Switch>
    </Theme>
  );
}

export default App;
