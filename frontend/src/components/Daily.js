import React, {useContext, useEffect } from 'react';
import noteContext from '../context/notes/NoteContext';
import Date from './Date';
import Card from './Card';
import '../css/daily.css';

export default function Daily(props) {

  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    // eslint-disable-next-line
    getNotes();
    // eslint-disable-next-line
  }, [])

  // const inarr = notes.filter(notes => notes[0].trxntype==="income");
  // console.log(notes[0].money);
  // const inarr = notes.array.forEach(e => {e.filter((item)=>{return item.trxntype==="income"})
  // console.log(inarr);
  // });
  

  // const dailyin = getNotes();
  // console.log(dailyin);
  
  const smode = () =>{
    if (props.mode==="#ffffff") {return "#121212";}
    else{return "#ffff";}
}

  return (
    <>
      <div className="dailyBody" style={{backgroundColor:props.mode,  color:smode()}}>
        <div className="dailyTop"style={{backgroundColor:props.mode}}>
          <Date/>
          <br />
          {/* <div className="emspace" style={{backgroundColor:props.mode}}></div> */}
        </div>
        <div className="dailymid">
          <div className="total">
            <h3 style={{color:"red"}}>&#8377;188</h3>
          </div>
          <div className="ie">
            <p id='income'>Income : &#8377;1352</p>
            <p id='expense'>Expense : &#8377;1540</p>
          </div>
        </div>
        <div className="dailydown"style={{backgroundColor: props.mode==="#ffffff"?"aliceblue":props.mode}}>
        <div className="dailylist">
          {notes.length===0 && "No transactions"}
          {notes.map((note) => {
          return <Card mode={props.mode} key={note._id} note={note} />;
        })}
        </div>
        </div>
      </div>
    </>
  )
}
