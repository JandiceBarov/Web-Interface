const getData = function(keys, data) {
  let array = [];
  for (let i = 0; i < data.length; i++) {
    let obj = {};
    for (let j = 0; j < keys.length; j++) {
      if (data[i][j]){
      obj[keys[j]] = data[i][j];
      }
    }
    array.push(obj);
  }
  return array;
}
// Массив ключей
let key=['имя', 'любимый цвет', 'любимое блюдо'];
// Массив значений
let mass = [
 ['Василий', 'красный', 'борщ'],
 ['Мария'],
 ['Иннокентий', 'жёлтый', 'пельмени', '18', 'Азовское']
];
console.log(getData(key,mass))
