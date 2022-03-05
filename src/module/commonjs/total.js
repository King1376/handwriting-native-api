const { add } = require("./add")
console.log('total top this', this)
module.exports = {
    sum() {
        return 3*add(8,9)
    },
    showThis(){
        console.log('showThis', this)
    }
}