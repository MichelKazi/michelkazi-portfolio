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
  width: 95vw;
  border-radius: 12px 12px 0 0;
  font-size: 1em;
  text-align: center;
  margin: 0 auto;
  line-height: 25px;
  position: relative;

  @media (min-width: 768px) {
    width: 95vw;
  }

  @media (min-width: 1024px) {
    width: 45vw;
  }
`

const TerminalBody = styled.div`
  font-size: .65em;
  background-color: #191724;
  height: 90vh;
  width: 95vw;
  margin: 0 auto;
  border-radius: 0 0 12px 12px;
  
  @media (min-width: 768px) {
    width: 95vw;
    font-size: 1em
  }

  @media (min-width: 1024px) {
    width: 45vw;
    height: 50vh;
  }
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
