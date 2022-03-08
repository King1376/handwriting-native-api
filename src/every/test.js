const target = [8, 2, 91, 4]
const custom = target.mEvery((item, idx) => item%2 === 0)
const native = target.every((item, idx) => item%2 === 0)
console.log('custom: ', custom, 'native: ', native);