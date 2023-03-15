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

const Routing = () => {

    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/Product/Product" component={Product} />
            <Route exact path="/CatPro/CatPro/:category_id" component={CatPro} />
            <Route exact path="/Details/Details" component={Details} />

            <Route exact path="/AddProduct/AddProduct" component={AddProduct} />
            <Route exact path="/Admin/AdminHeader" component={AdminHeader} />
            <Route exact path="/Admin/Order" component={Order} />
            <Route exact path="/Admin/Login" component={ALogin} />
            <Route exact path="/Admin/Description" component={Description} />
            <Route exact path="/Admin/ProductList" component={ProductList} />
            <Route exact path="/Admin/ProductUpdate/:product_id" component={ProductUpdate} />
            <Route exact path="/Admin/DescriptionList" component={DescriptionList} />
            <Route exact path="/Admin/DescriptionUpdate/:product_id" component={DescriptionUpdate} />
            <Route exact path="/login/login" component={Login} />
            <Route exact path="/login/register" component={Register} />
            <Route exact path="/Cart/Cart/:product_id" component={Cart} />
            <Route exact path="/Cart/viewOrder/:email" component={viewOrder} />
            <Route exact path="/Contact/Contact" component={Contact} />
        </BrowserRouter>

    )
}


export default Routing