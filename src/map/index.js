function mMap(callback) {
    if(typeof(callback) !== 'function') {
        throw new TypeError(`${typeof callback} is not a function`)
    }
    const result = []
    this.forEach((item, idx) => {
        result[idx] = callback.call(null, item, idx, this)
    });
    return result
}

Array.prototype.mMap = mMap