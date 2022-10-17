const Discord = require('discord.js');
const client = new Discord.Client();
const twit = require("twit");
require('dotenv').config()

const credentials = new twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  });

const tweetCall = 'Tweet my message:'

client.on('message', (message) => {

    const tweeterFunction = () => {
        const tweetToBeSent = message.content.substring(18);
        credentials.post("statuses/update", { status: tweetToBeSent });
      };
    
    if (message.content.startsWith(tweetCall) && message.content.substring(18).length <= 280){
        message.reply('Woohoo, your tweet has been sent :)');
        tweeterFunction();
    }
    
    if(message.content.substring(18).length > 280){
      message.reply('Sorry, but twiiter allows only 280 characters');
    }
  });

client.login(process.env.TOKEN);

