const New = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('admin');

New.addCommand({pattern: 'del', fromMe: true, desc: Lang.DEL_DESC}, (async (multidevice, match) => {
await multidevice.client.deleteMessage(multidevice.jid, {id: multidevice.reply_message.id, remoteJid: multidevice.reply_message.jid, fromMe: true})
}));
