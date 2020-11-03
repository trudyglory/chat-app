import React from "react";
import "./Contact.css";
import PropTypes from 'prop-types';


function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" 
            src={props.avatar} 
            alt={props.name}/>
        <div>
            <p className="name">{props.name}</p>
            <div className="status">
            <div className={props.online ? 'status-online' : 'status-offline'}/>
            <p className="status-text">{props.text ? 'online' : 'offline'}</p>
            </div>
        </div>
        </div>
    );
}

Contact.propTypes = {
    avatar: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    text: PropTypes.bool.isRequired,
};

export default Contact;
