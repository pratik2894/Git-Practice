import style from './Dice.module.css';
const Dice = ({error,currentImage,ShoweHideButton , rules , RandomImageGenerator , ResetScore}) =>{

    return(
        <>
        <div className={style.dicecontainerdiv}>
         <div className={style.imagedivcontainer}> <img onClick={RandomImageGenerator} src={`../Images/${currentImage}.png`}/> </div>
         <div className={style.messagedivcontainer}> <p>Click on Dice to roll</p> </div>
         <div className={style.restbtn}> <button onClick={ResetScore} >Reset Score</button> </div>

         {rules?<div class={style.rulesbtn}> <button onClick={ShoweHideButton}>Hide Rules</button> </div>:<div class={style.rulesbtn}> <button onClick={ShoweHideButton}>Show Rules</button> </div>}
         {rules?<div class={style.rules}>
           <ol>
             <li>select number</li>
             <li>Click on dice image</li>
             <li>if dice number and your number is correct you will get same points</li>
             <li>if you guess the wrong numbe then 2 points will get deduct</li>
           </ol>
         </div>:null}
          <p>{error}</p>
      </div>
        </>
    )
}

export default Dice;