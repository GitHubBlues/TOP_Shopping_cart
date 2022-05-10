import React from "react";
import planePng from "../Assets/Main_Image_cropped2.png";
import { MainContainer,
         TextContainer,
         Textbox,
         Title,
         ShopBtn,
         Image,
         ImageContainer
        } from "./lpMain.style.js"

const Main = () => {
   
   const text2 = "Get ready for takeoff and landing, descending and ascending,";
   const text3 = "cruising, taxing, looping, building, repairing and lots of fun";
    
   return (
       <MainContainer>
           <TextContainer>
               <Title>Everything for airplane fans!</Title>
               <Textbox>Toys, puzzles, costumes, books and much more</Textbox>
               <Textbox size={ "20px" } weight={ "500" } margin={"5px"}> {text2} </Textbox>
               <Textbox size={ "20px" } weight={ "500" } margin={"30px"} > {text3} </Textbox>
               <ShopBtn>Goto shop</ShopBtn>
           </TextContainer>
           <ImageContainer>
               <Image src={planePng} alt="children hanging from plane" width="100%" />
           </ImageContainer>
           
       </MainContainer>
   );
};

export default Main; 