// Ninja Class
class Ninja {
    constructor(name, health=100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;

    }


// Methods

    sayName() {
        console.log(this.name);
         }
     showStats(){
         console.log(this.name + " Strength = " + this.strength + " Speed = " + this.speed + " Health = " + this.health);

     }    

     drinkSake() {
         this.health +=10 ;
     }

 


    }    
// Sensei Class
// extends is inheritance 
class Sensei extends Ninja {
    constructor (name, wisdom = 10) {
        super(name, 200, 10,10)
        this.wisdom = wisdom;
    }


        speakWisdom() {

            // super allows mw to pull from the parent class
            super.drinkSake();
            console.log("What one programmer can do in one month, two programmers can do in two months.");
    
         }

    }



// Ninja Calls
// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.drinkSake()
// ninja1.showStats();


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
