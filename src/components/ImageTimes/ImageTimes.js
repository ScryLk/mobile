import React from "react";
import { Image } from 'react-native';


function ImageTimes(props) {
     const { time } = props;
     let logos = {
          Chapecoense: require('./chapecoense.png'),
          Trindade: require('./trindade.png')
     }
     return <Image source={logos[time]} />

}

export default ImageTimes;