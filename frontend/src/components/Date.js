import React from 'react';
import '../css/date.css';

export default function date(props) {


  const date = new Date();
  let today = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;

  return (
    <>
        <div className="dt">
         {today}
        </div>
    </>
  )
}
