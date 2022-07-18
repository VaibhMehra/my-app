import React from 'react'

function Alert(props) {
    const firCap = (word) =>{
        let firstLetter = word.charAt().toUpperCase();
        let newWord = firstLetter + word.slice(1);
        return newWord; 
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{firCap(props.alert.type)}:</strong> {props.alert.mess}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    )
}

export default Alert
