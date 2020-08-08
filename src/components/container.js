import React from "react"
import PropTypes from "prop-types"
import containerStyles from "./container.module.css"

const Container = ({ children }) => {
  return <div className={containerStyles.container}>{children}</div>
}

Container.propTypes = { children: PropTypes.any }

export default Container
