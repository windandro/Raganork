const Asena = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

const Language = require('../language');
const Lang = Language.getString('ip');

if (Config.WORKTYPE == 'private') {

  Asena.addCommand({pattern: 'ip ?(.*)', desc: Lang.IPSTATUS_DESC, fromMe: true}, async (message, match) => {
	
    if (message.jid === '905524317852-1612300121@g.us') {

                return;
            }
    
    if (match[1] === '') return await message.reply(Lang.NEED_IP);
	const url = `https://api.techniknews.net/ipgeo/${match[1]}`;
	try {
	const response = await got(url);
	const ipjson = JSON.parse(response.body);
	if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🔴 ' + Lang.IP +'* ```' + match[1] + '```\n\n' +
	   '*✅' + Lang.STATUS +'* ```' + ipjson.status+ '```\n' +
           '*🌐' + Lang.CONTINENT +'* ```' + ipjson.continent+ '```\n' +
           '*🗺' + Lang.COUNTRY +'* ```' + ipjson.country+ '```\n' +
           '*🔢' + Lang.COUNTRY_CODE +'* ```' + ipjson.countryCode+ '```\n' +
           '*🌍' + Lang.REGION_NAME +'* ```' + ipjson.regionName+ '```\n' +
           '*🚩' + Lang.CITY +'* ```' + ipjson.city+ '```\n' +
           '*🏛' + Lang.ZIP +'* ```' + ipjson.zip+ '```\n' +
           '*💸' + Lang.CURRENCY +'* ```' + ipjson.currency+ '```\n\n' +
           '*📡' + Lang.ISP +'* ```' + ipjson.isp+ '```\n' +
           '*🛡' + Lang.PROXY +'* ```' + ipjson.proxy+ '```\n' +
           '*📱' + Lang.MOBILE +'* ```' + ipjson.mobile+ '```\n', MessageType.text);
	} 
    catch {
		return await message.client.sendMessage(message.jid, Lang.NOTFOUND_IP, MessageType.text);
	}
 });
}	
else if (Config.WORKTYPE == 'public') {

  Asena.addCommand({pattern: 'ip ?(.*)', desc: 'gives you the detail of your IP' ,fromMe: false}, async (message, match) => {
	
    if (message.jid === '905524317852-1612300121@g.us') {

                return;
            }
    
    if (match[1] === '') return await message.reply(Lang.NEED_IP);
	const url = `https://api.techniknews.net/ipgeo/${match[1]}`;
	try {
	const response = await got(url);
	const ipjson = JSON.parse(response.body);
	if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🔴 ' + Lang.IP +'* ```' + match[1] + '```\n\n' +
	   '*✅' + Lang.STATUS +'* ```' + ipjson.status+ '```\n' +
      	   '*🌐' + Lang.CONTINENT +'* ```' + ipjson.continent+ '```\n' +
           '*🗺' + Lang.COUNTRY +'* ```' + ipjson.country+ '```\n' +
           '*🔢' + Lang.COUNTRY_CODE +'* ```' + ipjson.countryCode+ '```\n' +
           '*🌍' + Lang.REGION_NAME +'* ```' + ipjson.regionName+ '```\n' +
           '*🚩' + Lang.CITY +'* ```' + ipjson.city+ '```\n' +
           '*🏛' + Lang.ZIP +'* ```' + ipjson.zip+ '```\n' +
           '*💸' + Lang.CURRENCY +'* ```' + ipjson.currency+ '```\n\n' +
           '*📡' + Lang.ISP +'* ```' + ipjson.isp+ '```\n' +
           '*🛡' + Lang.PROXY +'* ```' + ipjson.proxy+ '```\n' +
           '*📱' + Lang.MOBILE +'* ```' + ipjson.mobile+ '```\n', MessageType.text);
	} 
    catch {
		return await message.client.sendMessage(message.jid, Lang.NOTFOUND_IP, MessageType.text);
	}
 });
}
