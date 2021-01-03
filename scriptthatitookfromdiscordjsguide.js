const node = package.json
const { table } = require('console');
const Discord = require('discord.js');
const client = new Discord.Client();
var tabel = [
    
]
var isshot = false

client.once('ready', () => {
	console.log('Ready!');
});

client.login('Nzk0NzU5NTU5NzA4NTQwOTU4.X-_fhA.P09_n0hPP4T_MkX7qCjq4bOe4a4');

client.on('message', message => {
	if (message.content.startsWith('!shoot')) {
        const shootee = message.content.split(" ");
        shootee.shift();
        if (shootee.length === 0) { return message.channel.send(`You have given no arguments and have shot yourself. How embarassing!`); }
        console.log(shootee);
        message.channel.send(`${message.author} has shot ${shootee.join(" ")}`)
        for (things of tabel) {
            if(things.name === shootee.join(" ")) {
                things.shot = things.shot+1
                isshot = true
            }
        }
        if (isshot === false){
        tabel.push({name:shootee.join(" "), shot:1});
        }
        isshot = false
    } else if (message.content.startsWith('!gunmanual')) {
        const shootee = message.content.split(" ");
        message.channel.send("you say '!shoot' and then say something after the command you shoot it and say '!mostshotthings' to see what has been most shot");
    } else if (message.content.startsWith('!mostshotthings')) {
            var mesage = ""
            for (things of tabel) {
            mesage = `${mesage}\n${things.name}: ${things.shot}`
            }
            console.log(mesage);
            message.channel.send(mesage)
        }
});
