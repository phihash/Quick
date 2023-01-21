import React from 'react'
import PageTab from './PageTab';

const TemplatePage = (props) => {
  const {title,path} = props.data;

  const body = (
    <>
      <h2>{title}</h2>
    </>
  )
  return (
    <div>
      <div style={{display: "flex", justifyContent: "start",alignItems:"center" , padding: "1rem"}} className="mb-7">
        <div className='text-6xl mr-4'>
         {path}
        </div>
        <h2 className='font-bold text-3xl p-4'>
        {title}
        </h2>
      </div>
      <PageTab body={body} />

    </div>
  )
}

export default TemplatePage
