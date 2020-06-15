const data =  [{'id':1, 'type': 'external'}, {'id':2}, {'id':3, type: 'internal'}];
const res = data.filter(x => x.type === 'external');
console.log(res); // [{'id':1, 'type': 'external'}]
