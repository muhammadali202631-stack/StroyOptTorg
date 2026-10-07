function  Car(name , speed ){
    this.name = name, 
    this.speed = speed, 

    this.accelerate = function(){
        console.log(`${this.name}: ${this.speed}, ${this.speed += 10 } km/h `);   
    }

    this.brake = function(){
        console.log(`${this.name}: ${this.speed}, ${this.speed  -= 5} km/h `);   
    }
}

const bmw = new Car ("BMW", 120)
const mers = new Car ("Mersedis", 95)

bmw.brake()
mers.accelerate()
bmw.brake()
mers.accelerate()
bmw.brake()
mers.accelerate()
bmw.brake()
mers.accelerate()