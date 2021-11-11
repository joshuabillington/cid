import { react } from 'react'; 

const Header = () => {


return (
<div> 
<nav class="flex items-center justify-between flex-wrap bg-white p-6 mx-24">
  <div class="flex items-center flex-shrink-0 text-black mr-6">
    <img src="https://res.cloudinary.com/ddd2lfnyh/image/upload/v1636601211/unnamed_cauihv.jpg" class="w-1/4"/>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:text-right lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-lg text-gray-900 font-bold font-actor hover:text-gray-800 mr-4">
        Projects
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-lg text-gray-900 font-bold font-actor hover:text-gray-800 mr-4">
        About
      </a>
    </div>
  </div>
</nav>
</div>
);

}

export default Header; 