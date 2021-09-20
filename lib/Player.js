const Potion = require('../lib/Potion');
const Character = require('./Character');

// // this is similar to the Potion() constructor we created earlier. the main differenc is that the name parameter sets a default empty string if no name is proivded.
// function Player(name = '') {
//     this.name = name;

//     this.health = Math.floor(Math.random() * 10 + 95);
//     this.strength = Math.floor(Math.random() * 5 + 7);
//     this.agility = Math.floor(Math.random() * 5 + 7);

//     this.inventory = [new Potion('health', new Potion())]
// }

// //inherit prototype methods from Chracter here:
//  Player.prototype = Object.create(Character.prototype);
// //When using prototype, however, you are only creating the method once on the constructor itself. New player objects simply inherit the method from the constructor rather than having their own instances of that method. Such inheritance can traverse multiple levels, meaning if the method being called doesn't exist on Player(), JavaScript will look for it on the next constructor up the chain. In this case, the next constructor would be the built-in Object data type.
// //Because of this chain, you can call player.toString() even though you didn't explicitly define a toString() method anywhere. It was inherited from Object two levels up. In JavaScript, this is known as the prototype chain. 
// //returns an object with various player properties
// Player.prototype.getStats = function() {
//     return {
//         potions: this.inventory.length,
//         health: this.health,
//         strength: this.strength,
//         agility: this.agility
//     };
// };

// // returns the inventory array or false if empty
// Player.prototype.getInventory = function() {
//     if (this.inventory.length) {
//         return this.inventory
//     }
//     return false;
// }

// //get health function 
// Player.prototype.getHealth = function() {
//     return `${this.name}'s health is now ${this.health}!`;
// }

// Player.prototype.isAlive = function() {
//     if (this.health === 0) {
//         return false;
//     }
//     return true;
// }

// Player.prototype.reduceHealth = function(health) {
//     this.health -= health;

//     if(this.health < 0) {
//         this.health = 0;
//     }
// }

// Player.prototype.getAttackValue = function() {
//     const min = this.strength - 5;
//     const max = this.strength + 5;

//     return Math.floor(Math.random() * (max - min) + min);
// }

// Player.prototype.addPotion = function(potion) {
//     this.inventory.push(potion);
// }

// Player.prototype.usePotion = function(index) {
//     const potion = this.getInventory().splice(index, 1)[0];

//     switch (potion.name) {
//         case 'agility':
//             this.agility += potion.value;
//             break;
//         case 'health':
//             this.health += potion.value;
//             break;
//         case 'strength':
//             this.strength += potion.value;
//             break;
//     }
// }


class Player extends Character {
    constructor(name = '') {
      super(name);
  
      this.inventory = [new Potion('health'), new Potion()];
    }
  
    getStats() {
      return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
      };
    }
  
    getInventory() {
      if (this.inventory.length) {
        return this.inventory;
      }
      return false;
    }
  
    addPotion(potion) {
      this.inventory.push(potion);
    }
  
    usePotion(index) {
      const potion = this.inventory.splice(index, 1)[0];
  
      switch (potion.name) {
        case 'agility':
          this.agility += potion.value;
          break;
        case 'health':
          this.health += potion.value;
          break;
        case 'strength':
          this.strength += potion.value;
          break;
      }
    }
  }
module.exports = Player;

