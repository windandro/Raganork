const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const Config = require('../config');
const cheerio = require('cheerio')
const {addInfo,skbuffer} = require('raganork-bot');
const FormData = require('form-data')
const Axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('conventer');
let sk = Config.WORKTYPE == 'public' ? false : true
    Asena.addCommand({pattern: 'photo$', fromMe: sk, desc: Lang.STİCKER_DESC}, (async (message, match) => {   
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid, Lang.STİCKER_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(mid,Lang.STİCKER,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fromFormat('webp_pipe')
            .save('output.png')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.png'), MessageType.image, {mimetype: Mimetype.jpg});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));


    Asena.addCommand({pattern: 'mp3$', fromMe: sk, desc: 'Converts video/voice message to audio'}, (async (message, match) => {    
       var rm = message.reply_message
       if (rm === false) return await message.client.sendMessage(message.jid, Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text,{quoted: message.data});
       if (!rm.audio && !rm.video) return await message.client.sendMessage(message.jid, Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text,{quoted: message.data});
       downloading = await message.client.sendMessage(message.jid,Lang.MP4TOAUDİO,MessageType.text,{quoted: message.data});
       var location = await message.client.downloadAndSaveMediaMessage({key: {remoteJid: message.reply_message.jid,id: message.reply_message.id },message: message.reply_message.data.quotedMessage});
       ffmpeg(location)
            .save('tomp3.mp3')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('tomp3.mp3'), MessageType.audio, {quoted:message.data,mimetype: Mimetype.mp4Audio, ptt: false});
            });
        }));
