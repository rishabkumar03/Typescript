function addTwo(num: number): number {
    return num + 2
    // return "heyyyyyyy"
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let logInUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue = addTwo(5)
getUpper("me")

signUpUser("rishab", "rishab@123.dev", false)
logInUser("rizz", "rizz@lord")

// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
    return ""
}

const heroes = ["thor", "indianArmy", "indianNavy"]
// const heroes = [1, 2, 3]

heroes.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errMsg: string): void{
    console.log(errMsg);
}

function handleError(errMsg: string): never{
    throw new Error(errMsg)
}

export {}