// 数据类型
const getType = value => Object.prototype.toString.call(value).slice(8, -1)

// 根据数据类型初始化result
const initRes = type => {
    const maps =  {
        'Array': [],
        'Object': {},
        'Set': new Set(),
        'Map': new Map()
    }
    return maps[type]
}

// 可直接返回的数据类型
const returnableList = ['Number', 'String', 'Boolean', 'Null', 'Undefined', 'Symbol']

/**
 * 深克隆，缓存主要是为了解决循环应用
 * @param {any} target 
 * @param {Map} cache 
 * @returns 
 */
function deepClone(target, cache = new Map()) {
    // 若缓存里目标对象，则直接返回话村里的结果
    if(cache.has(target)) {
        return cache.get(target)
    }

    const type = getType(target)
    let result = initRes(type)
    // 缓存，未解决循环应用
    cache.set(target, result)

    if(returnableList.includes(type)) {
        result = target
    } else if(type === 'Function') {
        result = target.bind(this)
    } else if(type === 'Date') {
        result = new Date(target)
    } else if(type === 'RegExp') {
        result = new RegExp(target.source, target.flags)
    } else if(type === 'Object') {
        Object.keys(target).forEach(key => {
            result[key] = deepClone(target[key], cache)
        })
    } else if(type === 'Array') {
        target.forEach((item, idx) => {
            result[idx] = deepClone(item)
        });
    } else if(type === 'Set') {
        target.forEach(item => {
            result.add(deepClone(item, cache))            
        });
    } else if(type === 'Map') {
        target.forEach((value, key) =>{
            result.set(key, value)
        });
    }
    return result
}