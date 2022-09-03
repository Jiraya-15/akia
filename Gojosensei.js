require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const maker = require('mumaker')

const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const nexusnw = require('xfarr-api')

//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = GojoMdNx = async (GojoMdNx, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await GojoMdNx.decodeJid(GojoMdNx.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await GojoMdNx.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	//group target \\
const reply = (teks) => {
            GojoMdNx.sendMessage(m.chat, { text: teks}, { quoted: m})
        }
        
        const replay = (teks) => {
            GojoMdNx.sendMessage(m.chat, { text: teks}, { quoted: m})
        }
	
        //Public & Self\\
        if (!GojoMdNx.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            GojoMdNx.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await GojoMdNx.setStatus(`${GojoMdNx.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}


    
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`ممنوع روابط يخوي.`)
        if (!isBotAdmins) return reply(`اها ترسل رتبط؟ ، يريتني مشرف بس.`)
        let gclink = (`https://chat.whatsapp.com/`+await GojoMdNx.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        GojoMdNx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

        //auto reply 
        for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./GojoMedia/sticker/${anji}.webp`)
					GojoMdNx.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./GojoMedia/vn/${anju}.mp3`)
					GojoMdNx.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./GojoMedia/image/${anjh}.jpg`)
					GojoMdNx.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
					for (let anjh of videox){
				if (budy === anjh){
					result = fs.readFileSync(`./GojoMedia/vid/${anjh}.mp4`)
					GojoMdNx.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: GojoMdNx.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, GojoMdNx.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        GojoMdNx.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'استسلم' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            GojoMdNx.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`جوابك صحيح`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*إجابة خاطئة*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isاستسلم = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isاستسلم = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isاستسلم) return !0
	    }
	    if (!isاستسلم && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'اللعبة انتهت',
	    '-2': 'خطأ',
	    '-1': 'تم اختيار هذا الرقم',
	    0: 'تم اختيار هذا الرقم',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isاستسلم) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isاستسلم ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} فاز / ت` : isTie ? `انتهت` : `دورك ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

`
	    if ((room.game._currentTurn ^ isاستسلم ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isاستسلم ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await GojoMdNx.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await GojoMdNx.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }


        //Suit PvP\\
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
السلام عليكم، انا البوت.
الشخص الذي منشنته مختفي ${reason ? 'بسبب :' + reason : 'بيرجع قريب'}
ذهب قبل : ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
            منور لقد عدت ${user.afkReason ? ' من ' + user.afkReason : ''}
            مدة الغياب : ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
switch(command) {


    case 'اكس_او': {
        let TicTacToe = require("./lib/tictactoe")
        this.game = this.game ? this.game : {}
        if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
        let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
        if (room) {
        reply('وجدنا اللاعب')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
        return {
        X: '❌',
        O: '⭕',
        1: '1️⃣',
        2: '2️⃣',
        3: '3️⃣',
        4: '4️⃣',
        5: '5️⃣',
        6: '6️⃣',
        7: '7️⃣',
        8: '8️⃣',
        9: '9️⃣',
        }[v]
        })
        let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

دورك @${room.game.currentTurn.split('@')[0]}

 `
        if (room.x !== room.o) await GojoMdNx.sendText(room.x, str, m, { mentions: parseMention(str) } )
        await GojoMdNx.sendText(room.o, str, m, { mentions: parseMention(str) } )
        } else {
        room = {
        id: 'tictactoe-' + (+new Date),
        x: m.chat,
        o: '',
        game: new TicTacToe(m.sender, 'o'),
        state: 'WAITING'
        }
        if (text) room.name = text
        reply('ننتضر يجي لاعب' + (text ? ` . ${prefix}${command} ${text}` : ''))
        this.game[room.id] = room
        }
        }
        break
        
case 'بروفايل':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     

     var flob = await getBuffer(picak+'User Profile')
     var bio= await GojoMdNx.fetchStatus(m.sender)
     var bioo = bio.status
     const adn= isAdmins? "نعم":"لا"
     
     try {
        
        pfp=await GojoMdNx.profilePictureUrl(m.sender, 'image')
    
          } catch (e) {
     
      pfp ='https://i.ibb.co/4WH9MHJ/th.jpg'
    }

     const profilexx = `*「  معلومات البروفايل  」*\n\n*المنشن* : ${pushname}\n*البايو* : ${bioo}\n*مشرف فالقروب؟* : ${adn}\n*لفل* : ${levelMenu}\n*اكس بي* : ${xpMenu} مستمر ل ${reqXp}\n*مستوى* : ${role}`
 


let buttonspro = [
    {buttonId: `-اوامر`, buttonText: {displayText: 'الاوامر'}, type: 1}
    ]
            let buttonMessage = {
                image: { url: pfp },
                caption: profilexx,
                footer: `${BotName}`,
                buttons: buttonspro,
                headerType: 4
            }
        GojoMdNx.sendMessage(m.chat,buttonMessage,{quoted:m})
        	
            break


            case 'حضر_القروب': case 'bangroup':{
                if (isBan) return reply(mess.banned)	 			
                if (!isCreator) return replay(mess.botowner)
                if (args[0] === "on") {
                if (isBanChat) return replay('هذا القروب محضور مسبقا')
                banchat.push(from)
                replay('تم حضر القروب من استخدام البوت')
                var groupe = await GojoMdNx.groupMetadata(from)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                GojoMdNx.sendMessage(from, {text: `\`\`\`「 ملاحضة 」\`\`\`\n\nلا يمكن لاحد استخدام اوامر البوت ، كلم جيرايا لرفع الحضر`, contextInfo: { mentionedJid : mems }}, {quoted:m})
                } else if (args[0] === "off") {
                if (!isBanChat) return replay('هذا القروب محضور مسبقا')
                let off = banchat.indexOf(from)
                banchat.splice(off, 1)
                replay('يمكنك استخدام اوامر البوت الان')
                } else {
                  let buttonsntnsfw = [
                  { buttonId: `-bangroup on`, buttonText: { displayText: 'حضر' }, type: 1 },
                  { buttonId: `-bangroup off`, buttonText: { displayText: 'فك الحضر' }, type: 1 }
                  ]
                  await GojoMdNx.sendButtonText(m.chat, buttonsntnsfw, `حضر = لا يمكن استخدام البوت\n\n فك الحضر = اشتغال البوت فالقروب`, `${global.BotName }`, m)
                  }
                  }
                  break


