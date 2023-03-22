import React from 'react';
import '../css/budget.css';

export default function Budget() {
  return (
    <>
      <div className="assistant">
        <div className="aibtn" style={{height:"85vh",width:"100vw"}}>
        {/* <a href="http://127.0.0.1:7860/">Financial Advisor</a> */}
        <iframe src="http://127.0.0.1:7860/" width="100%" height="100%"></iframe>
        </div>
      </div>
    </>
  )
}
