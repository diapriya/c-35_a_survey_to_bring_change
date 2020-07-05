class Voting{
   constructor(){
    this.button1 = createButton('YES');
    this.button2 = createButton('NO');

    this.button3 = createButton('YES');
    this.button4 = createButton('NO');

   }

   display(){
    var title1 = createElement('h4');
    title1.html("Q1:Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");                        
    title1.position(20,20);

    this.button1.position(20,40);
    this.button2.position(20,60);

    var title2 = createElement('h4');
    title2.html("Would you be willing to contribute a small amount every month for such a program?");                        
    title2.position(20,80);

    this.button3.position(20,100);
    this.button4.position(20,120);
}
}