//import use karo, twitter aur dc ke alag files, callback function for logging error, why use es6, store constants in new file
const Discord = require('discord.js'); 
const client = new Discord.Client();
const twit = require("twit");
require('dotenv').config()

// Verifying your keys and tokens
const credentials = new twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  });

//Prefix for checking the input
const tweetCall = 'Tweet my message:'

//Taking input from user
client.on('message', (message) => {

    //Tweeter Function 
    const tweeterFunction = () => {
      
        //Removing the tweetCall from actual tweet
        const tweetToBeSent = example.split(tweetCall)[1]; 
        console.log(tweetToBeSent);
        
        //This tweets the message
        credentials.post("statuses/update", { status: tweetToBeSent });
      };
    

    //Checking the twitter tweet length criteria 
    if (message.content.startsWith(tweetCall) && message.content.split(tweetCall)[1].length <= 280){
        tweeterFunction(); // Calling the function to tweet the message
        message.reply('Woohoo, your tweet has been sent :)');  
    }
    if(message.content.startsWith(tweetCall) && message.content.split(tweetCall)[1].length > 280){
      message.reply('Sorry, but twitter allows only 280 characters');
    }
  });

//Discord bot token
client.login(process.env.TOKEN);

