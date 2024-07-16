import Logo from "../../assets/logo.png"
import { Link, useLocation } from "react-router-dom"    

import React from "react"
import { Container, Menu, Li } from "./styles"


function Header() {
     const { pathname} =useLocation()
     return (
         <Container>
              <h1>Header</h1>
              <img src={Logo} alt="logo-dev-movies" />
              <Menu>
               <Li isActive={pathname === '/'}>
                <Link to="/">Home</Link>
                </Li>

                <Li isActive={pathname.includes('filmes')}>
                <Link to="/">Filmes</Link>
                </Li>

                <Li isActive={pathname.includes('series')}>
                <Link to="/">Series</Link>
                </Li>

              </Menu>

         </Container>

     )

}
export default Header