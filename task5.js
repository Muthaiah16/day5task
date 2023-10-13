

var json = [{
    "name" : "Muthaiah", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "mail": "muthaiahm1612001@gamil.com"

}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.name);
    console.log(obj.msg);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].name);
  //console.log(json[key].msg);

}
}
//for Of
let text = "";
for (let x of json[key].name) {
 text += x; 
}
 console.log(text);