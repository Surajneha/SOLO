const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const GM = "it sends bot deploying link"

const GN = "it sends bot deploying link"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "ð *To check update .update* â\nð *To update Bot .update nowâ *\n\nðï¸ *ðð¢ð­ð¡ð®ð ðð¢ð§ð¤ : https://github.com/ANUSER1/SOLOâ *\n\nðï¸ *ðð®ðð¢ð¨ ðð¨ð¦ð¦ðð§ð : https://github.com/ANUSER1/SOLO/tree/master/uploads* â\n\n* ðï¸ðð­ð¢ðð¤ðð« ðð¨ð¦ð¦ðð§ð : https://github.com/ANUSER1/SOLO/tree/master/Amalser* â"; 

 

    var i = Math.floor(1*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));

    

    }

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

                 r_text[0] = "ð *To check update .update* â\n\nð *To update Bot .update now* â\n\n\nðï¸ *ðð¢ð­ð¡ð®ð ðð¢ð§ð¤ : https://github.com/ANUSER1/SOLO* â\n\nðï¸ *ðð®ðð¢ð¨ ðð¨ð¦ð¦ðð§ð : https://github.com/ANUSER1/SOLO/tree/master/uploads* â\n\n* ðï¸ðð­ð¢ðð¤ðð« ðð¨ð¦ð¦ðð§ð : https://github.com/ANUSER1/SOLO/tree/master/Amalser* â"; 

                     var i = Math.floor(1*Math.random())

                         await message.client.sendMessage(

                               message.jid,(r_text[i]), MessageType.text);

    }));

    

   }

