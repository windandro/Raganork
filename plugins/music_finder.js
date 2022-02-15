var e = require('../events')
var {MessageType,Mimetype} = require('@adiwajshing/baileys')
const c = require('../config')
var f = require('raganork-bot')
var v = c.SESSION
var fm = c.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('finder');

e.addCommand({pattern: 'find ?(.*)', fromMe: fm, desc: Lang.FINDER_DESC}, (async (m, match) => {    
if (!m.reply_message.text && !m.reply_message.video && !m.reply_message.sticker && !m.reply_message.image) {
var q = await m.client.downloadAndSaveMediaMessage({key: { remoteJid: m.reply_message.jid,id: m.reply_message.id}, message: m.reply_message.data.quotedMessage});
var k = c.find_key
var r = await f.query.music(q,k,v)
if (r.result) {
let msg =  Lang.TITLE + r.result.title + '\n' + Lang.ALBUM + r.result.album + '\n' + Lang.ARTIST + r.result.artist '\n' + + Lang.LABEL + r.result.label + '\n' + Lang.RDATE + r.result.release_date + '\n' + Lang.SLINK + 'https://www.youtube.com/results?search_query='+r.result.title.split(' ').join('+')
return await m.client.sendMessage(m.jid, msg, MessageType.text, {quoted: m.data})}
if (r.error && r.error.error_code == '900') return await m.client.sendMessage(m.jid, Lang.APIERR, MessageType.text,{quoted: m.data})
if (!r.result) return await m.client.sendMessage(m.jid, Lang.NO_RESULT, MessageType.text,{quoted: m.data})}
else {return await m.client.sendMessage(m.jid, Lang.NEED_REPLY, MessageType.text,{quoted: m.data})}}));
