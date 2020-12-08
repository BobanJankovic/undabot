const express = require('express');
const serverPort = require('./config');

const app = express();
const cors = require('cors');
const port = serverPort.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// console.log server running message
app.listen(port, () => console.log(`Node server available at ${port}`));

// POST route
app.post('/API/contact', (request, response) => {
    let responseMessage = '';
    let responseClassName = '';
    let email = request.body.email;
    let message = request.body.message;
    let emailCheck = false;
    let messageCheck = false;
    let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Email validation
    if (emailRegEx.test(email)) {
        emailCheck = true;
    } else {
        responseMessage = 'Must have a valid email address.';
        responseClassName = 'validation-error';
    }

    // Message validation
    if (message.length > 30) {
        messageCheck = true;
    } else {
        if (responseMessage) {
            responseMessage += ' and the message must be longer than 30 characters.';
        } else {
            responseMessage = 'The message must be longer than 30 characters.';
        }

        responseClassName = 'validation-error';
    }

    if (messageCheck && emailCheck === true) {
        responseMessage = 'Your message has been sent.';
        responseClassName = 'validation-success';
    }

    // Set Response Status Code
    if (responseClassName === 'validation-success') {
        response.status(200);
    } else {
        response.status(406);
    }

    // Response messages
    response.json({
        responseMessage: responseMessage,
        responseClassName: responseClassName
    });

});