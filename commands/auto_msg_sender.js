const { tlang,cmd } = require('../lib')
const Config = require('../config')
const axios = require('axios')
// Put here your url with modified words and urls
const url = 'https://gist.githubusercontent.com/DarkYasiyaofc/2d8e761f1366ded844cfe7ac15878b64/raw'

/**
 cmd({
            pattern: "mgs",
            category: "owner",
            use: '',
        },
**/ 
cmd({ on: "text" }, async (Void,citel,text,{isCreator})=> {
  let { data } = await axios.get(url)
  for (vr in data){
 if((new RegExp(`\\b${vr}\\b`,'gi')).test(citel.text)) return Void.sendMessage(citel.chat,{text: { url : data[vr]},mimetype: 'txt/msg',ptt:true},{quoted:citel})   
}
})
