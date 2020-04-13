const files = require.context('./icons', false, /\.svg$/)
const arr = files.keys().map(file => files(file))
console.log(arr)
