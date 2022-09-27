const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
    const {
    name,
    origin,
    minHeight,
    maxHeight,
    minWeight,
    maxWeight,
    lifeSpan,
    bredFor,
    temperament,
    } = req.body;

    let newBreed = await Dog.create({
    name: name,
    photo: "https://m.media-amazon.com/images/I/61NEYU1MqbL._AC_SY679_.jpg",
    origin: origin,
    minHeight: minHeight,
    maxHeight: maxHeight,
    minWeight: minWeight,
    maxWeight: maxWeight,
    lifeSpan: lifeSpan,
    bredFor: bredFor,
    });

    let temps = await Temperament.findAll({
    where: {
        name: temperament,
    },
    });

    newBreed.addTemperament(temps);

    res.status(200).send(newBreed);
});

module.exports = router;