function mFilter(callback) {
    if(typeof(callback) !== 'function') {
        throw new TypeError(`${typeof callback} is not a function`)
    }
    const result = []
    this.forEach((item, idx) => {
        const value = callback.call(null, item, idx, this)
        value && result.push(item)
    });
    return result
}


Array.prototype.mFilter = mFilter