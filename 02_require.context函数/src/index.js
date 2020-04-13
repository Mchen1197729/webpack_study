/*const files = require.context('./data', false, /\.txt$/)
console.log(files instanceof Function) //true 说明返回值是一个函数
//该函数有三个属性 1.id:String  2.keys:Function 3.resolve:Function
console.dir(files.id) //基本没什么用
console.log(files.keys()) //返回的是目录中所有匹配的文件的相对路径 ["./day01.txt", "./day02.txt", "./day03.txt"]
console.log(files.resolve(files.keys()[0]))//基本没什么用
console.log(files(files.keys()[0]))  //返回的是Module(正是我们通过import想要得到的东西)
console.log(files(files.keys()[0]).default)  //就是模块默认导出的东西

const arr = files.keys().map(key => {
  // return files(key).default 模块中的内容
  return files(key) //模块对象Module
})

console.log(arr)
*/

const files = require.context('./svg', false, /\.svg$/)

const arr = files.keys().map(key => files(key).default)
console.log(arr)

const span = document.createElement('span')
span.innerHTML = arr[0]
document.body.append(span)

