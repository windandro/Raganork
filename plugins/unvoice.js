const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const Config = require('../config');
const Language = require('../language');
const {addInfo,skbuffer} = require('raganork-bot');
const Lang = Language.getString('unvoice');
let sourav = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'unvoice', fromMe: sourav, desc: Lang.UV_DESC}, (async (message, match) => {    
    if (!message.reply_message) return;
    var location = await message.client.downloadAndSaveMediaMessage({key: {remoteJid: message.reply_message.jid,id: message.reply_message.id },message: message.reply_message.data.quotedMessage});
    ffmpeg(location)
        .format('mp3')
        .save('output.mp3')
        .on('end', async () => {
            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});});}));

Asena.addCommand({pattern: 'mp3$', fromMe: sourav, desc: 'Converts video/voice message to audio'}, (async (message, match) => {    
     var rm = message.reply_message
     if (rm === false) return await message.client.sendMessage(message.jid, Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text,{quoted: message.data});
    if (!rm.audio && !rm.video) return await message.client.sendMessage(message.jid, Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text,{quoted: message.data});
    downloading = await message.client.sendMessage(message.jid,'_Generating audio.._',MessageType.text,{quoted: message.data});
    var location = await message.client.downloadAndSaveMediaMessage({key: {remoteJid: message.reply_message.jid,id: message.reply_message.id },message: message.reply_message.data.quotedMessage});
        ffmpeg(location)
            .save('tomp3.mp3')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('tomp3.mp3'), MessageType.audio, {quoted:message.data,mimetype: Mimetype.mp4Audio, ptt: false});
            });
        }));
    Asena.addCommand({pattern: 'setinfo (.*)', fromMe: sourav, desc: 'Changes title, author, image info of audio files!'}, (async (message, match) => {    
         if (!match[1].includes(';')) return await message.client.sendMessage(message.jid,'Wrong format! \n .setinfo Title;Artist;Description;Imagelink', MessageType.text);
        if (message.reply_message === false) return await message.client.sendMessage(message.jid, '_Reply to a voice or video!_', MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,'_Please wait!_',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({key: {remoteJid: message.reply_message.jid,id: message.reply_message.id },message: message.reply_message.data.quotedMessage});
        ffmpeg(location)
            .save('info.mp3')
            .on('end', async () => {
                var s = match[1].split(';')
                var res = await addInfo('info.mp3',s[0],s[1],'Raganork Engine', await skbuffer(s[2]),Config.SESSION)
                await message.client.sendMessage(message.jid, res, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
 
