import React from 'react'

function Header(props) {
  let style = {fontFamily: '"Avenir Next", Helvetica', fontSize: '98px'}
  return <p {...props} style={style} />
}

export default Header;
