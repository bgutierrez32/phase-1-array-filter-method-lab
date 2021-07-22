// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers, name){
    return drivers.filter(function (name2){
        return name2.toLowerCase() === name.toLowerCase();
    })
}
function fuzzyMatch(drivers, name){
    return drivers.filter(function(name3){
        return name3.toLowerCase().indexOf(name.toLowerCase()) === 0;
    })
}
function matchName(drivers, name){
    return drivers.filter(function(hometown){
        return hometown.name === name;
    })
}
