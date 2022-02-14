/* Copyright (C) 2021 Vai838.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('deepai');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'insult ?(.*)', fromMe: true, desc: Lang.INSULT_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(Lang.INSULT_DESC);
	const url = `https://evilinsult.com/generate_insult.php?lang=en&type=json`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '🤬 ' + json.insult, MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.INSULT_NOTFOUND, MessageType.text);
	}
});
}

else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'insult ?(.*)', fromMe: false, desc: Lang.INSULT_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(Lang.INSULT_DESC);
	const url = `https://evilinsult.com/generate_insult.php?lang=en&type=json`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '🤬 ' + json.insult, MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.INSULT_NOTFOUND, MessageType.text);
	}
});
}
