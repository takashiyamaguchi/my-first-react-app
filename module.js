export class MyObj {
  constructor(r, g, b){
    this.red = r;
    this.green = g;
    this.blue = b;
  }

  printData(){
    return '<p>RED:'+this.red+'</p>'
      + '<p>GREEN:'+this.green+'</p>'
      + '<p>BLUE:'+this.blue+'</p>';
  }
}
