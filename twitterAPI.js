import 'discord.js';
import dotenv from 'dotenv';
dotenv.config();
import tweetCall from './index2.js'
import twit from 'twit';
import {msg} from './discordAPI.js'
import { config } from 'dotenv';

//verifying credentials
const credentials = new twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  });

  
  //Tweeter Function 
 const tweeterFunction  = () => {
    let tweet = false;

    //Checking errors
    const onExecution = (err, success) => {
      if (err) {
        console.log("Error: ", err.msg);
        msg.reply('Error:  Status is a duplicate');
      } else{
        console.log(
        `Success
         Tweet: ${success.text}
         Username: ${success.user.name}
         Created at: ${success.created_at}`);
         tweet = true;
         msg.reply('Woohoo, your tweet has been sent :)');
      }
    }
    
    //Removing the tweetCall from actual tweet
      const tweetToBeSent = msg.content.split(tweetCall)[1]; 
      
    //This tweets the msg
       credentials.post("statuses/update", { status: tweetToBeSent }, onExecution);
      
    };


    export default tweeterFunction;
 