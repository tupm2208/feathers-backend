const axios = require('axios');
const errors = require('feathers-errors');

module.exports = (fbToken) => {

    return new Promise( (resolve, reject) => {

        axios.get(`https://graph.facebook.com/oauth/access_token
        ?client_id=2069998766651759
        &client_secret=1922b0226f3723e51658253c76cc036d
        &redirect_uri=https://localhost:3030/
        &grant_type=${fbToken}`).then( success => {

            console.log("success: ", succees);
            resolve(succees);
        }, error => {
            reject(error);
        })

        // socialAuth = socialAuth.data

        // console.log("socialAuth: ", socialAuth);
        // resolve(true);
    })
}