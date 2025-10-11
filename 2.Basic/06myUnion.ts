let score: number | string = 34
score = 54
score = "43"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let rishab: User | Admin = {name: "rishab", id: 56}

rishab = {username: "rizz", id: 453}

// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB id is: ${id}`);
// }

getDbId(3)
getDbId("543")

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

// array

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", 2, 4, true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"

export {}