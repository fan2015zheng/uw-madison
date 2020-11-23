import React from 'react'
import './Portkey.css'

export default function Portkey() {
  return(<>
    <div className="_portkey" onClick={()=>{window.open("https://letter.uwmadison.org","_self")}}>
      Write a letter to a friend
    </div>
  </>)
}