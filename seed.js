// requires all the database models
const db = require ('./models');

// categories
const flower_list = [

]

db.Flower.deleteMany({}, function(err, flowers) {
    console.log('removed all flowers');
    flower_list.forEach( (flowerData) => {
        const flower = new db.Flower({
            name: flowerData.name,
            scientificName: flowerData.scientificName,
            meaning: flowerData.meaning,
            description: flowerData.description,
            image: flowerData.image,
        });
        project.save( (err, savedFlower) => {
            if (err) {console.log(err)}
            console.log(`Saved ${savedFlower.name}`)
        });
    });
});