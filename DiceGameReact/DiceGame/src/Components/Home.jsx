import style from './Home.module.css'

const Home = ()=>{

    return(
    <>
    <div className={style.parentdiv}>
      <div className={style.imgdiv}> <img src="../Images/Dice.png"/> </div>
      <div className={style.Headingdiv}>
         <div className={style.innerheadingdiv}> <h1>Dice Game</h1> </div>
         <div className={style.innerdivbutton}> <a href="/game">Play now</a> </div>
      </div>
    </div>
        </>
    )
}

export default Home;