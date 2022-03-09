/* (c) Warn: souravkl11/raganork
You may not use this file except compliance with license!*/
let e = require('../events');
let { MessageType, Mimetype } = require('@adiwajshing/baileys');
let w = require('../config');
let v = w.SESSION
let cnt = w.warn_count
let {query} = require('raganork-bot');
const Language = require('../language');
const Lang = Language.getString('admin');

e.addCommand({pattern: 'warn ?(.*)', fromMe: true, desc: Lang.WARN_DESC}, (async (m, mat) => { 
if (!m.reply_message) return await m.sendMessage(Lang.WARN_NEED)
    var par = m.reply_message.jid
var me = m.client.user.jid.split('@')[0]
var chat = m.jid
if (!chat.endsWith('@g.us')) return await m.sendMessage(Lang.WARNGROUP)
var warn = await query.setwarn(me,chat,par,cnt,v)
var reason = mat[1] ? mat[1] : 'Replied message'
var msg = "```Warning ⚠️```"+ '\n' +
"User: " +'@'+par.split('@')[0] + '\n' +
"Reason:" +' *' + reason+ '*\n' +
"Remaining:" +' *' + warn + '*\n' 
if (warn !== 0) {
    return await m.client.sendMessage(chat,msg,MessageType.text,{quoted:m.data,contextInfo: {mentionedJid: [par]}})
} else {
    await m.client.sendMessage(chat,'⛔ @'+par.split('@')[0]+' *kullanıcısının uyarılma limiti '+cnt+'/3 ulaştığından dolayı gruptan çıkarıldı!*',MessageType.text,{quoted:m.data,contextInfo: {mentionedJid: [par]}})
    await m.client.groupRemove(m.jid, [m.reply_message.data.participant]);
}
}));

e.addCommand({pattern: 'resetwarn', fromMe: true, desc: Lang.RESETWARN_DESC}, (async (m, mat) => { 
    if (!m.reply_message) return await m.sendMessage('_Reply to any message!_')
        var par = m.reply_message.jid
    var me = m.client.user.jid.split('@')[0]
    var chat = m.jid
    if (!chat.endsWith('@g.us')) return await m.sendMessage(Lang.WARNGROUP)
    await query.deletewarn(me,chat,par,v)
    await m.client.sendMessage(chat,'```Successfully reset warn limits ('+cnt+') of @'+par.split('@')[0]+ '```',MessageType.text,{quoted:m.data,contextInfo: {mentionedJid: [par]}})    
}));

e.addCommand({pattern: 'getwarn', fromMe: true, desc: Lang.GETWARN_DESC}, (async (m, mat) => { 
    if (!m.reply_message) return await m.sendMessage('_Reply to any message!_')
        var par = m.reply_message.jid
    var me = m.client.user.jid.split('@')[0]
    var chat = m.jid
    if (!chat.endsWith('@g.us')) return await m.sendMessage(Lang.WARNGROUP)
    var war = await query.getwarn(me,chat,par,v)
    var warns = war.length
    if (warns === 0) {
    return await m.client.sendMessage(chat,'```User @'+par.split('@')[0]+ ' is not in the warn list ✅```',MessageType.text,{quoted:m.data,contextInfo: {mentionedJid: [par]}})    
    } else {
    var total = parseInt(cnt) - warns
return await m.client.sendMessage(chat,'```User @'+par.split('@')[0]+' has only ('+total+') warnings left ⚠```',MessageType.text,{quoted:m.data,contextInfo: {mentionedJid: [par]}})    
    }
}));
    
