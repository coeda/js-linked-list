/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
var module ={};
var listHead = null;
var listTail = null;

module.getHead = function(){
  return listHead;

};

module.getTail = function(){
  return listTail;
};

module.add = function(a){
  var addedNodeVariable = {
    value: a,
    next: null
  };
  if (listHead === null){
    listHead = a;
  }
    listTail = a;

  return addedNodeVariable;

};

module.remove = function(b){
  var listRemove = module.get(b);

};

module.get = function(n){
  for(let node in listData){
    if(node.value === n ){
      return node;
    }
  }

};

module.insert = function(){

};

return module;

}