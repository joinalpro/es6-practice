/**
 * class -> template
 * propertise
 * method (a special type of functin inside a class without a function keyword)
 * 
 * object
 * 
 * 
 * */ 

class Player {
    constructor(){
        console.log('calling the instructor method');
    }
    goal(){
        console.log('score a goal');
    }
    getTeam(){
        return 'borsha'
    }
}
const player1 = new Player()