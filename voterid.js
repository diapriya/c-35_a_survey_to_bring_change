class Form{
    constructor(){
      //  this.input = createInput("Email");
     //   this.button=createButton('Vote');
    }

    hide(){
     this.input.hide();
     this.button.hide();
    }

    display(){
   var title = createElement('h2');
  // title.html("Voter");
   title.position(130,0);

         
    this.input.position(130, 160);
    this.button.position(250, 200);

     this.button.mousePressed(()=>{
     this.input.hide();
     this.button.hide();

     voting.form = this.button.value();

    }

     )}
}