case 'قروباتي':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(` يمكنك/ي الدخول لاي قروب يعجبك/ي

*قروب البوت*
https://chat.whatsapp.com/KLPZQqWM8fs6UCwpYCRVNs

*قروب الانمي مون*
https://chat.whatsapp.com/Ccu4raDkkKI3Ro2dUpqgCo

*قروب الانمي ريڤن*
https://chat.whatsapp.com/BFYbcZxeF2A2FmF3ijtNG3`)
break


case 'مساعدة':
    
    reply(`*ادخل قروب البوت للمساعدة:* https://chat.whatsapp.com/KLPZQqWM8fs6UCwpYCRVNs`)
    break

case 'رياكشنات':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
            reply(` *━━━━━━〈  📍 الـريـاكـشـنـات 📍  〉━━━━━━*\n\nاتفق - كف - عناق - رقص - قتل - ضرب - بكاء - توبيخ`)
        break   



case 'مقطع': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
            if (!args.join(" ")) return reply(`اكتب الاسم بالانجليزي ، مثال : ${prefix}مقطع Ramadan`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		GojoMdNx.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break


case 'فلم':
if (isBan) return reply(mess.banned)
	if (isBanChat) return reply(mess.bangc)
if (!q) return reply(`رجاءا اكتب اسم الفلم بالانجليزية\n مثال : ${prefix}فلم Spiderman`)
xfarrapi.Film(q)
    .then(data => {console.log(data)
    let krl = `*Search Term:* ${q}\n\n`
			    for (let i of data) {
                krl += (`-----------------------------------------------------------------------------\n\n\n*الاسم:* ${i.judul}\n *الجودة :* ${i.quality}\n *النوع : ${i.type}*\n *تم التنزيل في :* ${i.upload}\n *الرابط :* ${i.link}\n\n\n`)
                }
               GojoMdNx.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdocs })
});
break


case 'خلفية': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply("اكتب اسم انمي او شخصية بالانجليزي")
const { AnimeWallpaper } =require("anime-wallpaper")
const wall = new AnimeWallpaper();
const pages = [1,2,3,4];
const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall .getAnimeWall4({ title: q, type: "sfw", page: pages }).catch(() => null);
        const i = Math.floor(Math.random() * wallpaper.length);
		
