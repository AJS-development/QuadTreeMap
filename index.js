
var QuadTree = require('./Quadtree.js');

module.exports = class QuadTreeMap {
  constructor(top,bottom,left,right) {
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
    this.positionkey = "position";
    this.quadtree = new QuadTree(top,bottom,left,right,0,false,this.positionkey);
  }
  get(key) {
    
    
  }
  set(key,data) {
    
    
  }
  forEach(callback) {
    
    
  }
  every(callback) {
    
    
  }
  keys() {
    
    return this.quadtree.keys();
  }
  getQuadBox(box) {
    return this.quadtree.getQuad(null,box)
  }
  getQuad(node) {
   return this.quadtree.getQuad(node)
    
  }
  setPosVar(var) {
    return this.positionkey = var;
    
  }
  reSort() {
    this.quadtree.reSort();
  }
  changeBorders(top,bottom,left,right) {
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
    this.quadtree.reSort();
  }
  
  
  
}
