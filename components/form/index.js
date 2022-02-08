import { react, useState } from 'react'; 
import propTypes from 'prop-types'

const Form = ({blurb, title}) => {


const [fName, setFname] = useState('')
const [lName, setLname] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [submit, setSubmit] = useState(false)


const handleSubmit = (e) => { 
    e.preventDefault() 
    console.log('Sending')
    let data = {
      name,
      email,
      message
    }
    fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setName('')
          setEmail('')
          setBody('')
        }
      })
  }


return (
<div class="grid p-6 grid-cols-2 bg-hero-img bg-fixed bg-cover" style={{height: 775}} name="contact"> 
<div class="mx-24 px-12 bg-gray-900 my-12 shadow-lg"> 
<h1 class="text-4xl font-bold text-gray-200 pt-12 font-actor text-left mb-8"> {title} </h1>
<p class="text-gray-200 mb-8"> {blurb}</p>
<div>
<form class="w-full max-w-lg mb-12">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="fName" type="text" onChange={(e)=>{setFname(e.target.value)}}  placeholder="Jane" required /> 
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="lName" onChange={(e)=>{setLname(e.target.value)}} type="text" placeholder="Doe" requried />
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
        Email
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" name="email" onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="jane@example.com" pattern=".+@globex\.com" required />
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-message">
        Message
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" name="message" onChange={(e)=>{setMessage(e.target.value)}} type="text" placeholder="I need help with..." />
    </div>
  </div>
  <button class="bg-blue-500 px-3 py-2 w-full text-gray-200 font-actor rounded shadow-lg font-semibold" name="submit" onClick={(e)=>{handleSubmit(e)}}> Submit </button>
</form>
</div>
</div>
<div>

</div>
<div>

</div>
    
</div>
);

}

Form.propTypes = {
    title: String, 
    blurb: String, 
}

Form.defaultProps = {
    title: 'Lets get in touch!',  
    blurb: 'Do you need help with your current project?  Are you starting up a new venture?  We are ready to help with decades of technical experience to guide the way.  Contact us today.'
}

export default Form; 