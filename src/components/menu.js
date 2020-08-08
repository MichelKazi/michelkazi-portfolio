import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const MenuLayout = styled.div`
  margin-top: 50px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 20px;
  padding-left: 15px;
`

const Menu = (props) => {
  return <MenuLayout>{props.children}</MenuLayout>
}

Menu.propTypes = {children: PropTypes.any}

export default Menu
