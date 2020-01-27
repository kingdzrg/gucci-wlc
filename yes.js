const Discord = require('discord.js');
const client = new Discord.Client();

// By KiNG , Dz

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`By KING_Dz `); 
   console.log(`----------------`);
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("670770562779578385"); // لهنا ايدي الروم 
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`> **Welcome To __GUCCI__ Server , Enjoy .**   ♥️ `), 4000)      //   لهنا تحط الطرحيب 
}
});


client.login(process.env.TOKEN); // لهنا توكن تاعك 
