import React from 'react';
import './Contact.css'

const status = false;

function Contact() {
    return (
        <div className="Contact">
            <img class="avatar" src='https://randomuser.me/api/portraits/women/23.jpg' alt="Avatar" />
            <div>
                <div class="status">
                    <h4 class="name">Peggy Mcdonalid</h4>
                    {status ?
                        <div class="status-online"></div>
                    : 
                        <div class="status-offline"></div>

                    }
                    <p class="status-text">{status ? 'online' : 'offline'}</p>
                </div>
            </div>
        </div>
    );
}
export default Contact;