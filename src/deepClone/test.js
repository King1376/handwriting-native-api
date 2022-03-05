// 测试数据
const source = {
  native: null,
  nameList: ['javascript', ['nodejs',['koa',['eggjs',['single-spa']]]]],
  fun(value) {
    console.log("value: ", value);
  },
  infos: { name: "Vue", detail: { core: 'compiler' } },
  time: new Date(),
  test: /\.json$/,
  set: new Set([['showtime'], 'magic']),
  map: new Map([[{}, 'map'], [[1], [2]]])
};

source.newProperty = source
const res = deepClone(source);
source.nameList.push('html', 'css');
source.infos.author = "Evant";
source.time = new Date("2022-12-31");
source.test = /\.js$/;
source.set.add({say: 'just do it'})
source.map.set('try', null)
res.fun('已执行')
console.log("source: ", source, "res: ", res);
