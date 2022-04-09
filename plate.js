class Plate {
  
  constructor(x, w) {
    this.x = x;
    this.w = w;
    this.h = 10;
    this.y = height - this.h;
  }
  cathces(pie) {
    
    if (pie.y >= this.y && pie.x > this.x- this.w/2 && pie.x < this.x + w/2) {
    return true;
    } else {
      return false;
    }
  }
  show() {
    rectMode
    rect(this.x, this.y, this.w, this.h);
  }

}