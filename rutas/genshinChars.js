const express = require('express')
const router = express.Router()
const GenshinChar = require('../models/genshinChar')

//Obtener Todos
// ^ Genshin Listo
router.get('/', async (req, res) => {
    try {
        const genshinChars = await GenshinChar.find()
        res.json(genshinChars)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Obtener Uno
// ^ Genshin Listo
router.get('/:id', getGenshinChar, (req, res) => {
    res.json(res.genshinChar)
})

//Agregar
// ^ Genshin Listo
router.post('/', async (req, res) => {
    const talentsData = req.body.talents;
    const constellationsData = req.body.constellations;

    const genshinChar = new GenshinChar({
        charName: req.body.charName,
        quality: req.body.quality,
        element: req.body.element,
        stats: {
            level: req.body.stats.level,
            baseHp: req.body.stats.baseHp,
            baseAtk: req.body.stats.baseAtk,
            baseDef: req.body.stats.baseDef,
            specialStat: {
                stat: req.body.stats.specialStat.stat,
                baseStat: req.body.stats.specialStat.baseStat
            }
        },
        talents: talentsData,
        constellations: constellationsData,
        weapon: req.body.weapon,
        region: req.body.region,
        gender: req.body.gender,
        releaseDate: req.body.releaseDate,
        version: req.body.version,
        icon: req.body.icon
    })

    try {
        const newGenshinChar = await genshinChar.save()
        res.status(201).json(newGenshinChar)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Actualizar
// ^ Genshin Listo
router.patch('/:id', getGenshinChar, async (req, res) => {
    if (req.body.charName != null && req.body.charName != "") {
        res.genshinChar.charName = req.body.charName
    }
    if (req.body.quality != null && req.body.quality != "") {
        res.genshinChar.quality = req.body.quality
    }
    if (req.body.element != null && req.body.element != "") {
        res.genshinChar.element = req.body.element
    }
    if (req.body.stats.level != null && req.body.stats.level != "") {
        res.genshinChar.stats.level = req.body.stats.level
    }
    if (req.body.stats.baseHp != null && req.body.stats.baseHp != "") {
        res.genshinChar.stats.baseHp = req.body.stats.baseHp
    }
    if (req.body.stats.baseAtk != null && req.body.stats.baseAtk != "") {
        res.genshinChar.stats.baseAtk = req.body.stats.baseAtk
    }
    if (req.body.stats.baseDef != null && req.body.stats.baseDef != "") {
        res.genshinChar.stats.baseDef = req.body.stats.baseDef
    }
    if (req.body.stats.specialStat.stat != null && req.body.stats.specialStat.stat != "") {
        res.genshinChar.stats.specialStat.stat = req.body.stats.specialStat.stat
    }
    if (req.body.stats.specialStat.baseStat != null && req.body.stats.specialStat.baseStat != "") {
        res.genshinChar.stats.specialStat.baseStat = req.body.stats.specialStat.baseStat
    }
    if (req.body.talents != null && req.body.talents != "") {
        res.genshinChar.talents = req.body.talents
    }
    if (req.body.constellations != null && req.body.constellations != "") {
        res.genshinChar.constellations = req.body.constellations
    }
    if (req.body.weapon != null && req.body.weapon != "") {
        res.genshinChar.weapon = req.body.weapon
    }
    if (req.body.region != null && req.body.region != "") {
        res.genshinChar.region = req.body.region
    }
    if (req.body.gender != null && req.body.gender != "") {
        res.genshinChar.gender = req.body.gender
    }
    if (req.body.releaseDate != null && req.body.releaseDate != "") {
        res.genshinChar.releaseDate = req.body.releaseDate
    }
    if (req.body.version != null && req.body.version != "") {
        res.genshinChar.version = req.body.version
    }
    if (req.body.icon != null && req.body.icon != "") {
        res.genshinChar.icon = req.body.icon
    }

    try {
        const updateGenshinChar = await res.genshinChar.save()
        res.json(updateGenshinChar)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Eliminar
// ^ Genshin Listo
router.delete('/:id', getGenshinChar, async (req, res) => {
    try {
        await res.genshinChar.deleteOne()
        res.json({ message: 'Personaje Eliminado' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// ^ Genshin Listo
async function getGenshinChar(req, res, next) {
    let genshinChar
    try {
        genshinChar = await GenshinChar.findById(req.params.id)
        if (genshinChar == null) {
            return res.status(400).json({ message: 'No se encontró al Personaje' })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

    res.genshinChar = genshinChar
    next()
}

module.exports = router