interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponName: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "tutor" | "learner"
}

const me: Admin = { dbId: 22, email: "rizz@rizz,com", userId: 324, 
role: "admin",
githubToken: "github",
startTrial: () => {
    return "Trial starts now"
},
getCoupon: (name: "rishab", off: 15) => {
    return 15
}
}

me.email = "rizz@lord.com"

export {}