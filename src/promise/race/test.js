const p1 = new Map()
const p2 = 'iterable'
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'p3')
})
const p4 = new Promise(resolve => {
    setTimeout(resolve, 0, 'p4')
})

const p5 = Promise.reject('fail')

const params = [p5, p3, p4]
const custom = Promise.mRace(params)
const native = Promise.race(params)
console.log('custom: ', custom, 'native: ', native);