import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Link to="/">
      <h1 className="text-5xl text-center my-10 font-bold">
        Quick
      </h1>
      </Link>
    </>
  )
}

export default Header