let buttons = [
            {buttonId: `-خلفية ${args.join(" ")}`, buttonText: {displayText: 'التالي'}, type: 1}
        ]
        let buttonMessage = {
            image: {url:wallpaper[i].image},
            caption: `*الاسم:* ${q}`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4
        }
        GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break

    case 'groupsetting1':{
        if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
            let sections = []
            let com = [`group open`,`leveling on`,`welcome on`,`antilinkgc on`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`]
            let comm = [`group close`,`leveling off`,`welcome off`,`antilinkgc off`,`antilinktg off`,`antilinktt off`,`antilinkytch off`,`antilinkytvid off`,`antilinkig on`,`antilinkfb off`,`antilinktwit off`,`antilinkall off`,`antiwame off`]
            let listnya = [`Group open/close`,`Leveling on/off`,`Welcome/Left on/off`,`Antilink Group on/off`,`Antilink Telegram on/off`,`Antilink Tiktok on/off`,`Antilink Youtube Channel on/off`,`Antilink Youtube Video on/off`,`Antilink Instagram on/off`,`Antilink Facebook on/off`,`Antilink Twitter on/off`,`Antilink All on/off`,`Anti Wame on/off`]
            let suruh = [`Enable`, `Disable`]
            let fiturname = [`Group`,`Leveling`,`Auto Sticker`,`Welcome`,`Antilink Group`,`Antilink Telegram`,`Antilink Tiktok`,`Antilink Youtube Channel`,`Antilink Youtube Video`,`Antilink Instagram`,`Antilink Facebook`,`Antilink Twitter`,`Antilink All`,`Anti Wame`,`Auto Revoke`,`Auto Reply`]
            let startnum = 0; let startnu = 0; let startn = 0;let start = 0
            let startnumm = 1
            for (let x of com) {
                const yy = {title: `${listnya[startnum++]}`,
            rows: [
               {
                title: `${suruh[0]}`,
                description: `Activate ${fiturname[startnu++]}`,
                rowId: `${prefix}${x}`
              },{
                title: `${suruh[1]}`,
                description: `Deactivate ${fiturname[startn++]}`,
                rowId: `${prefix}${comm[start++]}`
              }
            ]
           }
                sections.push(yy)
            }
            const sendm =  GojoMdNx.sendMessage(
from, 
{
text: "Group Settings",
footer: BotName,
title: "Set your group settings here...",
buttonText: "Click Button",
sections
}, { quoted : m }
)  
}
break

       case 'قروبات': {
        if (!isCreator) return replay(mess.botowner)
        let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
        let teks = `مجموع القروبات : ${anu.length} \n\n`
        for (let i of anu) {
            let metadata = await GojoMdNx.groupMetadata(i)
            teks += `💫 الاسم : ${metadata.subject}\n💫 مؤسس القروب : @${metadata.owner.split('@')[0]}\n💫 ايدي القروب : ${metadata.id}\n💫 تاريخ التاسيس : ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n💫 الاعضاء : ${metadata.participants.length}\n\n────────────────────────\n\n`
        }
        GojoMdNx.sendTextWithMentions(m.chat, teks, m)
    }
    break

case 'coffee': {
        if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
                let buttons = [
                        {buttonId: `-coffee`, buttonText: {displayText: '>>'}, type: 1}
                    ]
                    let buttonMessage = {
                        image: { url: 'https://coffee.alexflipnote.dev/random' },
                        caption: `Here is your Coffee...`,
                        footer: `${BotName}`,
                        buttons: buttons,
                        headerType: 4
                    }
                    GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break

 

case 'دمج': {
	   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!q) reply(`*مثال :* ${prefix + command} 🦉+🤣`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await GojoMdNx.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break

case 'جيب_امر':
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (m.isGroup) reply(mess.privateonly)
if (!isCreator) return reply(mess.botowner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("Core.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replay(`${getCase(q)}`)
break


 case 'ايموجي': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply('وين الايموجي ؟')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await GojoMdNx.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `تمم`}, {quoted:m})
})
}
break

case 'حذف': {
    if (!m.quoted) reply(false)
    let { chat, fromMe, id, isBaileys } = m.quoted
    if (!isBaileys) return replay(`ذي مب رسالتي يغبي .`)
    GojoMdNx.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break

 case 'احذف': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!m.quoted) return reply('بااكاا وين الرسالة ؟')
 let { chat, fromMe, id} = m.quoted

const key = {
    remoteJid: m.chat,
    fromMe: false,
    id: m.quoted.id,
    participant: m.quoted.sender
}

await GojoMdNx.sendMessage(m.chat, { delete: key })
 }
 break



 case 'listpc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
 let teks = ` 「  Miku's pm user list  」\n\nTotal ${anu.length} users are using Miku in personal chat.`
 for (let i of anu) {
  teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
 }
 GojoMdNx.sendTextWithMentions(m.chat, teks, m)
 }
 break

 case 'listgc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = ` 「  Miku's group user list  」\n\nTotal ${anu.length} users are using bot in Groups.`
 for (let i of anu) {
  let metadata = await GojoMdNx.groupMetadata(i)
  if (metadata.owner === "undefined") {
  loldd = false
  } else {
  loldd = metadata.owner
  }
  teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
 }
 GojoMdNx.sendTextWithMentions(m.chat, teks, m)
 }
 break

 case 'اختفاء': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let user = global.db.users[m.sender]
 user.afkTime = + new Date
 user.afkReason = args.join(" ")
 replay(`${m.pushName} انه في وضع الاختفاء\nبسبب : ${args.join(" ") ? args.join(" ") : ''}`)
 }
 break


 case 'عكس': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (args.length < 1) return replay(`مثال:\n${prefix}عكس جيرايا`)
 quere = args.join(" ")
 flipe = quere.split('').reverse().join('')
 replay(`\`\`\`「  عكس الكلمات  」\`\`\`\n*الاصلي :*\n${quere}\n*المعكوس :*\n${flipe}`)
 }
 break

