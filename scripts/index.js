import shoppinglist from './shopping-list.js';


const main = function() {
  shoppinglist.bindEventListener();
  shoppinglist.render();
}

$(main);