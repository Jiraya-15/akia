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


	    case 'اختفاء': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} انه في وضع الاختفاء${text ? ': ' + text : ''}`)
            }
            break	

        case 'اكس_او': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`انت فاللعبة حاليا`)
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
            reply('ننتضر يجي لاعب' + (text ? `  ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'حذف_اكس': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            GojoMdNx.sendText(m.chat, `تم حذف الشوط`, m)
            } else if (!this.game) {
            reply(`a`)
            } else reply('?')
            } catch (e) {
            reply('A')
            }
            }
            break

            case 'attp': {
                	 			
                
                           if (!text) reply(`Use ${prefix}attp hello\n*Example : ${prefix + command} ${ownername}*` )
                           await GojoMdNx.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/attp?teks=${text}`, 'Xeon', 'Op', m, {asSticker: true}).catch((err) => reply(mess.error))
                         }
                         break

            break
            case 'قل':
            if (!m.quoted && !text) return replay(`اكتب وش تبي اقول ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
		
		
            case 'رياضيات': {
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


            case 'شبيهي': {
                if (isBan) return reply(mess.banned)
                
            if (!m.isGroup) return replay(`${mess.grouponly}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫 شبيهك هو
            @${me.split('@')[0]} 👀 @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
            { buttonId: '👀', buttonText: { displayText: 'لا اتفق' }, type: 1 }
            ]
            await GojoMdNx.sendButtonText(m.chat, buttons, jawab, GojoMdNx.user.name, m, {mentions: ments})
            }
            break
            case 'هل':
					const apa = ['نعم','لا','شرايك انت ؟','اذلف مدري 🗿','هو شوف على حسب 🐧','يمكن','مدري صراحة','اتوقعععع يب 🐧🤣']
					const kah = apa[Math.floor(Math.random() * apa.length)]
GojoMdNx.sendMessage(from, { text: `السؤال : هل ${q}\nالجواب  : ${kah}` }, { quoted: m })

					break
case 'اقدر':
					const bisa = ['اجل يمكنك ذالك', 'لا كنسل', ' ما في مستحيل','اذا واثق من نفسك يب','ممممم حسب الوضع']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
GojoMdNx.sendMessage(from, { text: `السؤال :اقدر ${q}\nالجواب : ${ga}` }, { quoted: m })

					break
case 'تشبيك':
				if (!text) return replay(`منشن شخصين`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100','1000 🤯']
					const te = ra[Math.floor(Math.random() * ra.length)]
GojoMdNx.sendMessage(from, { text: `تشبيك : ${q}\n نسبة الحب : *${te}%*` }, { quoted: m })

					break

            case 'ادخل': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`وين الرابط ؟`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`خطأ فالرابط`)
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await GojoMdNx.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'اطلع': {
                if (!isCreator) return replay(`${mess.owner}`)
                await GojoMdNx.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'حقوق': {
               if (!isCreator) return replay(`${mess.owner}`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`تم تغيير الحقوق`)
            }
            break
	case 'طرد': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'remove')
	}
	break
	case 'دخل': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'add')
	}
	break
	case 'ترقية': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'تخفيض': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'بلوك': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'فك_بلوك': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'aaاسم': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`وين النص ؟`)
                await GojoMdNx.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break

            case 'ملصقي': case 'زرف': {
             if (!args.join(" ")) return reply(`مثال :\nملصقي ${global.author}|${global.packname}`)
             const swn = args.join(" ")
             const pcknm = swn.split("|")[0];
             const atnm = swn.split("|")[1];
             if (m.quoted.isAnimated === true) {
             GojoMdNx.downloadAndSaveMediaMessage(quoted, "gifee")
             GojoMdNx.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
             } else if (/image/.test(mime)) {
             let media = await quoted.download()
             let encmedia = await GojoMdNx.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
             await fs.unlinkSync(encmedia)
             } else if (/video/.test(mime)) {
             if ((quoted.msg || quoted).seconds > 11) return reply('الحق الاقصى 10 ثواني')
             let media = await quoted.download()
             let encmedia = await GojoMdNx.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
             await fs.unlinkSync(encmedia)
             } else {
             reply(`رد عصورة ولا ملصق`)
             }
             }
             break

             case 'حقيقة':
              const dare =[
                "هل حدث غدر في حياتك قبل ذلك ؟",
                "هل تتميز بكونك شخص متسامح أم لا؟",
                "ما هي عيوبك؟",
                "هل حدث في يوم أنك تعرضت للخيانة ؟",
                "ما هي القرارات في حياتك التي لم تندم عليها ؟",
                "هل تمتلك شخصية متميزة في حياتك ؟",
                "من هو الشخص الذي يلزم تفكيرك ؟",
                "من الشخص المفضل لديك الذي ترغب اصطحابه في نزهة ؟",
                  "هل لديك الشجاعة أن تتدخل عندما ترى حادثًا أمامك ؟",
                "من هو الشخص الذي لا تتمكن من رفض طلبه ؟",
                "كيف يمكنك أن تظهر إعجابك بشخص ما ؟",
                "هل تمتلك شخصية متناقضة ؟",
                "في أي موقف تعرضت للإحراج الشديد ؟",
                "هل تعمل بإتقان أو لا تحب العمل ؟    ",
                "هل تتذكر موقف أبكاك أمام الناس دون أن تشعر ؟",
                "هل لديك تجربة سابقة تتمنى تكرارها ؟",
                "لو أحضرت لك ورقة بيضاء ماذا سترسم لتعبر عن حالتك الآن ؟",
                "هل أنت من الشخصيات العدوانية ؟",
                "هل سبق لك وخططت لحرب من أجل شخص ؟",
                "ما هي الكلمات التي تشعرك بالارتباك",
                "من هو مثلك الأعلى ؟",
                "من هو الشخص الذي تظهر أمامه نقطة ضعفك ؟",
                "منشن الشخص الذي تحبه",
                "منشن الشخص الذي تكرهه",
                "هل تحب المطور جيرايا؟",
                "هل تحب السيسي 🤣؟",
                "كم مرة ضحكت اليوم؟",
                "هل قرأت القرآن اليوم؟ اذا كان جواب لا، انصحك تروح تقرأه فهو مريح",
                "هل صليت؟ اذا كان لا قم صلي الان والله يتقبل",
                "هل تحب خامس منشن؟",
                "هل تحب اول منشن؟",
                "اذا كنت قائد المجموعه ماذا ستقدم كقائد؟",
                "اوصف قائد المجموعه بالنسبة لك؟",
                "هل مشرفين المجموعه مقصرين؟",
                "هل أنت من الأشخاص الاجتماعيين أو الانطوائيين ؟",
                "ماذا يكون رد فعلك عندما يطلب منك شريك حياتك الإنفصال ؟",
                "هل من الممكن أن تعبر عن حياتك بكلمة واحدة ؟",
                "ما هو الخبر السيئ لك ؟",
                "هل قمت قبل ذلك بالكذب على شخص من خلال الاحتيال عليه ؟",
                "مالذي يشعرك بالخوف ؟    ",
                "ما هي مقدار ثقتك في نفسك ؟",
                "هل أنت فخوراً بوالديك ؟",
                "هل يمكن أن تستعر من والدك بسبب عمله ؟",
                "هل لديك شخص إذا خرج من حياتك لا تشعر بالندم ؟",
                "هل سبق لك أن تحدثت بكلام تندم عليه الآن ؟",
                "ما هي الشخصية التي أثرت في شخصيتك ؟",
                "هل لديك رغبة تملك كل شيء ؟",
                "هل أنت راضٍ عن نفسك ؟",
                "ما هو الشيء الذي يغضبك بشدة ؟",
                "هل تمتلك نفسه الحب لكل إخوتك ؟",
                "هل سبق لك ودمرت حياة أحد أقاربك ؟",
                "من هو الشخص الذي تأتمنه على كل أسرارك ؟",
                "هل تحكم على الأشخاص بسبب ملابسهم ؟",
                "ماذا يلفت إنتباهك ؟",
                "هل تمتلك شخصية صادقة أم منافقة ؟",
                "هل يوجد شخص متعلق به بشكل لا يمكن وصفه ؟",
                "هل وجهت تحديد لأي شخص من قبل بسبب تصرفاته ؟",
                "هل يتملكك شعور بالسعادة ؟",
                "من الشخص الذي رحيله عن الحياة يشعرك بالألم ؟",
                "هل خذلك أحدًا من قبل ؟",
                "هل أنت إنسان سلبي أم إيجابي .",
                "هل استخدمت كلمة أحبك من قبل ؟",
                "ما هو مستوى تعليمك ؟",
                "ما هو الإقرار الذي يمكن أن تتخذه على نفسك ؟",
                "هل من الممكن أن يتحول صديقك إلى حبيب ؟",
                "هل سبق وتعرضت للظلم من قبل ؟",
                "هل سبق وكذبت من قبل ؟",
                "من الشخص الأغلى في حياتك ؟",
                "هل سبق لك وقمت بتناول المخدر والحشيش ؟",
                "هل ندمتي على حب شخص من قبل ؟",
                "ما الموقف الصعب الذي تعرضتي له ولن تنسيه أبدًا ؟",
                "هل هناك شخص يطاردك .",
                 "هل راودك بالرغبة في الموت ؟",
                 "هل سبق لك و قمت بتوبيخ نفسك ؟",
                 "هل تفضل الزوجة العاملة أو الزوجة التي تجلس في المنزل ؟",
                 "وجه كلمة للمرأة التي ترتدي ملابس خادشة للحياء ؟",
                 "هل تصدر أحكامًا على المرأة بسبب ملابسها ؟",
                 "كم مرة تنازلت عن مبادئك بسبب شخص ؟",
                 "هل تؤمن بالحب من النظرة الأولى ؟     "
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              GojoMdNx.sendMessage(from, { image: buffer, caption: ''+ xeondare }, {quoted:m})
              break
                
          case 'aaوصف': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`وين النص ؟`)
                await GojoMdNx.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'حطه': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!quoted) return replay(`رد عالصورة ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`رد عالصورة ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`رد عالصورة ${prefix + command}`)
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                await GojoMdNx.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'ق_صورة': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!quoted) return replay(`رد عالصورة ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`رد عالصورة ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`رد عالصورة ${prefix + command}`)
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                await GojoMdNx.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break

                case 'منشن1':
  
                    if (!m.isGroup) return replay(`${mess.group}`)
                    if (!isAdmins) return replay(`${mess.admin}`)
if(q) { var Text =`📌 * ${q}*\n*🍁  ${groupName}*` } else {  var Text = `*${groupName}*`}

let menText = `${Text}\n*منشن من طرف ${pushname}*`
for (let memNum of participants) {
    
    if( groupAdmins.includes(memNum.id) === true ) { var emo = '👑'} else { var emo = '❄️'} 
    menText += `${emo} *@${memNum.id.split('@')[0]}*\n`
    //members_id.push(memNum.jid)
}
GojoMdNx.sendMessage(m.chat,{text:menText,mentions: participants.map(a => a.id)},{quoted:m})
break

            case 'منشن': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins) return replay(`${mess.admin}`)
let teks = ` الــمــنــشــن الــجــمــاعــي
 
 ${q ? q : 'اسفين عالازعاج'}\n\n`
                for (let mem of participants) {
                teks += `💠 @${mem.id.split('@')[0]}\n`
                }
                GojoMdNx.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'فعالية': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) return replay(`${mess.admin}`)
            GojoMdNx.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break

               case 'قروب': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === 'close'){
                    await GojoMdNx.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`تم اغلاق الشات`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await GojoMdNx.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`تم فتح الشات`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'close' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, `اغلاق وفتح المجموعة`, GojoMdNx.user.name, m)

             }
            }
            break


            case 'مضاد': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "open") {
                if (db.data.chats[m.chat].antilink) return reply(`Activated`)
                db.data.chats[m.chat].antilink = true
                reply(`Antilink Active !`)
                } else if (args[0] === "close") {
                if (!db.data.chats[m.chat].antilink) return reply(`Deactivated`)
                db.data.chats[m.chat].antilink = false
                reply(`Antilink Inactive !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink open', buttonText: { displayText: 'تفعيل' }, type: 1 },
                        { buttonId: 'antilink close', buttonText: { displayText: 'تعطيل' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, `مضاد الروابط`, GojoMdNx.user.name, m)
                }
             }
             break
             case 'بان': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Previously Active`)
                db.data.chats[m.chat].mute = true
                reply(`${GojoMdNx.user.name} تم حضر الاعضاء من استخدام البوت`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Previously Inactive`)
                db.data.chats[m.chat].mute = false
                reply(`${GojoMdNx.user.name} يمكن للاعضاء استخدام البوت`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'on' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'off' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, `اختر اذا بدك الاعضاء يستخدمون البوت او لا`, GojoMdNx.user.name, m)
                }
             }
             break
            case 'رابط': {
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!m.isGroup) return replay(`${mess.group}`)
                let response = await GojoMdNx.groupInviteCode(m.chat)
                GojoMdNx.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'حذف': {
                if (!m.quoted) reply(false)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replay(`ذي مب رسالتي يغبي .`)
                GojoMdNx.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'نشر': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`وين النص ؟`)
                let getGroups = await GojoMdNx.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'قروب البوت',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'قروب الانمي',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'المطور',
                                    id: 'owner'
                                }
                            }]
                      let txt = `「 رسالة لكل المجموعات 」\n\n${text}`
                      GojoMdNx.send5ButImg(i, txt, GojoMdNx.user.name, global.thumb, btn)
                    }
                reply(`تم النشر في ${anu.length} قروب`)
            }
            break

            case 'شات_الخاص': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `مجموع الدردشات : ${anu.length} \n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `💫 الاسم : ${nama}\n💫 منشنه : @${i.split('@')[0]}\n💫 رابطه : https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 GojoMdNx.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'قروبات': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `مجموع القروبات : ${anu.length} \n\n`
                 for (let i of anu) {
                     let metadata = await GojoMdNx.groupMetadata(i)
                     teks += `💫 الاسم : ${metadata.subject}\n💫 مؤسس القروب : @${metadata.owner.split('@')[0]}\n💫 ايدي القروب : ${metadata.id}\n💫 تاريخ التاسيس : ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n💫 الاعضاء : ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 GojoMdNx.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'متصلين': {
                    if (!isAdmins) return replay(`${mess.admin}`)
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    GojoMdNx.sendText(m.chat, 'قائمة المتصلين:\n\n' + online.map(v => '💠 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'ملصق': {
            if (!quoted) return replay(`رد عصورة ب ${prefix + command}`)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await GojoMdNx.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('الحد الاقصى 10 ثواني')
                let media = await quoted.download()
                let encmedia = await GojoMdNx.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                reply(`ارسل صورة ${prefix + command}\nاو فيديو لا يتجاوز 10 ثواني`)
                }
            }
            break

            case 'دمج': {
	        if (!text) return replay(`مثال : ${prefix + command} 😅+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await GojoMdNx.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'لصورة': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) reply(`وين الملصق الي تبي احول ؟ *${prefix + command}*`)
                reply(mess.wait)
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) reply(err)
                    let buffer = fs.readFileSync(ran)
                    GojoMdNx.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'لفيديو': {
                if (!quoted) reply(`Reply Image`)
                if (!/webp/.test(mime)) return replay(`رد عالملصق *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await GojoMdNx.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'لصوتية': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
            if (!quoted) return reply(`وين الفيديو ؟`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            GojoMdNx.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'غيف': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) return reply(`رد عالملصق *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await GojoMdNx.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break

            case 'حذف_خلفية': {
	    if (!quoted) return replay(`رد عالصورة`)
	    if (!/image/.test(mime)) return replay(`رد عالصورة`)
	    if (/webp/.test(mime)) return replay(`رد عالصورة `)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await GojoMdNx.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    GojoMdNx.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
                case 'صورة': {
                    let gis = require('g-i-s')
                    gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                            let buttonMessage = {
                                image: { url: images },
                                footer: GojoMdNx.user.name,
                                buttons: buttons,
                                headerType: 4
                            }
                            GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
                    })
                    }
                    break

            case 'بنتر': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                GojoMdNx.sendMessage(m.chat, { quoted: m })
            }

	    case 'تطقيم': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                GojoMdNx.sendMessage(m.chat, { image: { url: random.male }, caption: ` للولد 🙎🏻‍♂️` }, { quoted: m })
                GojoMdNx.sendMessage(m.chat, { image: { url: random.female }, caption: ` للبنت 🙎🏻‍♀️` }, { quoted: m })
            }
	    break

        case 'بروفايل':
    
    
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
    {buttonId: `شبيهي`, buttonText: {displayText: 'شبيهي'}, type: 1}
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

