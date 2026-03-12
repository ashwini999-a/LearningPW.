/*Exercise 1 : API Response Validation

You receive an array of API response codes. Write code to:
Check if ALL responses are successful (200–299)
Find the FIRST non-success code
Return all unique error codes
let responses = [200, 201, 404, 500, 404, 200, 503];
*/

//Check if ALL responses are successful (200–299)
let responses = [200, 201, 404, 500, 404, 200, 503];

let Success = responses.every(code => code >= 200 && code <= 299);

console.log(Success);


//Find the FIRST non-success code

let firstError = responses.find(code => code < 200 || code > 299);

console.log(firstError);


//Return all unique error codes
let errorCodes = [...new Set(
    responses.filter(code => code < 200 || code > 299)
)];

console.log(errorCodes);



You receive an array of API response codes. Write code to:
Check if ALL responses are successful (200–299)
Find the FIRST non-success code
Return all unique error codes
let responses = [200, 201, 404, 500, 404, 200, 503];

let success=responses.every(code =>code =>200  && code<299){
    console.log(success));
}

let firsterror= responses.find(code=> code>=200 && code<=299){
    console.log(firsterror);






}