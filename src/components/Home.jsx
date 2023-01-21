import React from 'react'
import SymptomItem from './SymptomItem';
import { useContext } from 'react';
import QuickContext from '..';

const Home = () => {
  const symptoms = useContext(QuickContext);
  return (
    <>
    <h2 className='font-bold text-2xl p-3'>症候一覧</h2>
    {/* p-3は下のエリアに合わせている */}
    <div className='flex flex-wrap my-6 '>
        {symptoms.map((item) => (
          <SymptomItem key={item.id} obj={item}>
          </SymptomItem>
        ))}
    </div>
    </>

  )
}

export default Home
