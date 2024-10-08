// src/containers/Detail/style.js
import styled, {keyframes} from 'styled-components';

const scale = keyframes `

   from {
        transform: scale(0)
   
   }
   to {
       transform: sacale(1)
   
   }
`






export const Container = styled.div`
  
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;
`;
export const Background = styled.div`
   background-image: url(${(props)=>props.image});
   height: 50vh;
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;


&::before {
content:'';
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.5);

}

&::after {
content:'';
position:absolute;
bottom: 0;
left:0;
width: 100%;
height: 150px;
background-image: linear-gradiente(to top, #000, rgba (0, 0, 0, 0));

}
`
export const Cover = styled.div`
padding: 20px;
display: flex;
align-items: flex-start;
height: 100%;
z-index: 99;

img {
 width: 450px;
  border-radius: 30px;
  box-shadow: rgb(100 100 111 / 20%) opx 7px 29px 0px;
  animation: ${scale} 0.5s linear;
}
`


export const Info = styled.div`
  padding: 20px;
  width: 50px;
  z-index: 99;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h2 {

    font-size: 50px;
    font-weight: 700;
    color:#ffffff;
  }

p {
  font-weight: 700;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 30px;
}

`