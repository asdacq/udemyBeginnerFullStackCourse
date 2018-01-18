var studentArray = ["Timmy", "Billy", "Bob"];

var naughtyList = [];

naughtyList.push(studentArray[0]);

var findTimmy = naughtyList.indexOf("Timmy");

if(findTimmy !== -1){
    naughtyList.splice(findTimmy,1);
}

console.log(naughtyList);

for(var index = 0; index < studentArray.length; index++){
    console.log(studentArray[index]);
}