import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const RedButton = styled.div`
  background-color: #d63a3a;
  height: 12.5px;
  width: 12.5px;
  border-radius: 50%;
  position: absolute;
  left: 12.5px;
  top: 7.5px;

  &:hover {
    background-color: #ff0000;
    cursor: pointer;
  }
`

const TerminalTitleBar = styled.div`
  background-color: #313136;
  height: 25px;
  width: 40vw;
  border-radius: 12px 12px 0 0;
  font-size: 1em;
  text-align: center;
  margin: 0 auto;
  line-height: 25px;
  position: relative;
`

const TerminalBody = styled.div`
  background-color: #191724;
  height: 50vh;
  width: 40vw;
  margin: 0 auto;
  border-radius: 0 0 12px 12px;
`

const Terminal = (props) => {
  return <div>
    <TerminalTitleBar><RedButton/>{props.titleBarText}</TerminalTitleBar>
    <TerminalBody>{props.children}</TerminalBody>
  </div>
}

Terminal.propTypes = {
  children: PropTypes.any,
  titleBarText: PropTypes.string
}

export default Terminal
