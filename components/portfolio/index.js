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
            <h2 class="font-actor  text-gray-900 text-lg font-semibold text-center"> Lorem Ipsum </h2>
            <p class="text-center font-light text-gray-900 font-actor"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div>
            <h2 class="font-actor  text-gray-900 text-lg font-semibold text-center"> Lorem Ipsum </h2>
            <p class="text-center font-light text-gray-900 font-actor"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div>
            <h2 class="font-actor  text-gray-900 text-lg font-semibold text-center"> Lorem Ipsum </h2>
            <p class="text-center font-light text-gray-900 font-actor"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
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