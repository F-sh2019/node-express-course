
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
sayHi('Sisi')
sayHi(names.sara)
sayHi(names.farah)
for(const w of data.items){
    console.log(w);
}
console.log(data.singlePerson.name)
