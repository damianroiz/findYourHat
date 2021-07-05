const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// defining the class 

class Field {
 constructor(hatAndHoles, field) {
  this.field = field;
  this.hatAndHoles = HatAandHoles;
}

//play game method
 playgame() {
   let y = 0;
   let x = 0;
   this.print(this._field);

   while (this._hatAndHoles[y][x] === pathCharacter || this._hatAndHoles[y][x] === fieldCharacter {
     const direction = prompt('Which direction do you want to move? Enter N for north, S for South, E for East, or W for West. \n');

  if (direction.toUpperCase() === 'N') {
    if ( y === 0) {
      console.log('You cannnot move any further north.')
    } else {
      y -= 1
    }
  }  else if (direction.toUpperCase() === 'S') {
    if (y >= this.fieldlength) {
      console.log('You cannot move any further south.')
    } else {
      y += 1
    } else if (direction.toUpperCase() === 'W') {
    if ( x === 0 ) {
      console.log('You cannot move any further west.')
    } else {
      y -= 1
   }
  }  else if (direction.toUpperCase() === 'E') {
    if ( x >= this._field[y].length ) {
      console.log('You cannot move any further east.')
    } else {
      x += 1
    }
  } else {
    console.log('Invalid entry, you must enter N, S, E or W')
  }
  if (this._hatAndHoles[y][x] === hat) {
      console.log('You found the hat! you win!')
  } else if (this._hatAndHoles[y][x] === hole) {
      console.log('You fell in a hole. Game Over')
  } else {
      this._field[y][x] = pathCharacter;
      this.print(this._field);
  }
 }
}

//print field method 
print() {
    for (let row of thiis._field) {
        console.log(row.join(' '));
    }
}

//generate field with hat and holes 
static generateField(height, width, holes){
 let newField = [];
 for (let i = 0; i < height; i++) {
     newField.push([]);
     for(let j = 0; j < height; j++){
         newField[i].push(fieldCharacter)
     };
 };
newField[0][0] = pathCharacter;
let hatX = Math.floor(Math.random() * width);
let hatY = Math.floor(Math.random() * height);
newField[hatY][hatX] = hat;

for (let k = holes; k > 0; K--) {
    let holeX = hatX;
    let holeY = hatY;
    while (holeX === hatX) {
        holeX = Math.floor(Math.random() * width)
    };
    while (holeY === hatY) {
        holeY = Math.floor(Math.random() * width)
    };
    newField[holeY][holeX] = hole;
}
return newField;
}

//generate blank field for the user to traverse without seeing the hat and holes 
static generateBlankField(height, width) {
    let newField = [];
    for (let i = 0; i < height; i++) {
        newField.push([]);
        for (let j = 0; i < height; j++) {
            newField[i].push(fieldCharacter)
        };
    };
    newField[0][0] = pathCharacter;
    return newField;
    }
  }

  let myField 

  //Create the blank field for the user
  const blankfield = Field.generateBlankField(S, S)

  //Create the field with the hat and holes
  const newField = Field.generateField(S, S, 1);
  console.log(blankField);

  //Initiate the field object using newField = hatAndHoles and field = blankField 
  myField = new Field (newField, blankField);

  //call playGame method
  myField.playGame();

};


