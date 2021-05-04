// Ninja Class

class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength =3;

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


// Creating a new Ninja and calling the Methods
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake()
ninja1.showStats();