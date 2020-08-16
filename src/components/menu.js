import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const MenuLayout = styled.ol`
  display: block;
  list-style-type: decimal;
  font-size: 2.25em;

  @media (min-width: 1024px) {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 20px;
    padding-left: 15px;
    transition: .5s;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, auto);
  }
`

const Menu = (props) => {
  return <MenuLayout>{props.children}</MenuLayout>
}

Menu.propTypes = {children: PropTypes.any}

export default Menu
