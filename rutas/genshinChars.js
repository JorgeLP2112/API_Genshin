const express = require('express')
const router = express.Router()
const GenshinChar = require('../models/genshinChar')
const _ = require('lodash')

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

    const fieldsToUpdate = [
        'charName',
        'quality',
        'element',
        'stats.level',
        'stats.baseHp',
        'stats.baseAtk',
        'stats.baseDef',
        'stats.specialStat.stat',
        'stats.specialStat.baseStat',
        'talents',
        'constellations',
        'weapon',
        'region',
        'gender',
        'releaseDate',
        'version',
        'icon'
    ];

    // Filtra las propiedades de req.body que no son nulas ni están vacías
    const updatedFields = _.pickBy(req.body, (value) => value != null && value !== "");

    // Actualiza res.genshinChar con las propiedades filtradas
    _.merge(res.genshinChar, updatedFields);

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