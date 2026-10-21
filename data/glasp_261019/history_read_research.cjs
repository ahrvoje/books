const fs=require('fs');for(let i=1;i<=6;i++){let s=require('./history_finish_'+i+'.json').result;console.log('\nRESULT '+i+'\n'+s.slice(0,14000));}
