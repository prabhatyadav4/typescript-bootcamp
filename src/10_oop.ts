class chai {
    // Public properties store the tea's flavour and price.
    flavour: string;
    price: number

    // The constructor initializes each chai object.
    constructor(flavour: string, price: number) {
        this.flavour = flavour
        this.price = price
    }
}

const masalaChai = new chai("Ginger", 20)
// Public properties can be changed after object creation.
masalaChai.flavour = "masala"

// Access Modifiers

class Chai {
    // Public members can be accessed from anywhere.
    public flavour: string = "Masala"

    // Private members are accessible only inside this class.
    private secretIngredients = "Cardamom"

    // A public method can safely expose private data.
    reveal() {
        return this.secretIngredients
    }
}

const c = new Chai()
// c.secretIngredients()

class Shop {
    // Protected members are available in this class and its subclasses.
    protected shopName: string = "Chai Corner"
}

class Branch extends Shop {
    // A subclass can access the protected shopName property.
    getName() {
        return this.shopName 
    }
}

const shopDetails = new Branch().getName

class Wallet {
    // The # syntax creates a JavaScript private field.
    #balance = 100

    getBalance() {
        return this.#balance
    }
}

const wallet = new Wallet().getBalance

class Cup {
    // readonly properties cannot be reassigned after construction.
    readonly capacity: number = 250

    constructor(capacity: number) {
        this.capacity = capacity
    }
}

// Controlled Gates

class ModernChai {
    // The backing field is kept private and controlled through an accessor.
    private _sugar = 2

    get sugar() {
        return this._sugar
    }

    set sugar(value: number) {
        // Reject sugar values that exceed the allowed limit.
        if(value > 5)   throw new Error("Too Sweet")
        this._sugar = value
    }
}

const chaiOrder = new ModernChai()
chaiOrder.sugar = 5

// static keyword

class EkChai {
    // Static members belong to the class rather than its instances.
    static shopName = "ChaiCode Cafe"

    constructor(public flavour: string) {}
}

console.log(EkChai.shopName)

// Abstract 

abstract class Drink {
    // Every concrete drink must provide its own make implementation.
    abstract make(): void
}

class myChai extends Drink {
    make() {
        console.log("Brewing Chai")
    }
}

// Composition

class Heater {
    // The heater is a dependency used by chaiMaker.
    heat() {}
}

class chaiMaker {
    // Composition: chaiMaker receives a Heater instead of creating one.
    constructor(private heater: Heater) {}

    make() {
        this.heater.heat
    }
}