const figlet = require("figlet");

figlet ("Hello ! ", function(err, data){
    if (err){
        console.log("somthing went wrong");
        console.dir(err);
        return;
    }
    console.log(data);
});