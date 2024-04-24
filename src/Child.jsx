import React from "react";

function Child(props){
    const handleClick = () => {
        props.onUpdateData("hello from Child")

    }
    return(
        <>
        <h1> {props.manjula}</h1>
        <button onClick={handleClick}>Clicke me to Update</button>
        </>
    )
}
export default Child;