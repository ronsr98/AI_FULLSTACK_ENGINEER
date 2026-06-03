// Exercise 1
const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {           // added this.
      this.hungry = false;       // added this.
      console.log('Im no longer hungry!')
    }
  }
}

person.feed() //should log "Im no longer hungry!"


// Exercise 2 - two errors
const pump = function (amount) {
  this.liters += amount;                                       // error 1: was liters += amount
  console.log('You put ' + amount + ' liters in ' + this.name); // error 2: was this.amount (amount is a parameter)
};

const garage = {
  car1: {
    name: 'Audi',
    liters: 3,
    fillTank: pump
  },
  car2: {
    name: 'Mercedes',
    liters: 1,
    fillTank: pump
  }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ',  garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);


// Exercise 3 - two errors
const pumpFuel = function (plane) {
  plane.fuel += 1;
};

const airplane = {
  fuel: 0,                       // error 1: the fuel property was missing
  fly: function () {
    if (this.fuel < 2) {         // error 2: was fuel
      return 'on the ground!';
    }
    else {
      return 'flying!';
    }
  }
};

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Take off! ' + airplane.fly());


// Exercise 4 - add a stealCoins method
const tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function (amount) {
    this.coinCount -= amount;
  }
};

tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);


// Exercise 5 - 3 syntax errors + this
const revealSecret = function () {
  return this.secret;            // was return secret
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll();
  console.log(person.name + " said: " + result);  // syntax fix: was missing the +
};

const avi = {
  name: "Avi",                   // syntax fix: was missing the comma
  secret: "Im scared of snakes!"
};

const narkis = {
  name: "Narkis",                // syntax fix: was missing the comma
  secret: "I don't have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);


// Exercise 6 / 6.1 - makeDrink (no nested ifs)
const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    const required = this.drinkRequirements[drinkType];

    if (required === undefined) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }
    if (this.beans < required) {
      console.log("Sorry, we're all out of beans!");
      return;
    }

    this.beans -= required;
    console.log("Here's your " + drinkType + "! Beans left: " + this.beans);
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"


// Extension 1 + 2 - a coffee business with money, buyBeans and buyDrink
const beanPrice = 0.25; // how much one bean costs us to buy

const coffeeBusiness = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 3 },
    doubleShot: { beanRequirement: 15, price: 7 },
    frenchPress: { beanRequirement: 12, price: 6 }
  },

  makeDrink: function (drinkType) {
    const drink = this.drinkRequirements[drinkType];

    if (drink === undefined) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }
    if (this.beans < drink.beanRequirement) {
      console.log("Sorry, we're all out of beans!");
      return;
    }

    this.beans -= drink.beanRequirement;
    console.log("Here's your " + drinkType + "! Beans left: " + this.beans);
  },

  buyBeans: function (numBeans) {
    const cost = numBeans * beanPrice;

    if (this.money < cost) {
      console.log("Not enough money to buy " + numBeans + " beans");
      return;
    }

    this.money -= cost;
    this.beans += numBeans;
    console.log("Bought " + numBeans + " beans. Beans: " + this.beans + ", Money: " + this.money);
  },

  buyDrink: function (drinkType) {
    const drink = this.drinkRequirements[drinkType];

    if (drink === undefined) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }

    this.money += drink.price;
    console.log("Sold a " + drinkType + " for " + drink.price + ". Money: " + this.money);
    this.makeDrink(drinkType);
  }
}

coffeeBusiness.buyDrink("latte");
coffeeBusiness.buyBeans(40);
coffeeBusiness.buyDrink("doubleShot");
