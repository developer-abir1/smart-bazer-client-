import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Order from './Component/Order/Order';
import Deals from './Component/Deals/Deals';
import Admin from './Component/Admin/Admin';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import AddProduct from './Component/AddProduct/AddProduct';
import ProductManager from './Component/ProductManger/ProductManager';
import Naber from './Component/Header/Navber/Naber';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/">
         
         <Home></Home>
       </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route path="/order"> 
       <Header></Header>
         <Order></Order>
       </Route>
       <Route path="/deals">
         <Header></Header> 
         <Deals></Deals>
       </Route>
       <Route path="/admin"> 
       <Admin></Admin>
       </Route>
       <Route path="/login"> 
       <Naber></Naber>
       <Login></Login>
       </Route>
       <Route path="/addProduct">
         <AddProduct></AddProduct>
       </Route>
       <Route path="/productManger">
         <ProductManager></ProductManager>
       </Route>

       <Route path="*"> 
     <NotFound></NotFound>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
