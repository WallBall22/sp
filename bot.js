const Discord = require("discord.js");
const client = new Discord.Client();
client.on ('message', msg => {
  if (msg.content ===  'سب') { 
    msg.reply('لو سمحت لا تسب').them(msgS => {
msgS.delete(1600);
msg.delete();
    
    })
  }
});



client.login(process.env.BOT_TOKEN);
