import { react } from 'react'; 
import propTypes from 'prop-types'

const Hero = ({text, title}) => {


return (
<div class="grid p-6 cols-2 bg-hero-img bg-fixed bg-cover" style={{height: 540}}> 
<div class="mx-24 px-12 w-1/2 bg-white bg-opacity-50 my-12"> 
<h1 class="text-4xl font-bold text-indigo pt-12 font-actor"> {title} </h1>
<p class="text-indigo font-light py-4 font-actor"> {text} </p>
<button class="bg-gray-900 p-2 px-12 text-gray-200 font-actor rounded-3xl"> Contact Us </button>
</div>
<div>

</div>
    
</div>
);

}

Hero.propTypes = {
    title: String, 
    text: String, 
}

Hero.defaultProps = {
    title: 'Your XMPIE Specialists',  
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}

export default Hero; 