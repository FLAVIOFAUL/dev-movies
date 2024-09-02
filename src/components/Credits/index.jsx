import React from "react";
import {Title,Container} from './styles';
import { getImages } from "../../utils/getImages"; 
   
function Credits({credits}) {

    return (
    <>
        <Title>Credits</Title>
        {credits && (
        <Container>
            {credits.slice(0.5).map((artist) => (
              <div key={artist.id}>
                <img src={getImages(artist.profile_path)} />
                <p>{artist.original_name}</p>
              </div>  
            ))}
        </Container>
    )}
    </>


    )


}


export default Credits