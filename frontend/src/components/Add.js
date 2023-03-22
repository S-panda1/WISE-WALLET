import React,{useContext,useState} from 'react';
import '../css/add.css';
import noteContext from '../context/notes/NoteContext';

export default function Add(props) {

  const context = useContext(noteContext);
  const {addNote} = context;

  const [note, setNote] = useState({money: "",description: "",trxntype:""})

  const handleClick = (e) =>{
    e.preventDefault();
    addNote(note.money, note.description, note.trxntype);
    setNote({money: "",description: "",trxntype:""});
  }
  const onChange = (e) =>{
    setNote({...note, [e.target.name]:e.target.value})
  }

  // const exs = document.querySelector(".incat");
  // const ins = document.querySelector(".excat");

  const smode = () => {
    if (props.mode === "#ffffff") { return "#121212"; }
    else { return "#ffff"; }
  }

  // const inclick = () =>{
    
  //   ins.classList.add('disp');
  //   exs.classList.remove('disp');
  // }
  // const exclick = () =>{
    
  //   exs.classList.add("disp");
  //   ins.classList.remove("disp");
  // }

  const inputstyle = {
    backgroundColor: props.mode,
    color: smode(),
    borderBottom: `2px solid ${smode()}`
  }

  return (
    <>
      <div className="trxntitle" style={{ color: smode() }}>
        <p>Add Transaction</p>
      </div>
      <form className="addtrxnform" style={{ color: smode() }}>
        <div className="ttype">
          <label htmlFor="income" className='addin'  >
            <input type="radio" name="trxntype" id="income" value="income" onChange={onChange} /> <span>Income</span>
          </label>

          <label htmlFor="expense" className='addex' >
            <input type="radio" name="trxntype" id="expense" value="expense" onChange={onChange} /> <span>Expense</span>
          </label>
        </div>

        <label htmlFor="amount">Enter the amount : </label>
        <input type="number" className='trxndt' name="money" id="amount" step={.01} style={inputstyle} value={note.money} onChange={onChange} />

        {/* <div className="incat">
        <label htmlFor="inop">Category : </label>
        <select id="inop">
          <option value="other">Other</option>
          <option value="sakary">Salary</option>
          <option value="scholarship">Scholarship</option>
          <option value="pkmoney">Pocket Money</option>
        </select>
        </div>

        <div className="excat">
        <label htmlFor="exop">Category : </label>
        <select id="exop">
          <option value="other">Other</option>
          <option value="groceries">Groceries</option>
          <option value="food">Food</option>
          <option value="fees">Fees</option>
          <option value="bills">Bills</option>
          <option value="stationary">Stationary</option>
          <option value="medicines">Medicines</option>
          <option value="travel">Travel</option>
        </select>
        </div> */}
        <label htmlFor="description">Description :</label>
        <input type="text" name="description" id="description" value={note.description} onChange={onChange} />
        
        <button disabled={note.money.length<1} type="submit" className="btn btn-success" onClick={handleClick}>Add Transaction</button>

      </form>
    </>
  )
}
