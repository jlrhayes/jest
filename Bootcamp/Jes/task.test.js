const Cat = require('./Cat')
const Tortoise = require('./Tortoise')

test("TTortoise has the correct name" , () => {
    let tort = new Tortoise('Max',56,'male')
    expect(tort.name).toBe('Max')
})

test("Tortoise has the correct age" , () => {
    let tort = new Tortoise('Max',56,'male')
    expect(tort.age).toBe(56)
})

test("Tortoise has the correct sex" , () => {
    let tort = new Tortoise('Max',56,'male')
    expect(tort.sex).toBe('male')
})

test("Tortoise has the correct number of legs" , () => {
    let tort = new Tortoise('Max',56,'male')
    expect(tort.numberOfLegs).toBe(4)
})

test("Tortoise can hide in their shell" , () => {
    let tort = new Tortoise('Max',56,'male',4)
    expect(tort.hide()).toBeTruthy()
})

test("Cat has the correct name" , () => {
    let coot = new Cat('Max',56,'male','white')
    expect(coot.name).toBe('Max')
})

test("Cat has the correct age" , () => {
    let coot = new Cat('Max',56,'male','white')
    expect(coot.age).toBe(56)
})

test("Cat has the correct sex" , () => {
    let coot = new Cat('Max',56,'male','white')
    expect(coot.sex).toBe('male')
})

test("Cat has the correct number of legs" , () => {
    let coot = new Cat('Max',56,'male','white')
    expect(coot.numberOfLegs).toBe(4)
})

test('Cat has correct fur', () => {
    let coot = new Cat('Max',56,'male','white')
    expect(coot.furType).toBe('white')
})

test("Cat can Meow" , () => {
    let coot = new Cat('Max',56,'male','white')
    expect(coot.meow()).toBeTruthy()
})




// const waysToMake = require("./task")



// test("Simple test" , () => {
//     expect(waysToMake(4,[1,2])).toBe(3)
// })

// test("Test regular input", () => {
//     expect(sumOfOdd([1,2,3,4,5])).toBe(9)
// })

// test("Test negative inputs", () => {
//     expect(sumOfOdd([-1,-2,3,4,-5])).toBe(-3)
// })

// test("Test empty input", () => {
//     expect(sumOfOdd([])).toBe(0)
// })
// test("Test single input", () => {
//     expect(sumOfOdd([1])).toBe(1)
// })
