const Asena = require('../events');
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('filters');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var THERI_on = ''
    var THERI_off = ''
   
    if (config.LANG == 'TR') {
        anti_on = '✅ _Antiword etkinleştirildi! Yeniden başlatılıyor..._'
        anti_off = '❌ _Antiword kapatıldı! Yeniden başlatılıyor..._'
    }
    
    if (config.LANG == 'EN') {
        anti_on = '_Anti word mode activated! Restarting.._'
        anti_off = '_Anti word mode deactivated! Restarting.._'
    }
    if (config.LANG == 'ML') {
        anti_on = 'ഇനി ചില ഫിൽട്ടർ വാക്കുകൾ ഉപയോഗിച്ചാൽ ഗ്രൂപ്പിൽ നിന്ന് നീക്കം ചെയ്യപ്പെടും. ബോട്ട് പുനരാരംഭിക്കുന്നു'
        anti_off = 'ഇനി ഗ്രൂപ്പിൽ നിങ്ങൾക്ക് ഏത് വാക്കുകളും ഉപയോഗിക്കാംകാം'
    }
   
    Asena.addCommand({pattern: 'addword ?(.*)', fromMe: true, desc: Lang.ADDWORD_DESC, usage: '.antiword on / off kelime eklemek için ise .addword Word1,Word2,etc' }, (async (message, match) => {
               await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['REMOVE_FILTER']: match[1]
                    } 
                });
                await message.sendMessage('✅' + match[1] + Lang.ADDWORD_FILTERED)
    }));
