import { useState } from "react";

export const useCalculator = () =>{
    //



    //Hooks
    const[number, setNumber] = useState('0');

    const buildNumber = (numberString: string ) => {


        setNumber(number + numberString);
    }




    //Return
    return{
        number,
        buildNumber,

    };
};