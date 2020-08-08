import React from "react"
import { Link } from "gatsby"
import Typist from "react-typist"
import Menu from "../components/menu"
import Terminal from "../components/terminal"
import TypedText from "../components/typedText"
import styled from "styled-components"
import Resume from "../assets/Resume_Michel_Kazi_v2.pdf"

const Name = styled.h1`
  font-size: 4em;
  text-align: center;
`

const TerminalText = styled.span`
  font-size: 1.75em;
  display: inline-block;
`
const MenuText = styled.a`
  font-size: 2.25em;
  display: block;
  color: #ebdab4;
  text-decoration: none;
  transition: .2s;
  &:hover {
    background-color: #ebdab4;
    color: #282828;
  }
`

const GreenText = styled(TerminalText)`
  color: #8fbf79;
  font-weight: bold;
`
const RedText = styled(TerminalText)`
  color: #f84a3b;
  font-weight: bold;
`
const OrangeText = styled(TerminalText)`
  color: #fc802d;
  font-weight: bold;
`

const YellowText = styled(TerminalText)`
  color: #f9bc41;
  font-weight: bold;
`

const BlueText = styled(TerminalText)`
  color: #84a596;
  font-weight: bold;
`

const Home = () => {
  const [showMenu, setShowMenu] = React.useState(false)

  return <div>
    <Name>MICHEL KλZI</Name>
    <Terminal titleBarText="$ MichelKazi@localhost ~/">
      <TypedText onTypingDone={() => setShowMenu(true)}>
        <TerminalText>&nbsp;〉My name is&nbsp;</TerminalText>
        <GreenText>Michel Kazi</GreenText>
        <Typist.Delay ms={750}/>
        <br/>
        <TerminalText>&nbsp;〉I am a&nbsp;</TerminalText>
        <RedText>Software Engineer&nbsp;</RedText>
        <TerminalText>from&nbsp;</TerminalText>
        <OrangeText>New York City</OrangeText>
        <Typist.Delay ms={550}/>
        <br/>
        <TerminalText>&nbsp;〉I specialize in building applications in the back end</TerminalText>
        <Typist.Delay ms={350}/>
        <br/>
        <TerminalText>&nbsp;〉...and working with&nbsp;</TerminalText>
        <BlueText>distributed systems</BlueText>
        <Typist.Delay ms={350}/>
        <br/>
        <TerminalText>&nbsp;〉My favorite languages are&nbsp;</TerminalText>
        <BlueText>Go,&nbsp;</BlueText>
        <YellowText>Python,&nbsp;</YellowText>
        <TerminalText>and&nbsp;</TerminalText>
        <OrangeText>Rust</OrangeText>
        <Typist.Delay ms={750}/>
        <br/>
        <TerminalText>&nbsp;〉Click around and get to know me a bit :)</TerminalText>
      </TypedText>

      {showMenu &&
      <Menu>
        <MenuText href={Resume} target="_blank"> 1. Resume </MenuText>
        <MenuText href="mailto:michel.m.kazi@gmail.com" target="_blank"> 2. Contact </MenuText>
        <MenuText href="#projects"> 3. Projects </MenuText>
        <MenuText href="https://github.com/michelkazi" target="_blank"> 4. Github </MenuText>
        <MenuText href="https://linkedin.com/in/mynameismichelkazi" target="_blank"> 5. LinkedIn </MenuText>
        <MenuText href="https://github.com/michelkazi/dotfiles"  target="_blank"> 6. Dotfiles </MenuText>
      </Menu>
      }

    </Terminal>

  </div>
}

export default Home
