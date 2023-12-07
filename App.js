import React from "react";
import ReactDOM from "react-dom/client"; 
let h1=React.createElement("h1",{},"namste ALL");
let h2=React.createElement("h2",{},"namste EveryOne");
let d=React.createElement("div",{},[h1,h2]);
let r=ReactDOM.createRoot(document.getElementById('root'));
r.render(d);
