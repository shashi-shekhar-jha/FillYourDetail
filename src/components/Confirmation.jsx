import React from "react";
import classes from './Confirmation.module.css';
export default function Confirmation({isSubmitted,isChecked}){
    return (
        <div className={classes.cont}>
          {isSubmitted?<p>{isChecked?<p>You have Checked your Details.</p>:<p>Detail has been filled.Go ahead check your Detail.</p>}</p>:<p>You haven't Filled your detail.</p>}
        </div>
    );
}