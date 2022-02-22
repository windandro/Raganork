const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const config = require('../config');
const Language = require('../language')
const Lang = Language.getString('web')

let sourav = config.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'quote ?(.*)', fromMe: sourav, desc: Lang.QUOTE_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(Lang.NEED_QUOTE);
	const url = `https://api.quotable.io/random`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📌 ' + Lang.QUOTE +'* ```' + json.content + '```\n\n' +
		'*✒️' + Lang.AUTHOR +'* ```' + json.author+ '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text);
	}
});
