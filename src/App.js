import Home from './pages/Home/Home'
import {
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import './styles/global.scss'
import Theme from './Theme.jsx'
function App() {
  return (
    <Theme>
     <Navbar/>
    <Switch> 
    <Route path="/">
            <Home/>
          </Route>
</Switch>
</Theme>
  );
}

export default App;
