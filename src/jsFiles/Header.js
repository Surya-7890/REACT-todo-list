import React , {useState} from "react";
import AddItem from "./AddItem";
import style from "../styles/header.css"
import moon from "../images/bgdark.jpg"
import sun from "../images/bglight.jpg"
import sunIcon from "../images/icon-sun.svg"
import moonIcon from "../images/icon-moon.svg"

export default function Header(){

    const [state, setState] = useState([]);
    const [Icon, setIcon] = useState(sunIcon);
    const nextState = state.map((element, index) => {
        return <AddItem id={index} text={element} isVisible={true} />
    })

    function setInput(event){
        event.preventDefault();
        const inputSection = document.getElementById('input');
        const value = inputSection.value;
        if(inputSection.value !==''){
        setState(prevState => [...prevState, value]);
        inputSection.value='';
        }
    }
    
    function toggle(){
        const classes = document.querySelector('.header').classList;
        classes.toggle('dark');
        setIcon(prevIcon => prevIcon===sunIcon? moonIcon : sunIcon)
    }

    return(
        <>
          <div className="header dark">
            <div className="heading">
                <div>T O D O</div>
                <img src={Icon} id="image" onClick={toggle} />
            </div>
              <div className="form">
                  <div className="circle--container"></div>
                  <form onSubmit={setInput}>
                      <input type="text" placeholder="Type in a new goal!!" id="input" />
                  </form>
              </div>
          </div>
          <div className="output--container">
            <div className="inner--container">
                {nextState}
            </div>
          </div>
        </>
    )
}