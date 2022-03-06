const tar = [1,[3,[[[[[[[[[[666]]]]]]]]]]],4]
const custom = tar.mFlat()
const native = tar.flat()
console.log('custom: ', custom, 'native: ', native);