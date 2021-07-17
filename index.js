const Discord = require('discord.js');
const bot =new Discord.Client();
const echo='865627547357413406';
const delta='865627761305452564';
const tango='865627857220141067';
const charlie='865627932860219432';
const alum='866009993689301034';
const channelID='807552730004324402';
bot.on('message',(message)=>{
    
    let memb=message.member;
    
    
    
    if(message.content=='!grad 2025')
    {
        memb.roles.add(echo);
    }else if(message.content=='!grad 2024'){
        memb.roles.add(delta);
    }else if(message.content=='!grad 2023')
    {
        memb.roles.add(tango);
    }else if(message.content=='!grad 2022')
    {
        memb.roles.add(charlie);
    }else if(message.content.startsWith=='!grad')
    {
        memb.roles.add(alum);
    }
    else if(message.content=='!start')
    {
       const channel=message.guild.channels.cache.get(channelID);
       channel.send('Enter your year of graduation for assignment of roles in the following format:\n!grad 20xx '); 
    }
});

bot.on('guildMemberAdd',(member)=>{
    const channel=member.guild.channels.cache.get(channelID);
    channel.send("Welcome to IMJ server! Enter your year of graduation in this format:\n!grad 2023");
});



bot.login('ODY1NjI0MDYwMTY2Nzk5Mzgx.YPGtOg.3VOr3POXnPabQDFvlK6YtnN9BHo');