function mAll(iterators) {
    return new Promise((resolve, reject) => {
        try {
            // 可迭代对象
            if(!iterators[Symbol.iterator]) {
                reject(new TypeError(`${typeof iterators} is not iterable`))
            }
            // 统一转换数组
            iterators = Array.from(iterators)
            const result = []
            let counter = 0
            // 若为空数组，则直接返回
            if(!iterators.length) {
                resolve(result)
            }
            iterators.forEach((item, idx) => {
                Promise.resolve(item).then(data => {
                    result[idx] = data
                    if(++counter === iterators.length) {
                        resolve(result)
                    }
                }).catch(reject)
            });
        } catch (error) {
            reject(error)
        }
    })
}

Promise.mAll = mAll