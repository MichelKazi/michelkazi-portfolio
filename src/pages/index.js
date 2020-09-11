import React from "react"
import { Link } from "gatsby"
import Typist from "react-typist"
import Menu from "../components/menu"
import Terminal from "../components/terminal"
import TypedText from "../components/typedText"
import styled from "styled-components"
import Resume from "../assets/Resume_Michel_Kazi_v2.pdf"

const Name = styled.h1`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    font-size: 4em;
    text-align: center;
  }
`

const TerminalText = styled.span`
  font-size: 1.75em;
  display: inline-block;

  ${props => props.newLine ? '&:before { content: "〉"  }' : ''}
`

const ColoredText = styled.span`
  font-size: 1.75em;
  display: inline-block;
  font-weight: bold;
  color: ${props => props.color};
`

const MenuText = styled.a`
  display: block;
  color: #ebdab4;
  text-decoration: none;
  transition: .2s;
  &:hover {
    background-color: #ebdab4;
    color: #282828;
  }
`

const TextList = styled.ul`
  display: block;
  margin-top: 0;
  padding-left: 10px;
`

const Home = () => {
  const [showMenu, setShowMenu] = React.useState(false)

  return <div>
    <Name>MICHEL KλZI</Name>
    <Terminal titleBarText="$ MichelKazi@localhost ~/">
      <TextList>
        <TypedText onTypingDone={() => setTimeout(setShowMenu(true), 8000)}>
          <TerminalText newLine>My name is&nbsp;</TerminalText>
          <ColoredText color="#8fbf79">Michel Kazi</ColoredText>
          <Typist.Delay ms={750}/>
          <br/>
          <TerminalText newLine>I am a&nbsp;</TerminalText>
          <ColoredText color="#f84a3b">Software Engineer&nbsp;</ColoredText>
          <TerminalText>in&nbsp;</TerminalText>
          <ColoredText color="#fc802d">New York City</ColoredText>
          <Typist.Delay ms={550}/>
          <br/>
          <TerminalText newLine>I specialize in building&nbsp;</TerminalText>
          <ColoredText color="#2aa198">server-side microservice applications&nbsp;</ColoredText>
          <TerminalText> within&nbsp;</TerminalText>
          <ColoredText color="#84a596">distributed systems&nbsp;</ColoredText>
          <TerminalText> and&nbsp;</TerminalText>
          <ColoredText color="#d33682">data pipelines</ColoredText>
          <Typist.Delay ms={350}/>
          <br/>
          <TerminalText newLine>My favorite languages are&nbsp;</TerminalText>
          <ColoredText color="#84a596">Go,&nbsp;</ColoredText>
          <ColoredText color="#f9bc41">Python,&nbsp;</ColoredText>
          <TerminalText>and&nbsp;</TerminalText>
          <ColoredText color="#fc802d">Rust</ColoredText>
          <Typist.Delay ms={750}/>
          <br/>
          <TerminalText newLine>Click around and get to know me a bit :)</TerminalText>
        </TypedText>
      </TextList>

      {showMenu &&
      <Menu>
        <li>
          <MenuText href={Resume} target="_blank">Resume</MenuText>
        </li>
        <li>
          <MenuText href="mailto:michel.m.kazi@gmail.com" target="_blank">Contact</MenuText>
        </li>
        <li>
          <MenuText href="https://github.com/michelkazi" >Projects</MenuText>
        </li>
        <li>
          <MenuText href="https://github.com/michelkazi" target="_blank">GitHub</MenuText>
        </li>
        <li>
          <MenuText href="https://linkedin.com/in/mynameismichelkazi" target="_blank">LinkedIn</MenuText>
        </li>
        <li>
          <MenuText href="https://github.com/michelkazi/dotfiles"  target="_blank">Dotfiles</MenuText>
        </li>
      </Menu>
      }

    </Terminal>

  </div>
}

export default Home
