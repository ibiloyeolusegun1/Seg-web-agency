import React from 'react';
import "./ContactForm.css";
import { BiPhone, BiMailSend, BiLocationPlus } from 'react-icons/bi';

const ContactForm = () => {
  return (
    <section className="contact-f">
        <div className="contact-f-container padding inner-w">
            <h1>Contact us</h1>
            <div className="content">
                <form action="" className='formBx'>
                   <div className="input-field">
                        <div className="form_control">
                                <label htmlFor="name">Name</label>
                                <input type="text" name='name' id='name' placeholder='Name here' className='box' required/>
                        </div>
                        <div className="form_control">
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" name='last-name' id='last-name' placeholder='Last Name here' className='box' required/>
                        </div>
                        <div className="form_control">
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' id='email' placeholder='Example@mail.seg' className='box' required/>
                        </div>
                        <div className="form_control">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" placeholder='Type your message' className='box' cols="30" rows="10"></textarea>
                        </div>
                   </div>
                   <input type="submit" value="Send message" className='btn' />
                </form>
                <div className="formBx">
                    <div className="phone">
                        <div className='iconBx'>
                            <BiPhone className='icon'/> <span>Mobile number</span>
                        </div>
                        <div className='iconTx'>
                            <span>+23490391764</span><a href="tel:+23490391764" className='call'>Call</a>
                        </div>
                        <div className='iconTx'>
                            <span>+23490391764</span><a href="tel:+23490391764" className='call'>Call</a>
                        </div>
                    </div>
                    <div className="email">
                        <div className='iconBx'>
                            <BiMailSend className='icon'/> <span>E-mail</span>
                        </div>
                        <div className='iconTx'>
                            <span>Ibiloyeolusegun.1@gmail.com</span>
                        </div>
                    </div>
                    <div className="address">
                        <div className='iconBx'>
                            <BiLocationPlus className='icon'/> <span>Address</span>
                        </div>
                        <div className='iconTx'>
                            <span>No. 47 Saint Clement Lokoja, Kogi State, Nigeria.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactForm
