import App from "./components/App";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import axios from "axios";

//var token = localStorage.getItem('token');
//
//if (token != null){
//    axios.defaults.headers.common['Authorization'] = 'Token ' + token;
//};

const app = <App />;

ReactDOM.render(app, document.getElementById("app"));
