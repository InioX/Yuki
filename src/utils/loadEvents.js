const fs = require('fs');

class EventHandler {
    constructor(bot) {
        this.bot = bot;
    }

    init() {
        const files = fs.readdirSync('./src/events').filter(x => x.endsWith('.js'));
        for (const file of files) {
            const event = require(`../events/${file}`);
            const name = file.split('.')[0];
            this.bot.on(name, event.bind(null, this.bot));
        }
    }
}

module.exports = EventHandler
