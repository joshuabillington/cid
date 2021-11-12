import { react } from 'react'; 
import propTypes from 'prop-types'

const Portfolio = ({text, title}) => {


return (

<div class="px-24 p-6 bg-gray-100">
    <div class="p-6">
        <h1 class="text-4xl font-bold text-gray-900 pt-12 font-actor text-center"> {title} </h1>
    </div>
    <div class="mx-auto grid md:grid-cols-3 gap-4 content-center py-12 pb-24"> 
        <div>
        <img class="m-8 shadow-lg rounded-sm" src="https://res.cloudinary.com/ddd2lfnyh/image/upload/c_scale,w_800/v1636672627/Screen_Shot_2021-11-11_at_6.15.41_PM_ubfhmr.png" />
        </div>
        <div>
        <img class="m-8 shadow-lg rounded-sm" src="https://res.cloudinary.com/ddd2lfnyh/image/upload/c_scale,w_800/v1636672627/Screen_Shot_2021-11-11_at_6.15.41_PM_ubfhmr.png" />
        </div>
        <div>
        <img class="m-8 shadow-lg rounded-sm" src="https://res.cloudinary.com/ddd2lfnyh/image/upload/c_scale,w_800/v1636672627/Screen_Shot_2021-11-11_at_6.15.41_PM_ubfhmr.png" />
        </div>
    </div>
</div>

);

}

Portfolio.propTypes = {
    title: String, 
    text: String, 
}

Portfolio.defaultProps = {
    title: 'Our Work',  
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
}

export default Portfolio; 