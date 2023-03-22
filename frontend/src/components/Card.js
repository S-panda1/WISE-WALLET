import React, { useState,useContext } from 'react';
import noteContext from '../context/notes/NoteContext';
import '../css/card.css';

export default function Card(props) {

    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note } = props;

    const [readmore, setreadmore] = useState(false);

    const smode = () => {
        if (props.mode === "#ffffff") { return "#121212"; }
        else { return "#ffff"; }
    }

    const readclick = () => {
        setreadmore(e => !e);
    };

    return (
        <>
            <div className="card" style={{ backgroundColor: props.mode === "#ffffff" ? "aliceblue" : props.mode, color: smode() }}>
                <div className="left-card">
                    <img src={require("../images/trxn.png")} alt="trxn" />
                </div>
                <div className="right-card">
                    <div className="cardTop">
                        <div className="cardAmount" style={{ color: note.trxntype==="income" ? "#39e939" : "red" }}>{note.trxntype==="income" ? '+' : '-'} &#8377;{note.money}</div>
                        <div className="cardright">
                            <div className="x"><i className="fa-solid fa-x" onClick={()=>deleteNote(note._id)}></i></div>
                            <div className="time">{note.date.substr(0,24)}</div>
                        </div>
                    </div>
                    <div className="carddown">
                        <div className="reason">
                            {readmore ? note.description : note.description.substr(0, 20) + "..."}
                        </div>
                        <div className="arrow" onClick={readclick}>
                            <i className={`fa-solid fa-angle-${readmore ? "up" : "down"}`}></i>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='cardend' style={{ borderTop: `2px solid ${smode()}` }} />
        </>
    )
}
