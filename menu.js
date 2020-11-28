exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `
	
  ▃▅▆█ *NAGA BOT* █▆▅▃
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah beberapa fitur yang ada pada bot ini !✨

---------------
*${tampilTanggal}*
*${tampilWaktu}*
----------

♻ This Bot 
| *Created By Naga* |
*Rules*🔥: 1) Prefix = #
                     2) No Spam
                     3) No Vc
                 
*Command Sticker* 📲
• #Sticker

*OTHER COMMAND* 🛸
• #nulis
• #pantun
• #quotes
• #wiki [query]
• #quran

🌏 *DOWNLOADER COMMAND* 🌏
• #yt [link]
• #ytmp3 [link]
• #ig [link]
• #fb [link]
• #twt [link]

*COMMAND VC* ☎️
• #tts id [your text]
• #say [kata]

*PHOTO COMMAND* 🌌
• #ptl [cewek/cowok]
• #randomanime

*INFO BOT* 💦
• #info
•#donate

INGIN DONASI ATAU KASIH SARAN ?
Hub : Wa.me/6281357302007

📺 *Iklan* :

✅ Follow akun instagram admin ${instagramlu}


╔══✪〘 ⚠️ Info Covid ⚠️  〙✪══
║
╠➥ ⚠️ POSITIF: *${corohelp.confirmed.value}*
╠➥ ⚠️ SEMBUH: *${corohelp.recovered.value}*
╠➥ ⚠️ MENINGGAL: *${corohelp.deaths.value}*
╠➥ ⚠️ UPDATE: *${corohelp.lastUpdate}*
╠══✪〘 By Naga 〙✪══

TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER !
WAJIB : *IMAN,AMAN,DAN IMUN* 🔰

♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

✳️ Official Grub [1] : ${grupch1}

✳️ Official Grub [2] : ${grupch2}

  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
