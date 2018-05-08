const admin = require('firebase-admin');

module.exports = function(req, res) {
    // Verify the user provided a phone number
    if (!req.body.phone) {
        return res.status(422).send({ error: 'Bad Input' })
    }

    // Format the phone number to remove dashes and parens
    // .replace replaces any non digit to an empty space
    const phone = String(req.body.phone).replace(/[^\d]/g, ""); 
    if(phone.length !== 10){
        return res.status(422).send({ error: 'Invalid U.S. Phone Number' })
    } else {
        admin.auth().createUser({ uid: phone })
        .then(user => res.send(user))
        .catch(err => res.status(422).send({ error: err}));
    }

    // Create a new user account using that phone number
    // Sets the new user's uid to their phone number

    // Respond to the user request, saying the account was made

}