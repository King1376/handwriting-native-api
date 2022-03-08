function mEvery(callback) {
    let result = true
    for(let i = 0; i < this.length; i++) {
       result = !!callback.call(null, this[i], i, this)
       if(!result) return result
    }
    return result
}


Array.prototype.mEvery = mEvery