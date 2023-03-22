import React from 'react';
import '../css/profile.css';

export default function Profile(props) {

  const smode = () =>{
    if (props.mode==="#ffffff") {return "#121212";}
    else{return "#ffff";}
  }

  return (
    <>
      <div className="profileBody" style={{backgroundColor:props.mode, color:smode()}}>
        <div className="profilehead">
          <p>Your Profile</p>
        </div>
        <div className="profileTop">
          <div className="profilePic">
            <img src={require("../images/trxn.png")} alt="" />
          </div>
          <div className="profileTopDown">
            <p>Welcome!</p>
            <p>Sumit Kumar Pattanayak</p>
          </div>
        </div>
      </div>
      <hr className="ptopend" style={{borderTop: `2px solid ${smode()}`}} />

      {/*lower part of profile*/}
      <div className="togglemode" style={{backgroundColor:props.mode, color:smode()}}>
        <p>Change theme</p>
        <input type="checkbox" className="checkbox" onClick={props.toggleMode} id="checkbox"/>
          <label htmlFor="checkbox" className="label">
            <i className={`fas fa-${props.mode==="#ffffff"?"moon":"sun"}`}></i>
          </label>
      </div>
    </>
  )
}
