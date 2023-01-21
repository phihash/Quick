import React from 'react'
import { Link } from 'react-router-dom';

const  SymptomItem = (props) => {
  const {title,link,path} = props.obj;
  return (
        <div  className="border border-gray-200 rounded-lg  m-3 w-5/12 hover:bg-slate-100 md:w-1/5 lg:w-2/12">
          <Link to={link}>
          <div style={{display: "flex", justifyContent: "center" , padding: "1rem"}} className="text-7xl">
          {path}
          </div>
          <h2 className="text-xl text-center text-gray-900 font-bold title-font mb-4">{title}</h2>
          </Link>
        </div>
  )
}

export default  SymptomItem
