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
import OrderData from './Component/OrderData/OrderData';
import { createContext, useState } from 'react';
import PrivetRoute from './Component/PrivetRoute/PrivetRoute';
import ProductsData from './Component/ProductManger/ProductsData/ProductsData';
import Product from './Component/Product/Product';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
   <Router>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
       <PrivetRoute path="/order"> 
       
       <Header></Header>
         <Order></Order>
       </PrivetRoute>
       <Route path="/deals">
         <Deals></Deals>
       </Route>
       <PrivetRoute path="/admin"> 
       <Admin></Admin>
       </PrivetRoute>
       <Route path="/login"> 
       <Header></Header>
       <Login></Login>
       </Route>
      
       <Route path="/addProduct">
         <AddProduct></AddProduct>
       </Route>
       <Route path="/productManger">
         <ProductManager></ProductManager>
       </Route>
       <PrivetRoute path="/orderData/:orderId">
         <Naber></Naber>
          <OrderData></OrderData>
       </PrivetRoute>
       
       

       <Route path="*"> 
     <NotFound></NotFound>
       </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