case 'منشني': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
GojoMdNx.sendMessage(m.chat, {text:`@${m.sender.split("@")[0]}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
break


case 'متصلين':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (isCreator) return reply(bvl)
 if (!m.isGroup) return replay(mess.grouponly)
 let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
 let online = [...Object.keys(store.presences[id]), botNumber]
 let liston = 1
 GojoMdNx.sendText(m.chat, '  「 *قائمة المتصلين* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
 
case 'هابي_مود': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return replay(`مثال : ${prefix + command} clash royale`)
 yogipw.happymod(args.join(" ")).then(async(res) => {
 teks = '```「 نتائج البحث 」```'
 for (let i of res) {
 teks += `\n\n${i.name}\n`
 teks += `${i.link}`
 }
 let buttons = [
 {buttonId: `-اوامر`, buttonText: {displayText: '✨الاوامر✨'}, type: 1}
 ]
 let buttonMessage = {
 image: {url:res[0].icon},
 jpegThumbnail: Thumb,
 caption: teks,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4
 }
 GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
 })
 }
 break

 case 'اسم': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('اكتب الاسم')
 await GojoMdNx.groupUpdateSubject(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

 case 'وصف': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('اكتب الوصف الي بدك احطه')
 await GojoMdNx.groupUpdateDescription(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

 case 'صورة_قروب': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!quoted) return replay(`رد عالصورة`)
 if (!/image/.test(mime)) return replay(`رد عالصورة`)
 if (/webp/.test(mime)) return replay(`رد عالصورة`)
 let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
 await GojoMdNx.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
 replay(mess.jobdone)
 }
 break

 case 'منشن':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 let teks = `
  
 *: ${args.join(" ") ? args.join(" ") : 'اسفين على الازعاج'}*\n\n`
 for (let mem of participants) {
 teks += `» @${mem.id.split('@')[0]}\n`
 }
 GojoMdNx.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
 }
 break

 case 'بينج':
  
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
if(q) { var Text =`${q}\n*${groupName}*` } else {  var Text = `*${groupName}*`}

let menText = `${Text}\n*منشن من طرف - ${pushname}*\n\n`
for (let memNum of participants) {
    
    if( groupAdmins.includes(memNum.id) === true ) { var emo = '👑'} else { var emo = '❄️'} 
    menText += `${emo} *@${memNum.id.split('@')[0]}*\n`
    //members_id.push(memNum.jid)
}
GojoMdNx.sendMessage(m.chat,{text:menText,mentions: participants.map(a => a.id)},{quoted:m})
break

 case 'مخفي': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 GojoMdNx.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
 }
 break


 case 'رابط': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!isBotAdmins) return replay(mess.botadmin)
 let response = await GojoMdNx.groupInviteCode(m.chat)
 GojoMdNx.sendMessage(m.chat, {text:` *${groupMetadata.subject}* \n\n*الرابط :* \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
 mimetype: "image/jpeg",
 text: `${global.OwnerName}`,
 "forwardingScore": 1000000000,
 isForwarded: true,
 sendEphemeral: true,
 "externalAdReply": {
 "title": `${global.BotName}`,
 "body": `${global.WaterMark}`,
 "previewType": "PHOTO",
 "thumbnailUrl": Thumb,
 "thumbnail": Thumb,
 "sourceUrl": `${global.websitex}`
 }}}, { quoted: m, detectLink: true })
 }
 break


 case 'اعادة': {
       if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!isBotAdmins) return replay(mess.botadmin)
    if (!isAdmins && !isCreator) return replay(mess.useradmin)
    GojoMdNx.groupRevokeInvite(m.chat)
    }
    break


    case 'group': case 'قروب': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     if (args[0] === 'close'){
     await GojoMdNx.groupSettingUpdate(m.chat, 'announcement').then((res) => replay(`تم غلق المجموعة`)).catch((err) => replay(jsonformat(err)))
     } else if (args[0] === 'open'){
     await GojoMdNx.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replay(`تم فتح المجموعة`)).catch((err) => replay(jsonformat(err)))
     } else {
     let buttons = [
     { buttonId: '-group open', buttonText: { displayText: 'فتح' }, type: 1 },
     { buttonId: '-group close', buttonText: { displayText: 'غلق' }, type: 1 }
     ]
     let buttonMessage = {
     image: BotLogo,
     jpegThumbnail: Thumb,
     caption: `*「 ${global.BotName} 」*\n\nغلق = فقط المشرفون يمكنهم التحدث\n\nفتح = يمكن للكل التحدث`,
     footer: `${BotName}`,
     buttons: buttons,
     headerType: 4
     }
     GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
     }
     }
     break

     case 'ترقية': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'promote')
     }
     break

     case 'تخفيض': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'demote')
     }
     break

     case 'طرد':{
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'remove')
     }
     break

     case 'دخل': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'add')
	}
	break


     case 'ادخل': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return replay(mess.botowner)
     if (!args[0]) return replay(`وين الرابط`)
     vdd = args[0]
     let vcc = vdd.split("https://chat.whatsapp.com/")[1]
     if (!vcc) return replay("رابط غير صالح")
     if (isCreator) {
     await GojoMdNx.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("تم")
     } else {
     GojoMdNx.query({
     tag: "iq",
     attrs: {
     type: "get",
     xmlns: "w:g2",
     to: "@g.us"
     },
     content: [{ tag: "invite", attrs: { code: vcc } }]
     }).then(async(res) => {
     sizny = res.content[0].attrs.size
     if (sizny < 20) {
     teks = `يجب ان تتوفر المجموعة على 50 عضو للدخول`
     sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./Assets/pic7.jpg'), `${global.packname}`, `${global.BotName}`, "34612538080@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
     } else if (sizny > 50) {
     await GojoMdNx.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("تم")
     } else {
     replay("خطأ")
     }
     }).catch(_ => _)
     }
     }
     break

  
     case 'صوت': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!args.join(" ")) return reply(`مثال: ${prefix + command} 10`)
     media = await GojoMdNx.downloadAndSaveMediaMessage(quoted, "volume")
     if (isQuotedAudio) {
     rname = getRandom('.mp3')
     exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
     fs.unlinkSync(media)
     if (err) return reply('خطأ')
     jadie = fs.readFileSync(rname)
     GojoMdNx.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
     fs.unlinkSync(rname)
     })
     } else if (isQuotedVideo) {
     rname = getRandom('.mp4')
     exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
     fs.unlinkSync(media)
     if (err) return reply('Error!')
     jadie = fs.readFileSync(rname)
     GojoMdNx.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
     fs.unlinkSync(rname)
     })
     } else {
     reply("ارسل فيديو ولا صوتية")
     }
     }
     break


