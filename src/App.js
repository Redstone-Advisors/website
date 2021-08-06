import Home from './pages/Home/Home'
import {
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import './styles/global.scss'
function App() {
  return (
    <>
     <Navbar/>
    <Switch> 
    <Route path="/">
            <Home/>
          </Route>
</Switch>
</>
  );
}

export default App;
