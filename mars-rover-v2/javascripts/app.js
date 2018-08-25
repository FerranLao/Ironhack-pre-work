// Rover Object Goes Here
// ======================
var rover = {
  direction :"N",
  x : 0,
  y : 0,
  travelLog:[]
}
var rover1= {
  direction :"S",
  x : 4,
  y : 4,
  travelLog:[]
}

var map = [
  ["R","0","1","1","0","0","0","0","0","0"],
  ["0","0","0","1","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","1","0"],
  ["0","0","0","0","R","0","0","0","0","0"],
  ["0","1","0","0","0","1","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","1","0","0","0"],
  ["0","0","1","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"]
];


var commandList= "rffrfflfrff";//rover
var commandList1= "lffrbrfflbr";//rover1
// ======================
function turnLeft(rover){  
  switch(rover.direction){
    case "N":
    (rover.direction="W")
    break;
    case "W":
    (rover.direction="S")
    break;
    case "S":
    (rover.direction="E")
    break;
    case "E":
    rover.direction="N";
    break;
  }
 console.log("turnLeft was called!");
}
function turnRight(rover){
  switch(rover.direction){
    case "N":
    rover.direction="E";
    break;
    case "E":
    rover.direction="S";
    break;
    case "S":
    rover.direction="W";
    break;
    case "W":
    rover.direction="N";
    break;
  }

  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called");
  rover.travelLog.push([rover.x, rover.y]);
  map[rover.y][rover.x]="0";
  switch(rover.direction){
    case "N":
    rover.y--;
    if(rover.y<=0){
      console.log("can't move");
      rover.y++;
    }else if(map[rover.y][rover.x]!="0"){
      console.log("can't move");
      rover.y++;
    }
    break;
    case "E": 
    rover.x++;
    if(rover.x>=9){
      console.log("can't move");
      rover.x--;
    }else if(map[rover.y][rover.x] !="0"){
      console.log("can't move");
      rover.x--;
    }
    break;
    case "S":
    rover.y++;
    if(rover.y>=9){
      console.log("can't move");
      rover.y--;
    }else if(map[rover.y][rover.x]!="0"){
      console.log("can't move");
      rover.y--;
    }      
    break;
    case "W":
    rover.x--;
    if(rover.x<=0){
      console.log("can't move");
      rover.x++;
    }else if(map[rover.y][rover.x]!="0"){
      console.log("can't move");
      rover.x++;
    }  
        
    break;
  }
  console.log(rover.x , rover.y);
  map[rover.y][rover.x]="R";
  map[rover1.y][rover1.x]="R1";
}
function moveBackward(rover){
  console.log("moveBackward was called");
  rover.travelLog.push([rover.x, rover.y]);
  map[rover.y][rover.x]="0";
  map[rover1.y][rover1.x]="0";
  switch(rover.direction){
    case "N":
    rover.y++;
    if(rover.y>=9){
      console.log("can't move");
      rover.y--;
    }else if(map[rover.y][rover.x]!="0"){
      console.log("can't move");
      rover.y--;
    }      
    break;
    case "E":
    rover.x--;
    if (rover.x<=0){console.log("can't move");
    } if(rover.x<=0){
      console.log("can't move");
      rover.x++;
    }else if(map[rover.y][rover.x]!="0"){
      console.log("can't move");
      rover.x++;
    }  
    break;
    case "S":
    rover.y--;
    if(rover.y<=0){
      console.log("can't move");
      rover.y++;
    }else if(map[rover.y][rover.x]!="0"){
      console.log("can't move");
      rover.y++;
    }
    break;
    case "W":
    rover.x++;
    if(rover.x>=9){
      console.log("can't move");
      rover.x--;
    }else if(map[rover.y][rover.x]!="0"){
      console.log("can't move");
      rover.x--;
    } 
    break;
        
  }
  console.log(rover.x , rover.y);
  map[rover.y][rover.x]="R";
  map[rover1.y][rover1.x]="R1";
}
function command(commandList){
  for(var i=0; i <= commandList.length; i++){
    if(commandList[i]==="f"){
      moveForward(rover);
    }
    else if(commandList[i]==="l"){
      turnLeft(rover);
    }
    else if (commandList[i]==="r"){
      turnRight(rover);
    }
    else if(commandList[i]==="b"){
      moveBackward(rover);
    }
    if(commandList1[i]==="f"){
      moveForward(rover1);
    }
    else if(commandList1[i]==="l"){
      turnLeft(rover1);
    }
    else if(commandList1[i]==="r"){
      turnRight(rover1);
    }
    else   if(commandList1[i]==="b"){
      moveBackward(rover1);
    }
    else {
      console.log("wrong input");
    }
  }console.log(rover.travelLog);
  console.log(rover1.travelLog);
}
