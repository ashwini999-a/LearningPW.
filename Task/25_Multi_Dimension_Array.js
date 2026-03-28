
/*  *

  **

  ***

  ****

  *****     */

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row = row + "* ";
    }
    console.log(row.trim());
}


//*****
//*   *
//*   *
//*   *
//*****
console.log("----------------");

let n1 = 5;
for (let i = 1; i <= n1; i++) {
    let row = "";
    for (let j = 1; j <= n1; j++) {
        if (i === 1 || i === n1 || j === 1 || j === n1) {

            row = row + "*";
        }
        else {
            row = row + " ";
        }
    }
    console.log(row);
}
console.log("------------------------");



