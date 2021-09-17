const Animal = require("./Animal")

class Tortoise extends Animal{
    constructor(name,age,sex){
        super(name,age,sex,4)
    }
    hide(){
        console.log(this.name + ' has hidden in their shell')
        return true
    }

}

module.exports = Tortoise