const target = [1, 2, 3, 4, 5, 6, 7, 8]
const custom = target.mFilter(item => item%2)
const native = target.filter(item => item%2)
console.log(custom, 'custom', native, 'native');