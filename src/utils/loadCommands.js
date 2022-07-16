const fs = require('fs');

function loadCommands(bot) {
	fs.readdir('./src/commands/', (err, cmdfolders) => {

		if (err) console.log(err);

		if(!cmdfolders[0]) return console.log('Bot couldn\'t find any commands in the commands folder!');
		cmdfolders.forEach((cmdfolder) => {
			fs.readdir(`./src/commands/${cmdfolder}`, (err, cmds) => {
				if (!cmds) return console.error(`Bot couldn't find any commands in the ${cmdfolder} folder!`);
				cmds = cmds.filter(z => z.split('.')[1] === 'js');
				cmds.forEach((cmd) => {
					const pull = require(`../commands/${cmdfolder}/${cmd}`);
					bot.commands.set(pull.config.name, pull);
					pull.config.aliases.forEach((alias) => {
					bot.aliases.set(alias, pull.config.name);
					});
				});
			});
		});
	});
}

module.exports = loadCommands;
