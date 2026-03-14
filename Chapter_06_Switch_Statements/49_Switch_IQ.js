
let x = 10;
switch (x) {
    case 10:
        let b1 = 1;
        console.log(b1);
        break;
    case 10:
        let b2 = 2;
        console.log(b2);
        break;
    default:
        console.log("d");
    // default:
    //     console.log("d");

}

// IT will allow you to have the duplicate case with first as the usage. 
switch (x) {
    case 10:
        console.log("Value is 10");
        break;

    case 20:
        console.log("Value is 20");
        break;

    default:
        console.log("Default");
}