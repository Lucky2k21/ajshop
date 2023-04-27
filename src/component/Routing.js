import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Home from './Home/Home';
import Product from './Product/Product';
import CatPro from './CatPro/CatPro';
import Details from './Details/Details';
import AddProduct from './AddProduct/AddProduct';
import AdminHeader from './Admin/AdminHeader';
import Description from './Admin/Description';
import ProductList from './Admin/ProductList';
import ProductUpdate from './Admin/ProductUpdate';
import DescriptionList from './Admin/DescriptionList';
import DescriptionUpdate from './Admin/DescriptionUpdate';
import Cart from './Cart/Cart';
import viewOrder from './Cart/viewOrder';
import Contact from './Contact/Contact';
import ALogin from './Admin/Login';
import Order from './Admin/Order'
import Login from './login/login';
import Register from './login/register';
import Condition from './Home/Condition';

const Routing = () => {

    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route  path="/Product/Product" component={Product} />
            <Route  path="/CatPro/CatPro/:category_id" component={CatPro} />
            <Route  path="/Details/Details" component={Details} />
            <Route  path="/Condition" component={Condition} />
            <Route  path="/AddProduct/AddProduct" component={AddProduct} />
            <Route  path="/Admin/AdminHeader" component={AdminHeader} />
            <Route  path="/Admin/Order" component={Order} />
            <Route  path="/Admin/Login" component={ALogin} />
            <Route  path="/Admin/Description" component={Description} />
            <Route  path="/Admin/ProductList" component={ProductList} />
            <Route  path="/Admin/ProductUpdate/:product_id" component={ProductUpdate} />
            <Route  path="/Admin/DescriptionList" component={DescriptionList} />
            <Route  path="/Admin/DescriptionUpdate/:product_id" component={DescriptionUpdate} />
            <Route  path="/login/login" component={Login} />
            <Route  path="/login/register" component={Register} />
            <Route  path="/Cart/Cart/:product_id" component={Cart} />
            <Route  path="/Cart/viewOrder/:email" component={viewOrder} />
            <Route  path="/Contact/Contact" component={Contact} />
        </BrowserRouter>

    )
}


export default Routing