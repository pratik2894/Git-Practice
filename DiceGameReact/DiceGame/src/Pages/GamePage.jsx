import { useState } from "react";
import Dice from "../Components/Dice";
import GameHeader from "../Components/GameHeader";

const GamePage = ()=>{
const[rules , setrules] = useState(false);
const[currentImage , setRandomImage]= useState("1");
const [error , seterror] = useState("");
const [inputValue , setInputValue] = useState("");
const[result , setResult] = useState(0);
// creating the random images arrays 
const inputnum = [1 , 2 , 3 , 4 , 5  , 6]
let Images = [ '1','2','3','4','5','6'];

const RandomImageGenerator = ()=>{
    const RandomIndex = Math.floor(Math.random()*Images.length);
    console.log(Images[RandomIndex]);
    setRandomImage(Images[RandomIndex]);
    if( inputValue===currentImage )
    {
        setResult( (prev)=>prev+ Number(inputValue))
        console.log(typeof(result))
    }else{
        setResult( (prev)=>prev-2 );
    }
}
const ShoweHideButton = ()=>{
    if(rules===false)
    {
        setrules(true)
    }else{
        setrules(false);
    }
}
const TakingInput=(e)=>{
    if(inputValue=="")
    {
        seterror("Please Select Number ")
    }
    setInputValue(e.target.value)
    seterror("");
}
const ResetScore=()=>{
    setResult(0);
}

    return(
        <>
            <GameHeader result={result} TakingInput={TakingInput} inputnum={inputnum}></GameHeader>
            <Dice error={error} ResetScore={ResetScore} currentImage={currentImage} RandomImageGenerator={RandomImageGenerator} ShoweHideButton={ShoweHideButton} rules={rules}/>
        </>
    )
}
export default GamePage;