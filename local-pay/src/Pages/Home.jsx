import { HStack, Image } from "@chakra-ui/react"
import  { useState, useEffect } from 'react';
import {CSSReset, Box,Button } from '@chakra-ui/react';

const images = [
    "https://www.phonepe.com/webstatic/4735/static/6eba1bff4e20e9bc2aa276c2fe94659f/c608a/hp-banner-aa.png",
    "https://www.phonepe.com/webstatic/4735/static/6341d1762ac4ed98d04996c9b03b5eb5/eeb1b/hp-banner4wt.png",
    "https://www.phonepe.com/webstatic/4735/static/6a8e4748cf99b4e497a2d04e8b8389cc/5707d/hp-banner1.png"
]
const Home = () => {
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
          setCurrentImg((prevIndex) =>
            (prevIndex + 1) % images.length
          );
        }, 5000);
    
        return () => clearTimeout(timer);
      }, [currentImg]);

      
    const imageUrl = images[currentImg];

    return <>
      <CSSReset />
      <Box
        padding="20px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
        borderRadius="20px"
          src={imageUrl}
          alt={`Image ${currentImg + 1}`}
        />
      </Box>
      <HStack justifyContent="center">
      {images.map((_,i)=>{
        return <Button onClick={()=>  setCurrentImg(0+i)} borderRadius="50%" key={i} marginTop="0px" marginLeft="10px">{i+1}</Button>
      })}
      </HStack>
    </>
}
export { Home }