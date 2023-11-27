const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝙎𝙞 𝘿𝙚𝙨𝙚𝙖𝙨 𝙀𝙡 𝘽𝙤𝙩 𝘾𝙤𝙢𝙥𝙧𝙖 𝘾𝙤𝙣 wa.me/51906528530 ${pesan}`;
  let teks = `𝗛𝗼𝗹𝗮𝗮𝗮 , 𝗬𝗮 𝗗𝗲𝘀𝗽𝗶𝗲𝗿𝘁𝗲𝗻 𝗬𝗮 𝗘𝘀 𝗛𝗼𝗿𝗮 🌼 \n\n ${oi}\n\n`;
  for (const mem of participants) {
    teks += `🌼| ▪ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n\n🌼 𝗟𝗨𝗟𝗨 🌼`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
