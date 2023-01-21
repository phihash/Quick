import React from 'react'
import { Link } from 'react-router-dom';

const  SymptomItem = (props) => {

  const {title,link,path} = props.obj;
  return (

        <div class="text-center border border-gray-200 px-4 px-10 rounded-lg  m-2 w-3/12 md:w-4/12">
          <Link to={link}>
          <img src={path} alt="ロゴ" />
          <h2 class="text-xl text-gray-900 font-bold title-font mb-2">{title}</h2>
          </Link>
        </div>
  )
}

export default  SymptomItem
