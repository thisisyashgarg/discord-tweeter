import 'discord.js';
import Discord from 'discord.js';
const client = new Discord.Client();
import tweeterFunction from './twitterAPI.js'
import tweetCall from './index2.js'

//Global variable fror exporting
let msg ;

const input = () =>{
    client.on ('message', (message) => {

        //assigning msg to message
        msg = message;

        //Checking the twitter tweet length criteria 
        if (message.content.startsWith(tweetCall) && message.content.split(tweetCall)[1].length <= 280){
            tweeterFunction(); // Calling the function to tweet the message
        }
        if(message.content.startsWith(tweetCall) && message.content.split(tweetCall)[1].length > 280){
          message.reply('Sorry, but twitter allows only 280 characters');
        }

      });
}

//Discord bot token
client.login(process.env.TOKEN);

export {input, msg};
