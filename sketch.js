var  database;
var  form;
var  voting; 




function setup() {
  createCanvas(800,400);
  database = firebase.database();

  console.log(database);

  database.ref('/').update({
    email: 'a@gmail.com', 

  });



 form = new Form();
 //voting = new Voting();
} 

function draw() {
  background(255,255,255); 
  form.display();
  voting.display(); 
  drawSprites();
}