case 'احسب':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return reply(`*مثال :*\n${prefix}احسب 2*5\n\n`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
reply('خطأ')
} else {
reply(`\`\`\`「 نتائج الحساب 」\`\`\`\n\n*العملية :* ${qsd}\n*الجواب :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break

case 'عام': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.owner)
 GojoMdNx.public = true
 reply('تم')
 GojoMdNx.setStatus(`Mode : Public`)
 }
 break
 
 case 'خاص': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.botowner)
 GojoMdNx.public = false
 reply('البوت نايم 😴')
 GojoMdNx.setStatus(`Mode : Self`)
 }
 break


case 'لصورة': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.quoted) return reply('رد عملصق')
if (!/webp/.test(mime)) return reply(`رد عملصق`)
let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
GojoMdNx.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
break

case 'لفيديو': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return reply('رد عملصق')
 if (!/webp/.test(mime)) return reply(`رد عملصق`)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await GojoMdNx.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Here it is...' } }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break

case 'لصوتية': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`رد على فيديو`)
 if (!m.quoted) return reply(`رد على فيديو`)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 GojoMdNx.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
 }
break


case 'غيف':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return reply('رد عملصق')
 if (!/webp/.test(mime)) return reply(`رد عملصق`)
 reply(mess.wait)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await GojoMdNx.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'تمم' }, gifPlayback: true }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break


 case 'المطور':{
    GojoMdNx.sendContact(m.chat, global.Owner, m)
    }
    break


case 'صورة':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply("عن اي صورة تريد ان ابحث")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `-صورة ${args.join(" ")}`, buttonText: {displayText: 'التالي'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `
الاسم : ${text}`,
footer: `${global.BotName}`,
buttons: buttons,
headerType: 4,

}
GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break

 //FAKEREPLY GROUPINVITE
case 'هل':
    if (isBan) return reply(mess.ban)	 			
    if (isBanChat) return reply(mess.banChat)
					const apa = ['نعم','لا','شرايك انت ؟','اذلف مدري 🗿','هو شوف على حسب 🐧','يمكن','مدري صراحة','اتوقعععع يب 🐧🤣']
					const kah = apa[Math.floor(Math.random() * apa.length)]
GojoMdNx.sendMessage(from, { text: `السؤال : هل ${q}\nالجواب  : ${kah}` }, { quoted: m })

					break

case 'اقدر':
    if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
					const bisa = ['اجل يمكنك ذالك', 'لا كنسل', ' ما في مستحيل','اذا واثق من نفسك يب','ممممم حسب الوضع']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
GojoMdNx.sendMessage(from, { text: `السؤال :اقدر ${q}\nالجواب : ${ga}` }, { quoted: m })

					break
case 'تشبيك':
    if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`منشن شخصين`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100','1000 🤯']
					const te = ra[Math.floor(Math.random() * ra.length)]
GojoMdNx.sendMessage(from, { text: `تشبيك : ${q}\n نسبة الحب : *${te}%*` }, { quoted: m })

					break

                    case 'رياضيات': {
                        if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                        if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`لا تزال هناك جلسات غير منتهية!`)
                        let { genMath, modes } = require('./lib/math')
                        if (!text) return replay(`المستويات: ${Object.keys(modes).join(' | ')}\nمثال: ${prefix}.رياضيات متوسط`)
                        let result = await genMath(text.toLowerCase())
                        GojoMdNx.sendText(m.chat, `*كم تساوي : ${result.soal.toLowerCase()}*\n\nالوقت: ${(result.waktu / 1000).toFixed(2)} ثانية`, m).then(() => {
                            kuismath[m.sender.split('@')[0]] = result.jawaban
                        })
                        await sleep(result.waktu)
                        if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                            console.log("الجواب: " + result.jawaban)
                            reply("انتهى الوقت\nالجواب: " + kuismath[m.sender.split('@')[0]])
                            delete kuismath[m.sender.split('@')[0]]
                        }
                    }
                    break
    //FAKEREPLY GROUPINVITE


case 'تطقيم': {
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
         let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
         let random = anu[Math.floor(Math.random() * anu.length)]
         GojoMdNx.sendMessage(m.chat, { image: { url: random.male }, caption: `للولد` }, { quoted: m })
         GojoMdNx.sendMessage(m.chat, { image: { url: random.female }, caption: `للبنت` }, { quoted: m })
     }
 break


case 'بنتر': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return reply("اكتب اسم")
 try {
 hx.pinterest(args.join(" ")).then(async(res) => {
 imgnyee = res[Math.floor(Math.random() * res.length)]
 let buttons = [
 {buttonId: `-بنتر ${args.join(" ")}`, buttonText: {displayText: 'التالي'}, type: 1}
 ]
 let buttonMessage = {
 image: { url: imgnyee },
 caption:  `الاسم : ` + args.join(" "),
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,
 
 }
 GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
 }).catch(_ => _)
 } catch {
 reply("خطأ")
 }
 }
 break



case 'ملصقي':{
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply(`مثال : ملصقي جيرايا`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
GojoMdNx.downloadAndSaveMediaMessage(quoted, "gifee")
GojoMdNx.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await GojoMdNx.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('الحد الاقصى 9 ثواني')
let media = await quoted.download()
let encmedia = await GojoMdNx.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`رد على صورة او فيديو لا يتعدى 9 ثواني`)
}
}
break

case 'ملصق': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (/image/.test(mime)) {
 let media = await quoted.download()
 let encmedia = await GojoMdNx.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else if (/video/.test(mime)) {
 if ((quoted.msg || quoted).seconds > 11) return reply('الحد الاقصى 9 ثواني')
 let media = await quoted.download()
 let encmedia = await GojoMdNx.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else {
 reply(`رد على صورة او فيديو لا يتعدى 9 ثواني`)
 }
 }
 break


 case 'وظيفتي':
    if (isBan) return reply(mess.ban)	 			
    if (isBanChat) return reply(mess.banChat)
                        const gimana = [`طباخ`, `شرطي`, `مربي`, `فأر تجارب`,`حارس`,`باطل`,`شحاذ`,`معلم`,`استاذ`,`طبيب اسنان`,`رائد فضاء`,`فلكي`,`طبيب`,`مهندس`,`مؤذن`,`محامي`]
                        const ya = gimana[Math.floor(Math.random() * gimana.length)]
    GojoMdNx.sendMessage(from, { text: `وظيفتك هي ${ya}` }, { quoted: m })
    
                        break

case 'akida1': {
    if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://pastebin.com/raw/w1an0pEd')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await GojoMdNx.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break

case 'akida6':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
teks = `Here you go!`
buffer = `https://pastebin.com/raw/w1an0pEd`
GojoMdNx.sendMessage(from, {image:{url}, caption:"Here you go!"}, {quoted:m})
break

case 'اوامر': {
    if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
 title: `منور / ة ${pushname}`,
 description: `📚 كل الاوامر مصنفة حسب خدمتها 📚\n\n`,
 buttonText: "الاوامر",
 listType: "SINGLE_SELECT",
 sections: [
         {
             "title": "قائمة الاوامر",
             "rows": [
                 {
                     "title": "❄️ قـائـمـة الـمـشـرفـيـن ❄️",
                     "rowId": `${prefix}قائمة_المشرفين`
                 },
                 {
                     "title": "❄️ قـائـمـة الـتـحـويـل ❄️",
                     "rowId": `${prefix}قائمة_تحويل`
                     },
                 {
                     "title": "❄️ قـائـمـة الـمـتـعـة ❄️",
                     "rowId": `${prefix}قائمة_المتعة`
                     },
                     {
                     "title": "❄️ قـائـمـة الالـعـاب ❄️",
                     "rowId": `${prefix}قائمة_الالعاب`
                 },
                 {
                     "title": "❄️ قـائـمـة الانـمـي ❄️",
                     "rowId": `${prefix}قائمة_الانمي`
                 },
                 {
                    "title": "❄️ كـل الاوامـر ❄️",
                    "rowId": `${prefix}الاوامر`
                },
             ]
         },

     ],
listType: 1
}
}), {})
GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

