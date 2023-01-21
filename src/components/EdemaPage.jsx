import React from 'react'
import PageTab from './PageTab'
import { useContext } from 'react'
import QuickContext from '..'

const EdemaPage = () => {
  const edema = useContext(QuickContext)[19];

  const body = (
    <>
      <h2>{edema.title}</h2>
    </>
  )
  return (
    <div>
      <div style={{display: "flex", justifyContent: "start" , padding: "1rem"}} className="text-7xl mb-5">
        {edema.path}
        <h2 className='mx-6 font-bold text-2xl p-4'>
        {edema.title}
        </h2>
      </div>

      <PageTab body={body} />
    </div>

  )
}

export default EdemaPage
