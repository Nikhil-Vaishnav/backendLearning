/*this is the main file for colleting the data from the all file of fruite and
exporting the data to the js30th.js file.

note for exporting the data from one folder to other folder then it is neccessery to make 
index file.
*/
const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

let fruits = [apple, banana, orange];

module.exports = fruits;/*this will export to any file which neede*/
