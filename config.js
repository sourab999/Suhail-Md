const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_56_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDY1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxODksXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0LFxuICAgICAgICA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAzMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyNyxcbiAgICAgICAgNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgODMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDYwLFxuICAgICAgICA0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg2LFxuICAgICAgICA2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDU0LFxuICAgICAgICA5MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMixcbiAgICAgICAgMTg1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkxLFxuICAgICAgICA5LFxuICAgICAgICA5MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFPZkZaV0FVUWx6bFc3MklLbURkY29UVGVpaThoVXF3bk56YzNTcmFLeEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllPQS01THpxUTdld25RNEpMUXBiaEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmY0MWE3OTUtYmYyMC00OGY5LThlNDUtZGE5YjMxMzhlZDA0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDY2LFxuICAgICAgMTM5LFxuICAgICAgNjEsXG4gICAgICA1NSxcbiAgICAgIDkwLFxuICAgICAgMjIxLFxuICAgICAgMTAyLFxuICAgICAgNDgsXG4gICAgICAyNDIsXG4gICAgICAxMjUsXG4gICAgICAxNTIsXG4gICAgICAxNTAsXG4gICAgICA2LFxuICAgICAgMjksXG4gICAgICAxMDcsXG4gICAgICAxMzYsXG4gICAgICA3NixcbiAgICAgIDExNixcbiAgICAgIDEwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzgsXG4gICAgICAxNzQsXG4gICAgICA4NCxcbiAgICAgIDEyNCxcbiAgICAgIDI4LFxuICAgICAgNTYsXG4gICAgICAyMDksXG4gICAgICA5MCxcbiAgICAgIDIyNyxcbiAgICAgIDIzMSxcbiAgICAgIDEwMyxcbiAgICAgIDQ4LFxuICAgICAgNDcsXG4gICAgICAyMjMsXG4gICAgICAyMTksXG4gICAgICAxNDAsXG4gICAgICAzMCxcbiAgICAgIDEwOCxcbiAgICAgIDI0LFxuICAgICAgOTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPcnY5SjRCRVA2TC9iUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkE0a1NBYU5SQ1RPUnQySU9BR1l4L3pvek1FUzl0RXJWaU1yMS9YS3BTd3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVXNzTm50ekYvb1pQaWhMU3FlZ25QcThBYUVLL3p3U0YxM2xuRTJKWmovdFlEZHBWUXFKMk9IVnZhT2lURG85Sm8wUnpCL3hrM085c2F5UXVuR3VnRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT1VqaWw2cGtXZFJQSm83UW5hNjZIU21sSGQyWVdFam9ERVpGM0hrZVRrazA1ODdJeFhpaXRhYmpDUlptbmxicTB5WTNwaEMyZ3diRzZScGxwd3AvaEE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTcwMzY2ODQwNDg6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJzb3VyYWJcIixcbiAgICBcImxpZFwiOiBcIjE4MDc1MzgxNjExMzI3MDo0MkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzAzNjY4NDA0ODo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTcxNDE3N1xufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
