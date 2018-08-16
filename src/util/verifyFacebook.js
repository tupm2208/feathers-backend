const axios = require('axios');
const errors = require('feathers-errors');
const crypto = require('crypto');

module.exports = (fbToken) => {

    return new Promise( (resolve, reject) => {

      const appSecretProof = crypto.createHmac('sha256', '1922b0226f3723e51658253c76cc036d').update(fbToken).digest('hex');

        axios.get(`https://graph.facebook.com/me?fields=id,name,email,address,location,picture&access_token=${fbToken}`).then( success => {

            resolve(success.data);
        }, error => {

            reject(error);
        })

        // ?client_id=2069998766651759
        // &client_secret=1922b0226f3723e51658253c76cc036d
        // socialAuth = socialAuth.data

        // console.log("socialAuth: ", socialAuth);
        // resolve(true);
    })
}
