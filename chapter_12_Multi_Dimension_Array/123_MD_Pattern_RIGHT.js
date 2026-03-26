
// n = 3a
// *
// * *
// * * *

/*let n = 3;
for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        //row = row + "* ";
        row += "* ";
    }
    console.log(row.trim());
}*/














let n = 3;
for (i = 1; i <= n; i++) {
    let row = " ";
    for (j = 0; j < i; j++)
        row = row + "*"
    console.log(row.trim());
}
