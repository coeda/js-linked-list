/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
let module ={};
let listHead = null;
let listTail = null;
let nodeIndex = 0;
let selectedNode;


  module.getHead = function(){
    return listHead;
  };

  module.getTail = function(){
    return listTail;
  };

  module.add = function(a){
    let addedNodeVariable = {
      value: a,
      next: null
    };
    if (listHead === null){
      listHead = addedNodeVariable;
    } else {
      nodeIndex ++;
    }
    if(listTail !== null){
      listTail.next = addedNodeVariable;
    }
    listTail = addedNodeVariable;
    return addedNodeVariable;
  };

  module.remove = function(b){
    if(module.get(b) !== false) {
      if(b > 0){
        module.get(b - 1).next = module.get(b).next;
      } else {
        listHead = listHead.next;
      }
      listTail = module.get(nodeIndex - 1);
      nodeIndex --;
    } else {
      return false;
    }
  };

  module.get = function(n){
    let foundNode = false;
    selectedNode = listHead;
      if( n > nodeIndex || n < 0){
        selectedNode = false;
      } else {
        for(let i = 0; i <= n; i++){
          if(i === n){
            foundNode = selectedNode;
          } else if(foundNode.next !== null) {
            selectedNode = selectedNode.next;
          }
        }
      }
    foundNode = selectedNode;
    return foundNode;
  };

  module.insert = function(v,input){
    if(module.get(input) !== false){
      let newNode = {
        value: v,
        next: module.get(input)
      };
      if(input > 0){
      module.get(input - 1).next = newNode;
      } else {
        listHead = newNode;
      }
      nodeIndex ++;
    } else {
      return false;
    }
  };

  return module;
}