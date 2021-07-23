import ReactDom from 'react-dom'
import React from 'react'

const tag = <strong> Hello React!</strong>

ReactDom.render(
  <div>
    {tag}
  </div>,
  document.getElementById('root')
)
