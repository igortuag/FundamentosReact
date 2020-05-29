console.log(global === this)
console.log(this === global)
console.log(module.exports === this)

this.digaOi = function () {
    console.log('Oi!!!')
}