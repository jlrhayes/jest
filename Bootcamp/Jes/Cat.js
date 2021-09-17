const Animal = require("./Animal")

class Cat extends Animal{
    constructor(name,age,sex,furType){
        super(name,age,sex,4)
        this.furType = furType
    }

    meow(){
        console.log(this.name + ' meowed')
        return true
    }
}

module.exports = Cat