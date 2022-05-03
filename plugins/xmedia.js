/* Codded by @phaticusthiccy
feature decsription by souravkl11*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
let sourav = Config.WORKTYPE == 'public' ? false : true
const Language = require('../language');
const Lang = Language.getString('conventer');

    Asena.addCommand({pattern: 'xmedia$', fromMe: sourav, desc: Lang.XMEDİA_DESC}, (async (message, match) => {    
        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.sendMessage('💻Kullanımı: *.mp4enhance*\nℹ️Açıklama: 🇹🇷 Videnun kalitesini artırır.\n\n💻Kullanımı: *.interp*\nℹ️Açıklama: 🇹🇷 Videonun FPS değerini arttırır.\n\n💻Kullanımı: *.mp4slowmo*\nℹ️Açıklama: 🇹🇷 Ağır çekim olmayan videolara true-slowmo uygular.\n\n💻Kullanımı: *.x4mp4*\nℹ️Açıklama: 🇹🇷 Video Kalitesini 4 kat düşürür.\n\n💻Kullanımı: *.x2mp4*\nℹ️Açıklama: 🇹🇷 Video Kalitesini 2 kat düşürür.\n\n💻Kullanımı: *.gif*\nℹ️Açıklama: 🇹🇷 Videoyu gif’e çevirir.\n\n💻Kullanımı: *.agif*\nℹ️Açıklama: 🇹🇷 Videoyu sesli gif’e çevirir.\n\n💻Kullanımı: *.mp4blur*\nℹ️Açıklama: 🇹🇷 Video arka planını bulanıklaştırır.\n\n💻Kullanımı: *.mp4stab*\nℹ️Açıklama: 🇹🇷 Videonun titreşimini azaltır.\n\n💻Kullanımı: *.mp4rainbow*\nℹ️Açıklama: 🇹🇷 Videoya gökkuşağı efekti uygular.\n\n💻Kullanımı: *.mp4color*\nℹ️Açıklama: 🇹🇷 Videonun renklerini daha canlı ve çekici yapar.\n\n💻Kullanımı: *.mp4art*\nℹ️Açıklama: 🇹🇷 Videoya çizim efekti uygular.\n\n💻Kullanımı: *.mp4negative*\nℹ️Açıklama: 🇹🇷 Videoya negatif renk filtresi uygular.\n\n💻Kullanımı: *.mp4vintage*\nℹ️Açıklama: 🇹🇷 Videoya nostaji efekti uygular.\n\n💻Kullanımı: *.mp4bw*\nℹ️Açıklama: 🇹🇷 Videoya siyah-beyaz efekti uygular.\n\n💻Kullanımı: *.mp4reverse*\nℹ️Açıklama: 🇹🇷 Videoyu tersten oynatır.\n\n💻Kullanımı: *.mp4edge*\nℹ️Açıklama: 🇹🇷 Videoya edge efekti uygular.\n\n💻Kullanımı: *.mp4image*\nℹ️Açıklama: 🇹🇷 Fotoğrafı 5 saniyelik videoya çevirir.\n\n💻Kullanımı: *.spectrum*\nℹ️Açıklama: 🇹🇷 Sesin spektrum görüntüsünü video yapar.\n\n💻Kullanımı: *.waves*\nℹ️Açıklama: 🇹🇷 Sesin dalga aralığını videoya çevirir.\n\n💻Kullanımı: *.frequency*\nℹ️Açıklama: 🇹🇷 Sesin frekans aralığını videoya çevirir.\n\n💻Kullanımı: *.avec*\nℹ️Açıklama: 🇹🇷 Sesin farklı bir histogramını videoya çevirir.\n\n💻Kullanımı: *.volumeaudio*\nℹ️Açıklama: 🇹🇷 Sesin Desibel Değerini Videoya Dönüştürür.\n\n💻Kullanımı: *.cqtaudio*\nℹ️Açıklama: 🇹🇷 Ses CQT değerini videoya çevirir.\n\n💻Kullanımı: *.mp3eq*\nℹ️Açıklama: 🇹🇷 Sesi kristal berraklık düzeyinde ayarlar.\n\n💻Kullanımı: *.mp3crusher*\nℹ️Açıklama: 🇹🇷 Sesi bozar ve gülünç hale getirir.\n\n💻Kullanımı: *.mp3reverse*\nℹ️Açıklama: 🇹🇷 Sesi Tersen Oynatır.\n\n💻Kullanımı: *.mp3bass* \nℹ️Açıklama: 🇹🇷 Müziğin bass düzeyini, sesi bozmadan arttırır.\n\n💻Kullanımı: *.mp3pitch*\nℹ️Açıklama: 🇹🇷 Sesi inceltir ve hızlandırır.\n\n💻Kullanımı *.mp3low*\nℹ️Açıklama: 🇹🇷 Sesi kalınlaştırır ve yavaşlatır.\n\n💻Kullanımı: *.x2mp3*\nℹ️Açıklama: 🇹🇷 Sesi 2 kat hızlandırır.\n\n💻Kullanımı: *.mp3volume*\nℹ️Açıklama: 🇹🇷 Ses seviyesini aşırı derecede arttırır.\n\n💻Kullanımı: *.bwimage*\nℹ️Açıklama: 🇹🇷 Fotoğrafa siyah-beyaz efekti uygular.\n\n💻Kullanımı: *.vintageimage*\nℹ️Açıklama: 🇹🇷 Fotoğrafa vintage efekti uygular.\n\n💻Kullanımı: *.edgeimage*\nℹ️Açıklama: 🇹🇷 Fotoğrafa edge efekti uygular.\n\n💻Kullanımı: *.enhanceimage*\nℹ️Açıklama: 🇹🇷 Fotoğrafı daha net hale getirir.\n\n💻Kullanımı: *.blurimage*\nℹ️Açıklama: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n\n💻Kullanımı: *.grenimage*\nℹ️Açıklama: 🇹🇷 Fotoğrafa gren efekti uygular.\n\n💻Kullanımı: *.negativeimage*\nℹ️Açıklama: 🇹🇷 Fotoğrafa negatif renk filtresi uygular.\n\n💻Kullanımı: *.rainbowimage*\nℹ️Açıklama: 🇹🇷 Fotoğrafa gökkuşağı efekti uygular.\n\n💻Kullanımı: *.colorimage*\nℹ️Açıklama: 🇹🇷 Fotoğrafın renklerini daha canlı ve çekici yapar.\n\n💻Kullanımı: *.artimage*\nℹ️Açıklama: 🇹🇷 Fotoğrafa çizim efekti uygular.');
        } else { 
            await message.sendMessage('💻Usage: *.mp4enhance*\nℹ️Desc: 🇬🇧 Enhance video’s quality.\n\n💻Usage: *.interp*\nℹ️Desc: 🇬🇧 Increases the FPS of the video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc: 🇬🇧 Applies true-slowmo to non-slow motion videos.\n\n💻Usage: *.x4mp4*\nℹ️Desc: 🇬🇧 Reduce video’s quality by 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: 🇬🇧 Reduce video’s quality by 50%.\n\n💻Usage: *.gif*\nℹ️Desc: 🇬🇧 Converts video to gif.\n\n💻Usage: *.agif*\nℹ️Desc: 🇬🇧 Converts video to voiced gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: 🇬🇧 Blurs the background of the video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: 🇬🇧 Decreases the vibration of the video.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: 🇬🇧 Applies a rainbow effect to video.\n\n💻Usage: *.mp4color*\nℹ️Desc: 🇬🇧 Makes the colors of the video more vivid and beautiful.\n\n💻Usage: *.mp4art*\nℹ️Desc: 🇬🇧 Applies a art effect to the video.\n\n💻Usage: *.mp4negative*\nℹ️Desc: 🇬🇧 Applies a negative color filter to the video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc: 🇬🇧 Applies a nostalgic effect to video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: 🇬🇧 Applies a monochrome effect to video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: 🇬🇧 Plays the video in reverse.\n\n💻Usage: *.mp4edge*\nℹ️Desc: 🇬🇧 Applies a edge effect to the video.\n\n💻Usage: *.mp4image*\nℹ️Desc: 🇬🇧 Converts photo to 5 sec video.\n\n💻Usage: *.spectrum*\nℹ️Desc: 🇬🇧 Converts the spectrum of sound into video.\n\n💻Usage: *.waves*\nℹ️Desc: 🇬🇧 Converts the wave range of sound to video.\n\n💻Usage: *.frequency*\nℹ️Desc: 🇬🇧 Converts the frequency range of sound to video.\n\n💻Usage: *.avec*\nℹ️Desc: 🇬🇧 Converts the histogram of sound to video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: 🇬🇧 Converts the decibel value of the sound into video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: 🇬🇧 Converts the CQT value of audio to video.\n\n💻Usage: *.mp3eq*\nℹ️Desc: 🇬🇧 Adjusts the sound to a crystal clear level.\n\n💻Usage: *.mp3bass* \nℹ️Desc: 🇬🇧 Adds crystal bass without distorting the sound.\n\n💻Usage: *.mp3crusher*\nℹ️Desc: 🇬🇧 Distorts the sound, makes ridiculous.\n\n💻Usage: *.mp3reverse*\nℹ️Desc: 🇬🇧 Plays the sound in reverse.\n\n💻Usage: *.mp3pitch*\nℹ️Desc: 🇬🇧 Makes the sound thinner and faster.\n\n💻Usage *.mp3low*\nℹ️Desc: 🇬🇧 Makes the sound deep and slower.\n\n💻Usage: *.x2mp3*\nℹ️Desc: 🇬🇧 Makes the sound twice as fast.\n\n💻Usage: *.mp3volume*\nℹ️Desc: 🇬🇧 Increase sound level so much.\n\n💻Usage: *.bwimage*\nℹ️Desc: 🇬🇧 Applies a monochrome effect to image.\n\n💻Usage: *.vintageimage*\nℹ️Desc: 🇬🇧 Applies a vinatge effect to photo.\n\n💻Usage: *.edgeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n🇬🇧 Applies a edge effect to the photo.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n🇬🇧 Makes the photo clearer.\n\n💻Usage: *.blurimage*\nℹ️Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n🇬🇧 Blurs the background of the photo.\n\n💻Usage: *.grenimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n🇬🇧 Applies grain effect to the photo.\n\n💻Usage: *.negativeimage*\nℹ️Desc: 🇬🇧 Applies a negative color filter to the photo.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: 🇬🇧 Applies rainbow effect to the photo.\n\n💻Usage: *.colorimage*\nℹ️Desc: 🇬🇧 It makes the colors of the photo more vivid and attractive.\n\n💻Usage: *.artimage*\nℹ️Desc: 🇬🇧 Applies a art effect to the photo.');
        }
    }));
    
    Asena.addCommand({pattern: 'x4mp4', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_VIDEO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withSize('25%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'x2mp4', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_VIDEO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
           },
            message: message.reply_message.data.quotedMessage
        });

       ffmpeg(location)
            .withSize('50%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'mp4image', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_PHOTO);
        var downloading = await message.client.sendMessage(message.jid,Lang.CONVERTING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .loop(6)
            .fps(19)
            .videoBitrate(400)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'spectrum', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_AUDIO);
        var downloading = await message.client.sendMessage(message.jid,Lang.CONVERTING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showspectrum=s=720x1280,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'waves', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_AUDIO);
        var downloading = await message.client.sendMessage(message.jid,Lang.CONVERTING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showwaves=s=720x1280:mode=cline:rate=25,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'frequency', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_AUDIO);
        var downloading = await message.client.sendMessage(message.jid,Lang.CONVERTING,MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .outputOptions(["-y", "-filter_complex", "[0:a]showfreqs=s=720x1280:mode=cline:fscale=log,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
                .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'avec', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_AUDIO);
        var downloading = await message.client.sendMessage(message.jid,Lang.CONVERTING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'volumeaudio', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_AUDIO);
        var downloading = await message.client.sendMessage(message.jid,Lang.CONVERTING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'cqtaudio', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_AUDIO);
        var downloading = await message.client.sendMessage(message.jid,Lang.CONVERTING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showcqt=s=1280x720,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'mp3eq', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_AUDIO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14", "-ar 48k"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });

    }));

    Asena.addCommand({pattern: 'mp3crusher', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_AUDIO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });

    }));

    Asena.addCommand({pattern: 'mp3reverse', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_AUDIO);
        var downloading = await message.client.sendMessage(message.jid,Lang.CONVERTING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "areverse"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });

    }));

    Asena.addCommand({pattern: 'mp4vintage', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_VIDEO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage,format=yuv420p"])
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'mp4reverse', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_VIDEO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "reverse", "-af", "areverse"])
            .format('mp4')
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'mp4bw', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_VIDEO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'bwimage', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_PHOTO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN});
        });

    }));

    Asena.addCommand({pattern: 'vintageimage', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_PHOTO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'mp4enhance', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_VIDEO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'blurimage', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_PHOTO);
        var downloading = await message.client.sendMessage(message.jid,Lang.CONVERTING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'mp4blur', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_AUDIO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'mp3bass$', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_AUDIO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "bass=g=9:f=110:w=0.6"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
    }));

    Asena.addCommand({pattern: 'mp3pitch', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_AUDIO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*1.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });

    }));

    Asena.addCommand({pattern: 'mp4edge', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_VIDEO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-codec:v", "mpeg4", "-filter:v", "edgedetect=low=0.9:high=0.3"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'mp3low', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_AUDIO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*0.9"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });

    }));

    Asena.addCommand({pattern: 'x2mp3', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_AUDIO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "atempo=2.0", "-vn"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });

    }));

    Asena.addCommand({pattern: 'edgeimage', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_PHOTO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:v", "edgedetect=low=0.9:high=0.2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'enhanceimage', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_PHOTO);
        var downloading = await message.client.sendMessage(message.jid,Lang.CONVERTING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'mp3volume', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => { 
   
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_AUDIO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "volume=5.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });

    })); 

    Asena.addCommand({pattern: 'gif', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_VIDEO);
        var downloading = await message.client.sendMessage(message.jid,Lang.CONVERTING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .noAudio()
            .fps(13)
            .videoBitrate(500)
            .save('output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'agif', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_VIDEO);
        var downloading = await message.client.sendMessage(message.jid,Lang.CONVERTING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fps(13)
                .videoBitrate(500)
                .save('output_gif.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: Config.AFN});
                });
    
    }));

    Asena.addCommand({pattern: 'grenimage', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {   

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_PHOTO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .videoFilters('noise=alls=100:allf=t+u')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'interp ?(.*)', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage(Lang.NEED_FPS);
        if (message.reply_message.video && match[1] <= 10) return await message.sendMessage(Lang.NEED_FPS_10);
        if (message.reply_message.video && match[1] >= 500) return await message.sendMessage(Lang.NEED_FPS_500)
   
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await message.sendMessage(Lang.PROCESSING);

        ffmpeg(location)
            .videoFilters(`minterpolate=fps=${match[1]}:mi_mode=mci:me_mode=bidir`)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: `Made by WhatsAsena\n_Interpolated to ${match[1]} FPS_`});
            });

    }));

    Asena.addCommand({pattern: 'rainbowimage', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_PHOTO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)"])
            .videoFilters('eq=brightness=0.5')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'mp4rainbow', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_VIDEO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)", "-pix_fmt yuv420p"])
            .videoFilters('eq=brightness=0.5')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'negativeimage', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_PHOTO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'mp4negative', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_VIDEO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'mp4art', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_VIDEO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
    ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'artimage', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_VIDEO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'mp4stab', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_VIDEO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "deshake,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'mp4color', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_VIDEO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'colorimage', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_PHOTO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN});
            });

    }));

    Asena.addCommand({pattern: 'mp4slowmo', fromMe: sourav, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage(Lang.NEED_VIDEO);
        var downloading = await message.client.sendMessage(message.jid,Lang.EDITING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        await message.client.sendMessage(message.jid,Lang.PROCESSING, MessageType.text);

        ffmpeg(location)
            .videoFilters('minterpolate=fps=120')
            .videoFilters('setpts=4*PTS')
            .noAudio()
            .format('mp4')
            .save('slowmo.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('slowmo.mp4'), MessageType.video, {caption: Config.AFN});
            });

    }));
