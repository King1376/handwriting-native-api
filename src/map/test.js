const target = [1,2]
const custom = target.mMap(parseInt)
const native = target.map(parseInt)
console.log(custom, 'custom', native, 'native');