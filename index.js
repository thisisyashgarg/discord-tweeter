const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require("dotenv");
dotenv.config();
const Twit = require("twit");

const T = new Twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  });

const prefix = 'Tweet my message:'

client.on('message', (msg) => {

    const tweet = () => {
        const text = msg.content.substring(18);
        const onFinish = (err, reply) => {
          if (err) {
            console.log("Error: ", err.message);
          } else {
            console.log("Success: ", reply);
          }
        };
        T.post("statuses/update", { status: text }, onFinish);
      };
    
    if (msg.content.startsWith(prefix) && msg.content.length <= 298){
        msg.reply('Woohoo, your tweet has been sent');
        tweet();
    }
    
    if(msg.content.length > 298){
      msg.reply('Only 280 characters are allowed');
      
    }

  });

client.login(process.env.TOKEN);

