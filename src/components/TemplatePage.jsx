import React from 'react'

const TemplatePage = (props) => {
  const {title,path,element} = props.data;

  // const body = (
  //   <>
  //     <h2>{title}</h2>
  //   </>
  // )
  return (
    <div>
      <div style={{display: "flex", justifyContent: "start",alignItems:"center" , padding: "1rem"}} className="w-11/12  lg:w-3/4  mb-7">
        <div className='text-3xl lg:text-5xl mr-4'>
         {path}
        </div>
        <h2 className='font-bold text-2xl  lg:text-3xl p-4'>
        {title}
        </h2>
      </div>
      {element}

    </div>
  )
}

export default TemplatePage