case 'cry':{

    
    
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
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
     musers =`@${m.sender.split("@")[0]} ${command}ed with themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed with @${users.split("@")[0]} `

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

case 'nom':{

    
    
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
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
     musers =`@${m.sender.split("@")[0]} is eating with themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} is eating with @${users.split("@")[0]} `

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
     musers =`@${m.sender.split("@")[0]} يعانق الريح 😞👎`
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
     musers =`@${m.sender.split("@")[0]} يرقص وحيدا`
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

case 'قتل': {

    
    
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
     musers =`@${m.sender.split("@")[0]} يقتل نفسه`
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



case 'yeet':
case 'wink': case 'smile':
case 'wave': case 'blush': case 'smug': case 'glomp':
case 'cringe': case 'highfive':{

    
    
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
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
     musers =`@${m.sender.split("@")[0]} ${command}ed at themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed at @${users.split("@")[0]} `

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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

case 'مساعدة':
    
    reply(`*ادخل قروب البوت للمساعدة:* https://chat.whatsapp.com/KLPZQqWM8fs6UCwpYCRVNs`)
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
https://chat.whatsapp.com/KZmt3H89QxQHzUKdr5dbN0`)
break

case 'خلفية': {
    
    
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

        case 'ايموجي': {
            
        
        if (!args.join(" ")) return reply('وين الايموجي ؟')
        emoji.get(args.join(" ")).then(async(emoji) => {
        let mese = await GojoMdNx.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `تمم`}, {quoted:m})
        })
        }
        break

        case 'احذف': {
            
         
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

         case 'عكس': {
            
         
         if (args.length < 1) return replay(`مثال:\n${prefix}عكس جيرايا`)
         quere = args.join(" ")
         flipe = quere.split('').reverse().join('')
         replay(`\`\`\`「  عكس الكلمات  」\`\`\`\n*الاصلي :*\n${quere}\n*المعكوس :*\n${flipe}`)
         }
         break

         case 'احسب':{
            
         
         if (args.length < 1) return reply(`*مثال :*\n${prefix}احسب 2*5\n\n`)
         let qsd = args.join(" ")
         if (typeof mathjs.evaluate(qsd) !== 'number') {
         reply('خطأ')
         } else {
         reply(`\`\`\`「 نتائج الحساب 」\`\`\`\n\n*العملية :* ${qsd}\n*الجواب :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
         }
         }
         break

         case 'akida':{
            
            
              
         const helpmenu = `Konichiwa *${pushname}* Senpai,
        
        I am *Miku Nakano*, a bot developed by *Fantox*.
        
        🔰 My prefix is:  ${prefix}
        
        Here's the list of my Commands.
         
        
        
         *━━━━━━〈  🎆 Core 🎆  〉━━━━━━*
        
        stalk, profile, help, delete, deleteall, listgc, listpc, welcome, support, repo, script 
         
         *━━━━━━〈  🎀 Owner 🎀  〉━━━━━━*
        
        self, public, ban, bangroup, bye, join, bye, block, unblock, broadcast 
        
         *━━━━━━〈  ⭕ Group ⭕  〉━━━━━━*
        
        promote, demote, revoke, remove, tagall, hidetag, groupsetting, grouplink, setgcpp, setname, setdesc, group, nsfw 
        
         *━━━━━━〈  ➰ Anti Link ➰  〉━━━━━━*
         
        antilinkgc, antilinktg, antilinktt, antilinkytch, antilinkytvid, antilinkig, antilinkfb, antilinktwit, antilinkall, antiwame
        
         *━━━━━━〈  🔍 Search 🔍  〉━━━━━━*
        
        play, song, yts, lyrics, google, gimage, pinterest, image, movie, wallpaper, searchgc, happymod, wikimedia, ringtone, anime, animestory, manga, ringtone   
        
         *━━━━━━〈  🔰 Convert 🔰  〉━━━━━━*
        
        sticker, toimg, tovideo, togif , steal, stickermeme, emojimix, tourl, tomp3, toaudio
        
         *━━━━━━〈  🔉 Audio 🔉  〉━━━━━━*
        
        bass, tempo, blown, deep, earrape, fast, fat, nightcore, reverse, robot, slow, squirrel
        
         *━━━━━━〈  📍 Reactions 📍  〉━━━━━━*
        
        bonk, cry, bully, cuddle, hug, kiss, lick, pat, smug, yeet, blush, smile, wave, highfive, handhold, nom, glomp, bite, slap, kill, happy, wink, poke, dance, cringe
        
         *━━━━━━〈  🌌 Downloader 🌌  〉━━━━━━*
        
        play, ytmp3, ytmp4, ytvideo, mediafire, instagram, igtv, facebook, fbmp3, twitter, twittermp3, tiktok, tiktokaudio, tiktoknowm, mediafire  
        
         *━━━━━━〈  🈴 Weeb 🈴  〉━━━━━━*
        
        crosplay, waifu, loli, neko, ppcouple, feed, foxgirl, feed, meow, tickle, wallpaper, coffee, animenom, waifu3, neko2, feed, meow, tickle, migumin, awoo, animewallpaper2, anime, manga
        
         *━━━━━━〈  ♨️ Informative ♨️  〉━━━━━━*
        
        animequote, quote, covid, earthquake, wiki
        
         *━━━━━━〈  🎗 Others 🎗  〉━━━━━━*
        
        stickermeme, quotes, darkjoke 
        
         *━━━━━━〈  🎐 Fun 🎐  〉━━━━━━*
        
        reaction, truth, dare, couple, soulmate, handsomecheck, beautifulcheck, awesomecheck, greatcheck, gaycheck, cutecheck, lesbiancheck, hornycheck, prettycheck, lovelycheck, uglycheck, charactercheck
        
         *━━━━━━〈  🪁 Essentials 🪁  〉━━━━━━*
        
        translate, fliptext, toletter
        
         *━━━━━━〈  💥 NSFW 💥  〉━━━━━━*
        
        🍁 Type " *${prefix}nsfw* " then enable NSFW (Admin only!) 
        
        🍁 Then type " *${prefix}nsfwmenu* " to get full list of NSFW commands.
        
        
        
        
        
         『  *${global.BotName}*  』
         Powered by: *Fantox*
        
         🔰 To use any of these commands type 
         " *${prefix}<Command name>* ".
         
         🔰 To get Support Group link type " *${prefix}support* ".
        
         🔰 Type " *${prefix}help* " to get full command list.`
             
         let buttonshelpm = [
            {buttonId: `-owner`, buttonText: {displayText: 'Bot Owner'}, type: 1}
            ]
                        let buttonMessage = {
                            file: GojoMdNx.sendMessage(m.chat,{video:fs.readFileSync('./system/miku2.mp4'),gifPlayback:true,caption:helpmenu},{quoted:m}),
                            caption: helpmenu,
                            footer: `${BotName}`,
                            buttons: buttonshelpm,
                            headerType: 4
                        }
                    GojoMdNx.sendMessage(m.chat, buttonMessage,{ quoted:m })
                        }
        break

		//Backup, for example, the video above doesn't come out\\

            case 'عام': {
                if (!isCreator) return replay(`${mess.owner}`)
                GojoMdNx.public = true
                reply('البوت عام')
            }
            break
            case 'خاص': {
                if (!isCreator) return replay(`${mess.owner}`)
                GojoMdNx.public = false
                reply('البوت مخصص')
            }
            break
           
            case 'المطور': {
                GojoMdNx.sendContact(m.chat, global.owner, m)
            }
            break
case 'cry':case 'kill':case 'hug':case 'pat':case 'bite':case 'yeet':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'megumin':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						GojoMdNx.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break

                     case 'جرجير': case 'menu': {
                           	timestampe = speed();
latensie = speed() - timestampe
 anu = ` `
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            hydratedFooterText: `
「 السلام عليكم 」
 「 ${pushname} 」

 「 معلومات 」
✙      اسم البوت : ${global.botname}
✙     المطور: ${global.ownername}
✙     رقم المطور : ${global.owner}
✙     عدد المستخدمين : ${Object.keys(global.db.data.users).length}
`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'قروب الانمي',
                                    url: `${myweb}`
                                }
                            }, {
                            	urlButton: {
                                displayText: 'قروب البوت',
                                    url: `${sc}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'المطور',
                                    id: `${prefix}المطور`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'الاوامر',
                                    id: `${prefix}اوامر`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break

case 'اوامر': {
    timestampe = speed();
latensie = speed() - timestampe
anu = ` `
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
 hydratedContentText: anu,
 hydratedFooterText: `
 📕 اختفاء
📗 اترك سببا لخروجك من واتس
📙مثال : اختفاء بروح اكل

📕اكس_او
📗ما يلزم شرح ، هي لعبة X O

📕رياضيات
📗 عمليات حسابية

📕قل
📗البوت يعيد كلامك

📕شبيهي
 📗شخص يشبهك (مزح)

📕 هل
📗 سؤول للبوت
📙 مثال :  هل انا محنك؟

📕اقدر
📗  سؤال للبوت
📙مثال : اقدر اطرد... ؟

📕 تشبيك
📗 منشن شخصين (مزح)

📕طرد
📗طرد عضو من المجموعة

📕دخل
📗دخل شخص المجموعة

📕ترقية
📗ترقية عضو لمشرف

📕تخفيض
📗تخفيض عضو لمشرف

📕حقيقة
📗 اسئلة محرجة

📕 منشن
📗 منشن جماعي
`,
 hydratedButtons: [{
     urlButton: {
         displayText: 'قروب الانمي',
         url: `${myweb}`
     }
 }, {
     urlButton: {
     displayText: 'قروب البوت',
         url: `${sc}`
     }
 }, {
     quickReplyButton: {
         displayText: 'المطور',
         id: `${prefix}المطور`
     }
 }, {
     quickReplyButton: {
         displayText: 'التالي',
         id: `${prefix}اوامر1`
     }
 }]
}
}
}), { userJid: m.chat })
GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break


case 'اوامر1': {
    timestampe = speed();
latensie = speed() - timestampe
anu = ` `
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
 hydratedContentText: anu,
 hydratedFooterText: `
 📕فعالية
 📗منشن مخفي للاستمارات 
 
 📕متصلين
 📗منشن كل المتصلين حاليا فالقروب
 
 📕ملصق
 📗تحويل صورة ، فيديو ، غيف لملصق
 
 📕دمج
 📗دمج اثنين من الايموجي
 
 📕 لصورة
 📗 تحويل ملصق لصورة
 
 📕لفيديو
 📗  تحويل ملصق متحرك لفيديو
 
 📕 لصوتية
 📗 تحويل فيديو لصوتية
 
 📕غيف
 📗تحويل صورة او فيدسو لغيف
 
 📕حذف_خلفية
 📗حذف خلفية الصور
 
 📕تطقيم
 📗جلب تطقيمات
 
 📕المطور
 📗معرفة مطور البوت
`,
 hydratedButtons: [{
     urlButton: {
         displayText: 'قروب الانمي',
         url: `${myweb}`
     }
 }, {
     urlButton: {
     displayText: 'قروب البوت',
         url: `${sc}`
     }
 }, {
     quickReplyButton: {
         displayText: 'المطور',
         id: `${prefix}المطور`
     }
 }]
}
}
}), { userJid: m.chat })
GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break



            
case 'akidanegh': {
  	anu = `
┏━「 *${botname}* 」━━⭓ 
┃╔══☯︎「 MAIN 」☯︎
┃╠ ${prefix}alive
┃╠ ${prefix}script
┃╠ ${prefix}speedtest
┃╠ ${prefix}ping
┃╠ ${prefix}owner
┃╠ ${prefix}menu
┃╠ ${prefix}delete
┃╠ ${prefix}chatinfo
┃╠ ${prefix}quoted
┃╠ ${prefix}listpc
┃╠ ${prefix}listgc
┃╠ ${prefix}donate
┃╠ ${prefix}report [bug]
┃╠══✪「 OWNER 」 ☯︎
┃╠ ${prefix}chat [option]
┃╠ ${prefix}join [link]
┃╠ ${prefix}leave
┃╠ ${prefix}block [user]
┃╠ ${prefix}unblock [user]
┃╠ ${prefix}bcgroup [text]
┃╠ ${prefix}bcall [text]
┃╠ ${prefix}setppbot [image]
┃╠ ${prefix}setexif
┃╠══✪「 GROUP 」 ☯︎      
┃╠${prefix}grouplink
┃╠${prefix}ephemeral [option]
┃╠${prefix}setgcpp [image]
┃╠${prefix}setname [text]
┃╠${prefix}setdesc [text]
┃╠${prefix}group [text]
┃╠${prefix}editinfo [option]
┃╠${prefix}add [user]
┃╠${prefix}kick [reply/tag]
┃╠${prefix}hidetag [text]
┃╠${prefix}tagall [text]
┃╠${prefix}antilink [on/off]
┃╠${prefix}mute [on/off]
┃╠${prefix}promote [reply/tag]
┃╠${prefix}demote [reply/tag]
┃╠${prefix}vote
┃╠${prefix}devote
┃╠${prefix}upvote
┃╠${prefix}checkvote
┃╠${prefix}delvote
┃╠══☯︎「 RPG 」 ☯︎
┃╠${prefix}hunting
┃╠${prefix}mining
┃╠${prefix}heal
┃╠${prefix}userlimit
┃╠${prefix}profile
┃╠${prefix}inventory
┃╠${prefix}leaderboard
┃╠${prefix}buy [option]
┃╠${prefix}sell [option]
┃╠═✪「 DOWNLOADER 」☯︎
┃╠${prefix}ytmp3 [url|quality]
┃╠${prefix}ytmp4 [url|quality]
┃╠${prefix}getmusic [yt link]
┃╠${prefix}getvideo [yt link]
┃╠${prefix}umma [query]
┃╠${prefix}joox [query]
┃╠${prefix}soundcloud [url]
┃╠══✪「 SEARCHER 」 ☯︎
┃╠${prefix}play [query]
┃╠${prefix}song [query]
┃╠${prefix}yts [query]
┃╠${prefix}google [query]
┃╠${prefix}gimage [query]
┃╠${prefix}pinterest [query]
┃╠${prefix}wallpaper [query]
┃╠${prefix}wikimedia [query]
┃╠${prefix}ytsearch [query]
┃╠${prefix}ringtone [query]
┃╠${prefix}webtoon [query]
┃╠══✪「 RANDOM 」☯︎
┃╠${prefix}coffee
┃╠${prefix}animequote (indo)
┃╠${prefix}couplepp
┃╠═✪「 RANDOM ANIME 」☯︎
┃╠${prefix}loli
┃╠${prefix}bully
┃╠${prefix}cuddle
┃╠${prefix}cry
┃╠${prefix}hug
┃╠${prefix}awoo
┃╠${prefix}kiss
┃╠${prefix}lick
┃╠${prefix}pat
┃╠${prefix}smug
┃╠${prefix}bonk
┃╠${prefix}yeet
┃╠${prefix}blush
┃╠${prefix}smile
┃╠${prefix}wave
┃╠${prefix}highfive
┃╠${prefix}handhold
┃╠${prefix}nom
┃╠${prefix}glomp
┃╠${prefix}bite
┃╠${prefix}slap
┃╠${prefix}kill
┃╠${prefix}happy
┃╠${prefix}wink
┃╠${prefix}poke
┃╠${prefix}dance
┃╠${prefix}cringe
┃╠══✪「 FUN 」 ☯︎
┃╠ ${prefix}how [text
┃╠ ${prefix}when [text]
┃╠ ${prefix}is [text]
┃╠ ${prefix}what [text]
┃╠ ${prefix}can [text]
┃╠ ${prefix}rate [text]
┃╠ ${prefix}wangy [text]
┃╠ ${prefix}beautifulcheck [tag]
┃╠ ${prefix}awesomecheck [tag]
┃╠ ${prefix}prettycheck [tag]
┃╠ ${prefix}lesbiancheck [tag]
┃╠ ${prefix}gaycheck [tag]
┃╠ ${prefix}cutecheck [tag]
┃╠ ${prefix}uglycheck [tag]
┃╠ ${prefix}hornycheck [tag]
┃╠ ${prefix}charactercheck [tag]
┃╠ ${prefix}lovelycheck [tag]
┃╠ ${prefix}couple
┃╠ ${prefix}mysoulmate
┃╠ ${prefix}hot
┃╠ ${prefix}sexy
┃╠ ${prefix}kind
┃╠ ${prefix}idiot
┃╠ ${prefix}handsome
┃╠ ${prefix}beautiful
┃╠ ${prefix}cute
┃╠ ${prefix}pretty
┃╠ ${prefix}lesbian
┃╠ ${prefix}noob
┃╠ ${prefix}bastard
┃╠ ${prefix}foolish
┃╠ ${prefix}nerd
┃╠ ${prefix}asshole
┃╠ ${prefix}gay
┃╠ ${prefix}smart
┃╠ ${prefix}stubble
┃╠ ${prefix}dog
┃╠ ${prefix}horny
┃╠ ${prefix}cunt
┃╠ ${prefix}wibu
┃╠ ${prefix}tictactoe
┃╠ ${prefix}delttt
┃╠ ${prefix}guess [option]
┃╠ ${prefix}math [mode]
┃╠ ${prefix}suitpvp [tag]
┃╠═══✪「 CONVERTER 」 ☯︎
┃╠ ${prefix}toimage [reply stick]
┃╠ ${prefix}sticker [reply img|gif]
┃╠ ${prefix}emojimix [moji+moji]
┃╠ ${prefix}tovideo [reply img]
┃╠ ${prefix}togif [reply stick]
┃╠ ${prefix}tourl [reply img]
┃╠ ${prefix}tovn [reply aud]
┃╠ ${prefix}tomp3 [reply vn]
┃╠ ${prefix}toaudio [reply vid]
┃╠ ${prefix}ebinary [reply txt]
┃╠ ${prefix}dbinary [reply txt]
┃╠ ${prefix}styletext [text]
┃╠══✪「 DATABASE 」 ☯︎
┃╠ ${prefix}setcmd
┃╠ ${prefix}listcmd
┃╠ ${prefix}delcmd
┃╠ ${prefix}lockcmd
┃╠ ${prefix}addmsg
┃╠ ${prefix}listmsg
┃╠ ${prefix}getmsg
┃╠ ${prefix}delmsg
┃╠═✪「 ANONYMOUS CHAT 」☯︎
┃╠${prefix}anonymous
┃╠${prefix}start
┃╠${prefix}next
┃╠${prefix}leave
┃╠═✪「 VOICE CHANGER 」☯︎
┃╠${prefix}bass [reply aud]
┃╠${prefix}blown [reply aud]
┃╠${prefix}deep [reply aud]
┃╠${prefix}earrape [reply aud]
┃╠${prefix}fast [reply aud]
┃╠${prefix}fat [reply aud]
┃╠${prefix}nightcore [reply aud]
┃╠${prefix}reverse [reply aud]
┃╠${prefix}robot [reply aud]
┃╠${prefix}slow [reply aud]
┃╠${prefix}squirrel [reply aud]
┃╠══✪「 ISLAMIC 」☯︎
┃╠${prefix}juzamma
┃╠══✪「 HOROSCOPE 」☯︎
┃╠${prefix}nomorhoki (indo)
┃╠${prefix}artimimpi (indo)
┃╠${prefix}artinama (indo)
┃╠${prefix}ramaljodoh (indo)
┃╠${prefix}ramaljodohbali (indo)
┃╠${prefix}suamiistri (indo)
┃╠${prefix}ramalcinta (indo)
┃╠${prefix}cocoknama (indo)
┃╠${prefix}pasangan (indo)
┃╠${prefix}jadiannikah (indo)
┃╠${prefix}sifatusaha (indo)
┃╠${prefix}rezeki (indo)
┃╠${prefix}pekerjaan (indo)
┃╠${prefix}nasib (indo)
┃╠${prefix}penyakit (indo)
┃╠${prefix}tarot (indo)
┃╠${prefix}fengshui (indo)
┃╠${prefix}haribaik (indo)
┃╠${prefix}harisangar (indo)
┃╠${prefix}harisial (indo)
┃╠${prefix}nagahari (indo)
┃╠${prefix}arahrezeki (indo)
┃╠${prefix}peruntungan (indo)
┃╠${prefix}weton (indo)
┃╠${prefix}karakter (indo)
┃╠${prefix}keberuntungan (indo)
┃╠${prefix}memancing (indo)
┃╠${prefix}masasubur (indo)
┃╠${prefix}zodiak (indo)
┃╠${prefix}shio (indo)
┃╚═══════✍︎𝑁𝑒𝑥𝑢𝑠𝑁𝑤
┗━「 *Created By ${ownername}*  𖠌」━⭓`
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./GojoMedia/gojo.jpg')},
                            hydratedFooterText: `${pushname}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'قروب الانمي',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'المطور',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
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
