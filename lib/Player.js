const Potion = require('../lib/Potion');

// this is similar to the Potion() constructor we created earlier. the main differenc is that the name parameter sets a default empty string if no name is proivded.
function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health', new Potion())]

    //When using prototype, however, you are only creating the method once on the constructor itself. New player objects simply inherit the method from the constructor rather than having their own instances of that method. Such inheritance can traverse multiple levels, meaning if the method being called doesn't exist on Player(), JavaScript will look for it on the next constructor up the chain. In this case, the next constructor would be the built-in Object data type.
    //Because of this chain, you can call player.toString() even though you didn't explicitly define a toString() method anywhere. It was inherited from Object two levels up. In JavaScript, this is known as the prototype chain. 
    //returns an object with various player properties
    Player.prototype.getStats = function() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    // returns the inventory array or false if empty
    Player.prototype.getInventory = function() {
        if (this.inventory.length) {
            return this.inventory
        }
        return false;
    }
}

module.exports = Player;