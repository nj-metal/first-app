const fs = require('src/learn/fs');

//Sync
const files = fs.readdirSync('./')
console.log(files)

//Async
fs.readdir('./',function(err,files){
  if(err) console.log('Error',err)
  else console.log(files)
})





//err
fs.readdir('$',function(err,files){
    if(err) console.log('Error',err)
    else console.log(files)
})