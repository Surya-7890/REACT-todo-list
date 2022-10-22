import React from "react";

export default function AddItem(props){

    const [visiblity, setvisiblity] = React.useState(true)
    function changeVisibility(){
        setvisiblity(false)
    }

    return(
          <div>
              {visiblity && <div className="output">
                  <div className="circle--container" onClick={changeVisibility}></div>
                  <div className="goal--field" >{props.text}</div>
              </div>}
          </div>
    )
}