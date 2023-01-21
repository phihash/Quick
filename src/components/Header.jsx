import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Link to="/">
      <h1 className="text-4xl text-center my-8 font-bold">
        Quick
      </h1>
      </Link>
    </>
  )
}

export default Header
