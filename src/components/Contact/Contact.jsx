import React from 'react';
import "./Contact.css";


const Contact = () => {
  return (
    <section className="contact">
        <div className="contact-container padding inner-w">
            <h1>Clients</h1>
            <div className="client-card">
                <div className="image">
                    <img src="./client1.png" alt="" />
                </div>
                <div className="image">
                    <img src="./client2.png" alt="" />
                </div>
                <div className="image">
                    <img src="./client3.png" alt="" />
                </div>
                <div className="image">
                    <img src="./client4.png" alt="" />
                </div>
                <div className="image">
                    <img src="./client3.png" alt="" />
                </div>
                <div className="image">
                    <img src="./client4.png" alt="" />
                </div>
                <div className="image">
                    <img src="./client1.png" alt="" />
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Contact
