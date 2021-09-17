class Animal{
    constructor(name,age,sex,numberOfLegs){
        // if (sex != 'male' || sex != 'female'){
        //     throw error('Please enter a correct sex')
        // }
        this.name = name
        this.age = age
        this.sex = sex
        this.numberOfLegs = numberOfLegs
    }
}

module.exports = Animal