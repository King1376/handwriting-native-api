function mRace(iterators) {
    return new Promise((resolve, reject) => {
        try {
            if(!iterators[Symbol.iterator]) {
                reject(new TypeError(`${typeof iterators} is not iterable`))
            }
            iterators = Array.from(iterators)
            iterators.forEach(item => {
                Promise.resolve(item).then(resolve).catch(reject)
            });
        } catch (error) {
            reject(error)
        }
    })
}

Promise.mRace = mRace