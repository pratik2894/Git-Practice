import style from './GameHeader.module.css'
const GameHeader = ({TakingInput,inputnum , selected , result}) =>{
    return(
        <>
        <div className={style.Gameheading}> 
           <div className={style.scorediv}> <h1> {result} </h1>
        <p style={{textAlign:"center"}}>Total Score</p> </div>
        
           <div className={style.inputdiv}>
            {inputnum.map( (item )=> <input onClick={()=>TakingInput(event)} key={item}  readOnly value={item} placeholder={item}/> )}
                
           </div>
        </div>
        </>
    )
}

export default GameHeader;