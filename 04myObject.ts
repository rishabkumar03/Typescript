const User = {
    name: "rishab",
    email: "rizz@lord.dev",
    isActive: true
}

function createUser({name, isPaid}: {name: string, isPaid: boolean}): void {
    // Function implementation here
    console.log(`User: ${name}, Paid: ${isPaid}`);
}

let newUser = {name: "rishab", isPaid: false, email: "rizz@lord.com"}

createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name: "AI with py", price: 499}
}

export {}