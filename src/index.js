import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

import FirstComp from './components/basics/First'

ReactDom.render(
  <div>
    <FirstComp></FirstComp>
    <br></br>
    <FirstComp></FirstComp>
  </div>,
  document.getElementById('root')
)
