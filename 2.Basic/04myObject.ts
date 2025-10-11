// const User = {
//     name: "rishab",
//     email: "rizz@lord.dev",
//     isActive: true
// }

// function createUser({name, isPaid}: {name: string, isPaid: boolean}): void {
//     // Function implementation here
//     console.log(`User: ${name}, Paid: ${isPaid}`);
// }

// let newUser = {name: "rishab", isPaid: false, email: "rizz@lord.com"}

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return {name: "AI with py", price: 499}
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User {
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number
}

let myUser: User = {
    _id: "3452",
    name: "rizz",
    email: "r@rizz.com",
    isActive: false
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "rizz@gmail.com"
// myUser._id = "t2245ag"

export {}