const accountSid = 'YOUR_SID';
const authToken = 'YOUR_TOKEN';

const sendSms = (phone,message) => {
  const client = require('twilio')(accountSid, authToken);
  client.messages
    .create({
       body: message,
       from: '+17578015408',
       to: `+91${phone}`
     })
    .then(message => console.log(message.sid));
}

module.exports = sendSms;
