import React from 'react';
import {RiEmotionSadFill} from "react-icons/ri";

/**
 * 受信
 */
function Error404() {

  return (
    <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
      <span className='text-6xl font-bold my-8'>
        404
      </span>
        <RiEmotionSadFill className='text-9xl'></RiEmotionSadFill>
        <p className="text-2xl font-bold">そんなページはありません</p>
    </div>
  </section>
  );
}

export default Error404;
