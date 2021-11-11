import { react } from 'react'; 
import propTypes from 'prop-types'

const Title = ({text, title}) => {


return (

<div class="mx-24 p-6 grid grid-cols-2">
    <div> 
        <img src="https://res.cloudinary.com/ddd2lfnyh/image/upload/v1636054749/undraw_All_the_data_re_hh4w_pnvppt.png" />
    </div>
    <div class="p-6">
        <h1 class="text-4xl font-bold text-gray-900 pt-12 font-actor pb-2"> {title} </h1>
        <hr class="w-1/6 text-gray-900"/>
        <p class="text-gray-900 font-light py-4 font-actor"> {text} </p>
    </div>
</div>

);

}

Title.propTypes = {
    title: String, 
    text: String, 
}

Title.defaultProps = {
    title: 'About Us',  
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
}

export default Title; 