case 'اتفق':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/highfive`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} منشن شخص`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} يتفق مع @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		GojoMdNx.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'كف':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/slap`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} منشن شخص`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} يعطي كف ل @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		GojoMdNx.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'عناق':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/hug`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} منشن شخص`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} يعانق @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		GojoMdNx.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break


case 'رقص':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/dance`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} يرقص واحدا`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} يرقص مع @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		GojoMdNx.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'قتل':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/kill`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} منشن شخص`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} يقتل  @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		GojoMdNx.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

//FAKEREPLY TEXT WITH THUMBNAIL

case 'ضرب':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/bonk`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} منشن شخص `
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} يضرب  @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		GojoMdNx.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'بكاء':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} منشن شخص `
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} يبكي بسبب  @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		GojoMdNx.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'توبيخ':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/bully`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} منشن شخص `
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} يوبخ  @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		GojoMdNx.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break


//FAKEREPLY TEXT WITH THUMBNAIL

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



case 'ليريكس': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
if (!text) return reply(`اكتب اسم اغنية`)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
*العنوان :* ${result.title}
*كاتب الاغنية :* ${result.author}
*الرابط :* ${result.link}

*ليريكس :* ${result.lyrics}

`.trim())
}
break


case 'اطلع': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
                    if (!isCreator) return replay(`${mess.botowner}`)
                    await GojoMdNx.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
                break

