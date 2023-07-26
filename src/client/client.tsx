import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.hydrateRoot(
document.getElementById('root') as any, 
<BrowserRouter>
    <Routing/>
</BrowserRouter>
);
