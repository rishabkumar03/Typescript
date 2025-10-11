var score = 34;
score = 54;
score = "43";
var rishab = { name: "rishab", id: 56 };
rishab = { username: "rizz", id: 453 };
// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("543");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", 2, 4, true];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"