case 'الاوامر':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const helpmenu = `السلام عليكم *${pushname}* انرت/ي,

🔰 استخدم :  -  للاوامر


⋄═──═◞🛡️ قائمة المشرفين 🛡️◟━──━⋄

⧉ -منشن
⧉ منشن جماعي لكل الاعضاء

⧉ -بينج
⧉ منشن جماعي مختلف
 
⧉ -مخفي
⧉ منشن مخفي لكل الاعضاء 
 
⧉ -احذف
⧉ حذف رسالة عضو 

⧉ -حذف
⧉ حذف رسالة البوت 
 
⧉ -رابط
⧉ جلب رابط القروب 

⧉ -اعادة
⧉ حذف رابط القروب 
 
⧉ -ترقية
⧉ ترقية عضو لمشرف 
 
⧉ -تخفيض
⧉ تخفيض مشرف لعضو 

⧉ -اسم
⧉ تغيير اسم القروب 
 
⧉ -وصف
⧉ تغيير وصف القروب 

⧉ -صورة_قروب
⧉ تغيير صورة قروب 

⧉ -قروب
⧉ غلق وفتح قروب 
 
⧉ -طرد
⧉ طرد شخص من القروب 
 
⧉ -دخل
⧉ ادخال شخص للقروب 

⧉ -اطلع
⧉ خروج البوت 


⋄═──═◞🎆 قائمة التحويل 🎆◟━──━⋄

⧉ -مـلـصـق
⧉ انشاء ملصقات عادية ومتحركة 
 
⧉ -ملصقي
⧉ انشاء ملصق بحقوقك 
⧉ مـلاحـظـه ، احيانا لايعمل الامر 
 
⧉ -ايموجي
⧉ تحويل ايموجي لصورة 
 
⧉ -دمج
⧉ دمج اثنين من الاموجي 

⧉ -صوت
⧉ رفع وتخفيض مستوى صوت 
 
⧉ -لصورة
⧉ تحويل ملصق عادي لصورة 
 
⧉ -لفيديو
⧉ تحويل ملصق متحرك لفيديو 
 
⧉ -لصوتية
⧉ تحويل فيديو لصوتية 
 
⧉ -غيف
⧉ تحويل ملصق لغيف 
 

⋄═──═◞☃️ قائمة المتعة ☃️◟━──━⋄

⧉ -هل
⧉ سؤال للبوت
⧉ مثال : هل انا محنك؟ 
 
⧉ -اقدر
⧉ سؤال للبوت 
⧉ مثال :  اقدر اصير مشرف؟ 
 
⧉ -تشبيك
⧉ منشن ثنين وشف نسبة الحب بينهم (مزح) 
 
⧉ -وظيفتي
⧉ اعرف وظيفتك مستقبلا 

⧉ -منشني
⧉ البوت يمنشنك 
 

⋄═──═◞🎮 قائمة الالعاب 🎮◟━──━⋄

⧉ -اكس_او
⧉ العب مع صديقك اكس او 
 
⧉ -رياضيات
⧉ حل عمليات حسابية 
 
⧉ -احسب
⧉ البوت يحل عملية حسابية 
 
⧉ -عكس
⧉ عكس كلمة او جملة 

⧉ -احزر
⧉ لا تتوفر بعد 
 
⧉ -كت
⧉ لا تتوفر بعد 


⋄═──═◞🔍 قائمة البحث 🔎◟━──━⋄

⧉ -مقطع
⧉ البحث عن مقطع أغنية 
 
⧉ -فلم
⧉ البحث عن معلومات فلم 
 
⧉ -خلفية
⧉ البحث عن خلفية انمي 
 
⧉ -صورة
⧉ البحث عن صور عشوائية 
⧉ اكتب اسم بالانجليزي عشان ميجيب العيد 

⧉ -تطقيم
⧉ جلب تطقيمات 
 
⧉ -بنتر
⧉ بحث عن صور بنتريست 
 
⧉ -ليريكس
⧉ جلب كتابة اي اغنية 
 

⋄═──═◞🔰 قائمة العضو 🔰◟━──━⋄

⧉ -بروفايل
⧉ معرفة معلوماتك 
 
⧉ -اختفاء
⧉ اترك سبب ذاهبك 
 
⧉ -قروباتي
⧉ روابط قروبات الانمي 
 
⧉ -مساعدة
⧉ رابط قروب البوت للمساعدة 

⧉ -المطور
⧉ معرفة مطور البوت 
 

⋄═──═◞🤖 بوت جيرايا 🤖◟━──━⋄

 🔰 اذا هناك أخطاء فالاوامر كلم  -المطور`
     
 let buttonshelpm = [
    {buttonId: `-المطور`, buttonText: {displayText: '🤖 مطور البوت 🤖'}, type: 1}
    ]
                let buttonMessage = {
                    file: GojoMdNx.sendMessage(m.chat,{video:fs.readFileSync('./system/GojoMdNx.mp4'),gifPlayback:true,caption:helpmenu},{quoted:m}),
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                }
            GojoMdNx.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

 case 'قائمة_المشرفين':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const helpmenu = `السلام عليكم *${pushname}* انرت/ي,


 ⋄═──═◞🛡️ قائمة المشرفين 🛡️◟━──━⋄

⧉ -منشن
⧉ منشن جماعي لكل الاعضاء 
 
⧉ -مخفي
⧉ منشن مخفي لكل الاعضاء 
 
⧉ -احذف
⧉ حذف رسالة عضو و البوت 
 
⧉ -رابط
⧉ جلب رابط القروب 

⧉ -اعادة
⧉ حذف رابط القروب 
 
⧉ -ترقية
⧉ ترقية عضو لمشرف 
 
⧉ -تخفيض
⧉ تخفيض مشرف لعضو 

⧉ -اسم
⧉ تغيير اسم القروب 
 
⧉ -وصف
⧉ تغيير وصف القروب 

⧉ -صورة_قروب
⧉ تغيير صورة قروب 

⧉ -قروب
⧉ غلق وفتح قروب 
 
⧉ -طرد
⧉ طرد شخص من القروب 
 
⧉ -دخل
⧉ ادخال شخص للقروب 

⧉ -اطلع
⧉ خروج البوت 
 
⋄═──═◞🛡️ قائمة المشرفين 🛡️◟━──━⋄


 🔰 اذا هناك أخطاء فالاوامر كلم  -المطور`
     
 let buttonshelpm = [
    {buttonId: `-المطور`, buttonText: {displayText: '🤖 مطور البوت 🤖'}, type: 1}
    ]
                let buttonMessage = {
                    file: GojoMdNx.sendMessage(m.chat,{video:fs.readFileSync('./system/GojoMdNx.mp4'),gifPlayback:true,caption:helpmenu},{quoted:m}),
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                }
            GojoMdNx.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'قائمة_تحويل':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const helpmenu = `السلام عليكم *${pushname}* انرت/ي,


 ⋄═──═◞🎆 قائمة التحويل 🎆◟━──━⋄

 ⧉ -مـلـصـق
 ⧉ انشاء ملصقات عادية ومتحركة 
  
 ⧉ -ملصقي
 ⧉ انشاء ملصق بحقوقك 
 ⧉ مـلاحـظـه ، احيانا لايعمل الامر 
  
 ⧉ -ايموجي
 ⧉ تحويل ايموجي لصورة 
  
 ⧉ -دمج
 ⧉ دمج اثنين من الاموجي 
 
 ⧉ -صوت
 ⧉ رفع وتخفيض مستوى صوت 
  
 ⧉ -لصورة
 ⧉ تحويل ملصق عادي لصورة 
  
 ⧉ -لفيديو
 ⧉ تحويل ملصق متحرك لفيديو 
  
 ⧉ -لصوتية
 ⧉ تحويل فيديو لصوتية 
  
 ⧉ -غيف
 ⧉ تحويل ملصق لغيف 
  
 ⋄═──═◞🎆 قائمة التحويل 🎆◟━──━⋄


 🔰 اذا هناك أخطاء فالاوامر كلم  -المطور`
     
 let buttonshelpm = [
    {buttonId: `-المطور`, buttonText: {displayText: '🤖 مطور البوت 🤖'}, type: 1}
    ]
                let buttonMessage = {
                    file: GojoMdNx.sendMessage(m.chat,{video:fs.readFileSync('./system/GojoMdNx.mp4'),gifPlayback:true,caption:helpmenu},{quoted:m}),
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                }
            GojoMdNx.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'قائمة_المتعة':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const helpmenu = `السلام عليكم *${pushname}* انرت/ي,

 🔰 الاوامر كلها مزح نرجو عدم التقلق

 ⋄═──═◞☃️ قائمة المتعة ☃️◟━──━⋄
 ⧉ -هل
 ⧉ سؤال للبوت
 ⧉ مثال : هل انا محنك؟ 
  
 ⧉ -اقدر
 ⧉ سؤال للبوت 
 ⧉ مثال :  اقدر اصير مشرف؟ 
  
 ⧉ -تشبيك
 ⧉ منشن ثنين وشف نسبة الحب بينهم (مزح)
 
 ⧉ -رياكشنات
 ⧉ منشن شخص
  
 ⧉ -وظيفتي
 ⧉ اعرف وظيفتك مستقبلا 
 
 ⧉ -منشني
 ⧉ البوت يمنشنك 
  
 ⋄═──═◞☃️ قائمة المتعة ☃️◟━──━⋄


 🔰 اذا هناك أخطاء فالاوامر كلم  -المطور`
     
 let buttonshelpm = [
    {buttonId: `-المطور`, buttonText: {displayText: '🤖 مطور البوت 🤖'}, type: 1}
    ]
                let buttonMessage = {
                    file: GojoMdNx.sendMessage(m.chat,{video:fs.readFileSync('./system/GojoMdNx.mp4'),gifPlayback:true,caption:helpmenu},{quoted:m}),
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                }
            GojoMdNx.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

 case 'قائمة_الالعاب':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const helpmenu = `السلام عليكم *${pushname}* انرت/ي,


 ⋄═──═◞🎮 قائمة الالعاب 🎮◟━──━⋄

 ⧉ -اكس_او
 ⧉ العب مع صديقك اكس او 
  
 ⧉ -رياضيات
 ⧉ حل عمليات حسابية 
  
 ⧉ -احسب
 ⧉ البوت يحل عملية حسابية 
  
 ⧉ -عكس
 ⧉ عكس كلمة او جملة 
 
 ⧉ -احزر
 ⧉ لا تتوفر بعد 
  
 ⧉ -كت
 ⧉ لا تتوفر بعد 
  
 ⋄═──═◞🎮 قائمة الالعاب 🎮◟━──━⋄


 🔰 اذا هناك أخطاء فالاوامر كلم  -المطور`
     
 let buttonshelpm = [
    {buttonId: `-المطور`, buttonText: {displayText: '🤖 مطور البوت 🤖'}, type: 1}
    ]
                let buttonMessage = {
                    file: GojoMdNx.sendMessage(m.chat,{video:fs.readFileSync('./system/GojoMdNx.mp4'),gifPlayback:true,caption:helpmenu},{quoted:m}),
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                }
            GojoMdNx.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'قائمة_الانمي':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const helpmenu = `السلام عليكم *${pushname}* انرت/ي,

 🔰 ملاحضة : 
 مقطع ، فلم ، خلفية - هذه الاوامر اكتب الاسم بالانجليزي
 مثال : -خلفية jiraya  ، -فلم spiderman  ، -مقطع ost Naruto

 ⋄═──═◞🌀 قائمة الانمي 🌀◟━──━⋄

 ⧉ -مقطع
 ⧉ البحث عن مقطع أغنية 
  
 ⧉ -فلم
 ⧉ البحث عن معلومات فلم 
  
 ⧉ -خلفية
 ⧉ البحث عن خلفية انمي 
  
 ⧉ -صورة
 ⧉ البحث عن صور عشوائية 
 ⧉ اكتب اسم بالانجليزي عشان ميجيب العيد 
 
 ⧉ -تطقيم
 ⧉ جلب تطقيمات 
  
 ⧉ -بنتر
 ⧉ بحث عن صور بنتريست 
  
 ⧉ -ليريكس
 ⧉ جلب كتابة اي اغنية 
  
 
 ⋄═──═◞🌀 قائمة الانمي 🌀◟━──━⋄


 🔰 اذا هناك أخطاء فالاوامر كلم  -المطور`
     
 let buttonshelpm = [
    {buttonId: `-المطور`, buttonText: {displayText: '🤖 مطور البوت 🤖'}, type: 1}
    ]
                let buttonMessage = {
                    file: GojoMdNx.sendMessage(m.chat,{video:fs.readFileSync('./system/GojoMdNx.mp4'),gifPlayback:true,caption:helpmenu},{quoted:m}),
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                }
            GojoMdNx.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'قائمة_العضو':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const helpmenu = `السلام عليكم *${pushname}* انرت/ي,


 ⋄═──═◞🔰 قائمة العضو 🔰◟━──━⋄

 ⧉ -بروفايل
 ⧉ معرفة معلوماتك 
  
 ⧉ -اختفاء
 ⧉ اترك سبب ذاهبك 
  
 ⧉ -قروباتي
 ⧉ روابط قروبات الانمي 
  
 ⧉ -مساعدة
 ⧉ رابط قروب البوت للمساعدة 
 
 ⧉ -المطور
 ⧉ معرفة مطور البوت 
  
 
 ⋄═──═◞🔰 قائمة العضو 🔰◟━──━⋄


 🔰 اذا هناك أخطاء فالاوامر كلم  -المطور`
     
 let buttonshelpm = [
    {buttonId: `-المطور`, buttonText: {displayText: '🤖 مطور البوت 🤖'}, type: 1}
    ]
                let buttonMessage = {
                    file: GojoMdNx.sendMessage(m.chat,{video:fs.readFileSync('./system/GojoMdNx.mp4'),gifPlayback:true,caption:helpmenu},{quoted:m}),
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                }
            GojoMdNx.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break



case '': case 'help': case 'menu':
    if(isCmd){
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

      mikupic ='https://i.ibb.co/4WH9MHJ/th.jpg'
    
        
      const needhelpmenu = `السلام عليكم ${pushname} تريد الاوامر ؟ اذا لديك واتساب عادي اكتب -الاوامر  ،  واذا عندك واتساب بلس او معدل اكتب -اوامر  للحصول على الاوامر وشرحها`
     
         let butRun = [
                {buttonId: `-اوامر`, buttonText: {displayText: 'اوامر'}, type: 1}
                ]
                let buttonMessage = {
                    file: GojoMdNx.sendMessage(m.chat,{video:fs.readFileSync('./system/GojoMdNx.mp4'),gifPlayback:true,caption:needhelpmenu},{quoted:m}),
                    caption: needhelpmenu,
                    footer: `${global.BotName}`,
                    buttons: butRun,
                    headerType: 4
                }
            GojoMdNx.sendMessage(m.chat,buttonMessage,{quoted:m})
                }
break
     
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    GojoMdNx.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
