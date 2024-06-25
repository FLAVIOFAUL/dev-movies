import Logo from "../../assets/logo.png";
import React from "react";


function Header() {

     return (
         <div>
              <h1>Header</h1>
              <img src={Logo} alt="logo-dev-movies" style={{ width: 500 }}/>


         </div>

     )

}
export default Header