import React from 'react'
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="bck-grnd-header">
        {/* <img src="./image/header2.jpg" alt="" />  */}
      </div>
      <div className="new-to-udemy">
        <strong className="title"> New to udemy?Lucky you. </strong>
        <div className="details">
          Courses start at E169.99 Get your new student offer before it expires.
        </div>
      </div>
    </header>
  )
}

export default Header