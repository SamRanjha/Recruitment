import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Search from './Search';
import Header from './Header'
import Home from './Home'
import './index.css'


const t = <div className = "main">
    <Header />
    <Home />
    <Search />
</div>


ReactDOM.render(t, document.getElementById('root'));