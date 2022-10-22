import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./jsFiles/Header";

function Page(){
    return(
        <div>
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />)