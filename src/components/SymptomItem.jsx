import React from 'react'
import { Link } from 'react-router-dom';


const  SymptomItem = (props) => {

  const {title,link,path} = props.obj;
  console.log(path)
  return (
        <div class="border border-gray-200 rounded-lg  m-3 w-5/12 hover:bg-slate-100 md:w-3/12 lg:w-2/12">
          <Link to={link}>
          <div style={{display: "flex", justifyContent: "center" , padding: "1rem"}} className="text-7xl">
          {path}
          </div>
          <h2 class="text-xl text-center text-gray-900 font-bold title-font mb-4">{title}</h2>
          </Link>
        </div>
  )
}

export default  SymptomItem
