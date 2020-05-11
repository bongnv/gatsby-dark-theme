import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import DarkModeSwitcher from "./dark-mode-switcher";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        background: `rebeccapurple`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `var(--color-foreground)`,
            background: `rebeccapurple`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <DarkModeSwitcher />
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
