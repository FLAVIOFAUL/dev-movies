import styled from 'styled-components'

export const Container = styled.div`
 z-index: 99;
 position: fixed;
 top: 0;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 10px 50px;

 img {
    width: 25%;
 }


`

export const Menu = styled.ul`
display: flex;
list-style: none;
gap: 50px;


`

export const Li = styled.li`
 color: #ffffff;
 font-weight: 600;
 cursor: pointer;
 font-size: 28px;


 a {
    text-decoration: none;
    color:#ffffff;
 }

  &::after {
   content:'';
   height: 3px;
   width: ${(props) => (props.isActive ? '100%' = 0) };
   background-color: #189b20;
   position: absolute;
   bottom: -10px;
   left: 0;
  }

`