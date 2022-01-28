// Create a car object with the items: Make, Model, Year, Milage, and Color. 
// Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, 
// and runErrands method. 
// Each of these methods should affect the car’s milegae 
// adding to it each time and console logging the old 
// milegae and the new milegae.
// driveToWork = 33 miles
// driveAroundTheWorld = 24,000 miles
// runErrands = 30 miles 

// Example 1:
// car.driveToWork();
// Output: old mileage: 2000 | new mileagea: 2033
// Explanation: 2000 + 33 = 2033
// Example 2:
// car.driveAroundTheWorld();
// Output: old mileage: 2033 | new mileagea: 26033 
// Example 2:
// car.runErrands();
// Output: old mileage: 26033 | new mileagea: 26063


let car = {
    make: "hyundai",
    model: "sonata",
    year: "2014",
    milegae: 2000,
    color: "silver",
    driveToWork:() => {
      console.log(`Your old milegae is ${car.milegae}`);
      car.milegae = car.milegae + 33,
      console.log(`You drove to work, your new milege is ${car.milegae}`);
    },
    driveAroundTheWorld:() => {
      console.log(`Your old milegae is ${car.milegae}`);
      car.milegae = car.milegae + 24000,
      console.log(`You drove around the world, your new milege is ${car.milegae}`);
    },
    runErrands:() => {
      console.log(`Your old milegae is ${car.milegae}`);
      car.milegae = car.milegae + 30,
      console.log(`You ran errands, your new milege is ${car.milegae}`);
    }
}

car.driveToWork()
car.driveAroundTheWorld()
car.runErrands()
