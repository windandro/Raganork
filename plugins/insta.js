/* Credits: souravkl11, raganork-api
(c) souravkl11 2022 All rights reserved
*/
const skl = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const got = require("got");
const axios = require('axios');
const setting = require('../config');
const raganork = require('raganork-bot');
const Config = require('../config');
const s = require('../config');

const Language = require('../language')
const { errorMessage, infoMessage } = require('../helpers')
const Lang = Language.getString('instagram')

var v = s.CHANNEL

let sourav = setting.WORKTYPE == 'public' ? false : true

skl.addCommand({ pattern: 'insta ?(.*)', fromMe: sourav, desc: Lang.DESC }, (async (msg, query) => {
var q = !msg.reply_message.message ? query[1] : msg.reply_message.message
if (!q)  return await msg.client.sendMessage(msg.jid, Lang.NEED_WORD, MessageType.text, {quoted: msg.data});
if (q && !q.includes('instagram.com')) return await msg.client.sendMessage(msg.jid, need, MessageType.text, {quoted: msg.data});
var getid = /(?:https?:\/\/)?(?:www\.)?(?:instagram\.com(?:\/.+?)?\/(p|reel|tv)\/)([\w-]+)(?:\/)?(\?.*)?$/
var url = getid.exec(q)
if (url != null) {
var res = await raganork.query.getPost(url[0],v )
if (res === "false") return await msg.client.sendMessage(msg.jid, Lang.NOT_FOUND, MessageType.text, {quoted: msg.data});
else await msg.client.sendMessage(msg.jid, Lang.DOWN, MessageType.text, {quoted: msg.data});
var url = res.data
for (var i = 0; i < (url.length); i++) {
var get = got(url[i], {https: {rejectUnauthorized: false}});
var type = url[i].includes('mp4') ? MessageType.video : MessageType.image
var mime = url[i].includes('mp4') ? Mimetype.mp4 : Mimetype.jpg
var stream = get.buffer();
stream.then(async (video) => {
await msg.client.sendMessage(msg.jid, video, type, { mimetype: mime, quoted: msg.data});
})};}
else if (url == null) {
var linksplit = q.split('https://')[1]
var res = await raganork.query.getPost('https://'+linksplit,v )
if (res === "false") return await msg.client.sendMessage(msg.jid, Lang.NOT_FOUND, MessageType.text, {quoted: msg.data});
else await msg.client.sendMessage(msg.jid, Lang.DOWN, MessageType.text, {quoted: msg.data});
var buffer = await raganork.query.skbuffer(res.links[0].url)
if (res.links[0].url.includes('mp4')) return await msg.client.sendMessage(msg.jid, buffer, MessageType.video, { mimetype: Mimetype.mp4, quoted: msg.data});
if (res.links[0].url.includes('jpg')) return await msg.client.sendMessage(msg.jid, buffer, MessageType.image, { mimetype: Mimetype.jpg, quoted: msg.data});
    
}
}));

skl.addCommand({ pattern: 'ig ?(.*)', fromMe: sourav, desc: Lang.DESCIG }, (async (msg, query) => {
    if (query[1] === '') return await msg.client.sendMessage(msg.jid, Lang.USAGE, MessageType.text, {quoted: msg.data});
    var res = await raganork.query.getStalk(query[1])
    if (res === "false") return await msg.client.sendMessage(msg.jid, Lang.STORY, MessageType.text, {quoted: msg.data})
    var buffer = await raganork.query.skbuffer(res.hd_profile_pic_url_info.url)
    await msg.client.sendMessage(msg.jid, buffer, MessageType.image, { mimetype: Mimetype.jpg, caption: Lang.NAME + `${res.fullname}` + '\n' + Lang.BIO + `${res.biography}` + '\n' + Lang.ACCOUNT + `${res.is_private} ` + '\n' + Lang.POSTS + `${res.post_count}` + '\n' + Lang.FOLLOWERS + `${res.followers}` + '\n' + Lang.FOLLOWS + `${res.following}` + '\n' + Lang.VERIFIED + `${res.is_verified} `, quoted: msg.data});
    }));

skl.addCommand({ pattern: 'story ?(.*)', fromMe: sourav, desc: Lang.DESCSTORY }, (async (msg, query) => {
if (query[1] === '') return await msg.client.sendMessage(msg.jid, Lang.NEED_WORDS, MessageType.text, {quoted: msg.data});
var user = query[1];
var res = await raganork.query.getStory(user,v)
if (res === "false") return await msg.client.sendMessage(msg.jid, Lang.NOT_FOUND, MessageType.text, {quoted: msg.data})
if (res.error) return await msg.client.sendMessage(msg.jid, res.error.replace('status','story'), MessageType.text, {quoted: msg.data})
var url = ''
await msg.sendMessage(res.result.username + Lang.USERNAMES + res.result.stories_count + Lang.STORYS);
res.result.stories.map((result) => {
url += result.url + ','});
var que = url !== false ? url.split(',') : [];
for (var i = 0; i < (que.length < res.result.stories.length ? que.length : res.result.stories.length); i++) {
var get = got(que[i], {https: {rejectUnauthorized: false}});
var type = que[i].includes('mp4') ? MessageType.video : MessageType.image
var mime = que[i].includes('mp4') ? Mimetype.mp4 : Mimetype.jpg
var stream = get.buffer();
stream.then(async (video) => {
await msg.client.sendMessage(msg.jid, video, type, { mimetype: mime,quoted: msg.data});
})};
}));
