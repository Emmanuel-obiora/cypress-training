// List
// a. number
// b. String
// c. Array
// d. Boolean
// e. null
// f. undefined
// g. any
// h. unknown
// i. void

const score:number = 20;
let rname:string = 'Emmanuel';

let resultf: number[] = [50,100,150];
// console.log(resultf);

let familyName: Array<string> = ["obiora", "chinedu", "emmanuel"];

const stay:boolean=true;

let den:null=null;
let cla:undefined=undefined;

let laptop:unknown=true;

function water(){
  let scoreh:number, result:number;
  scoreh=30;

  result = scoreh*2;
  console.log(result);

  if(stay===true){
    let mini:string = "grace";

    scoreh=50;
  }
};

const data = [20,30,50,60,30,80]
let scorem: number, avg:number;

function avgScore(){
  const sum = data.reduce((acc, curr) => acc + curr, 0);
  let finalScore = sum / data.length;

  console.log(finalScore);

  //OR
  const scorem = 20 + 30 + 50 + 60 + 30 + 80;

  avg = scorem / 6;

  console.log(`The average of the 6 scores presented is ${avg}`)
};

avgScore();


let we = function(a:number, ans?:number){
  ans = a*10;
  console.log(ans);
};

// we(24);

const grade = () =>{
  console.log('This is an arrow function');
}

// we(score);

// water();

// grade();