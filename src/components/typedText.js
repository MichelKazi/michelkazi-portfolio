import React from "react"
import PropTypes from "prop-types"
import Typed from "react-typist"

const BlockCursor = {
  show: true,
  blink: true,
  element: "＿",
  hideWhenDone: false,
  hideWhenDoneDelay: 1750
}

const TypedText = (props) => {
  return <div>
    <Typed 
      avgTypingDelay={35}
      stdTypingDelay={10}
      cursor={ BlockCursor }    
      onTypingDone={ props.onTypingDone }
    >
      {props.children}
    </Typed>
  </div>
}

TypedText.propTypes = {
  children: PropTypes.any,
  onTypingDone: PropTypes.func
}

export default TypedText
