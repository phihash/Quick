import React from 'react'
import { useContext } from 'react';
import QuickContext from '..';
import PageTab from './PageTab';

const FeverPage = () => {

  const edema = useContext(QuickContext)[0];

  const body = (
    <>
      <h2>{edema.title}</h2>
    </>
  )

  return (
    <div>
      <div style={{display: "flex", justifyContent: "start" , padding: "1rem"}} className="text-7xl mb-5">
        {edema.path}
        <h2 className='font-bold text-2xl p-4'>
        {edema.title}
        </h2>
      </div>

      <PageTab body={body} />
    </div>
  )
}

export default FeverPage
