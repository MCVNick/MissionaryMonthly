import React, { createRef } from 'react'

import './Contact.scss'
import Axios from 'axios';

const handleSubmit = (event, buttonRef) => {
    event.preventDefault();
    const from = event.target[0].value
    const name = event.target[1].value
    const message = event.target[2].value
    const obj = { from, name, message }
    let button = buttonRef.current.classList

    if (from && name && message) {
        Axios.post('/send-email', obj)
        event.target[0].value = ''
        event.target[1].value = ''
        event.target[2].value = ''
        button.add('pass')
        setTimeout(function () { button.remove('pass') }, 500)
    } else {
        button.add('fail')
        setTimeout(function () { button.remove('fail') }, 500)
    }
}

const Contact = () => {
    const buttonRef = createRef()

    return (
        <main id='contact-page'>
            <section>
                <h1 className='contact-header'>Contact</h1>

                <h1>Olea Chidester</h1>
                <h1>missionarymonthly@gmail.com</h1>
                <h1 className='contact-section-divide'>—</h1>
                <h1>(385) 282-3858</h1>
            </section>
            <form onSubmit={event => handleSubmit(event, buttonRef)}>
                <input placeholder='Email' />
                <input placeholder='Name' />
                <textarea placeholder='Message' />
                <button ref={buttonRef}>Send</button>
            </form>
        </main>
    )
}

export default Contact;