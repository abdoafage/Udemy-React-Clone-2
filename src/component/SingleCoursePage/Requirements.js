import React from 'react'
import { FiberManualRecord } from "@mui/icons-material";
import "./Requirements.css";
function Requirements(props) {
    const {requirements} = props;
  return (
    <div className='Requirements'>
        <h1 className='title'>Requirements</h1>
        <ul className='lst-requirements'>
            {
                requirements.map((e,index)=>(
                    <li className='lst-requirements-item' key={index}>
                        <div><FiberManualRecord style={{fontSize:"10px"}}/></div>
                        <div className='lst-requirements-item-info'>{e}</div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Requirements