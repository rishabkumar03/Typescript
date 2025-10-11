// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Varanasi"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name
//     }
// }
// const rishab = new User("rizz@lord.com", "rizzhab")
// // rishab.city = "Ranchi"
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Varanasi";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course sount should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const rishab = new User("rizz@lord.com", "rizzhab");
export {};
// rishab.city = "Ranchi"
// rishab.deleteToken()
//# sourceMappingURL=01index.js.map