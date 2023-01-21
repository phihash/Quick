import React from 'react'
import { BiSleepy} from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (

  <footer class="mt-28 p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div class="sm:flex sm:items-center sm:justify-between">
          <a href="https://twitter.com/phihash" class="flex items-center mb-4 sm:mb-0">
              <FaTwitter className='text-2xl text-white mx-2'></FaTwitter>
              <Link to="/"> <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Quick</span></Link>
          </a>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://phihash.net" class="hover:underline">phihash</a> Quick
      </span>
  </footer>

  )
}

export default Footer
