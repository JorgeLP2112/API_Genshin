const mongoose = require('mongoose')

const talentSchema = new mongoose.Schema({
    talentName: {
        type: String,
        required: true
    },
    talentType: {
        type: String,
        required: true
    },
    talentEffect: {
        type: String,
        required: true
    },
});

const constellationSchema = new mongoose.Schema({
    constName: {
        type: String,
        required: true
    },
    constLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    constEffect: {
        type: String,
        required: true
    },
});

const genshinCharSchema = new mongoose.Schema({
    charName: {
        type: String,
        required: true
    },
    quality: {
        type: Number,
        required: true,
        min: 4,
        max: 5
    },
    element: {
        type: String,
        required: true,
        enum: ["Pyro", "Hydro", "Cryo", "Dendro", "Geo", "Anemo", "Electro"]
    },
    stats: {
        level: {
            type: Number,
            required: true,
            min: 1,
            max: 90
        },
        baseHp: {
            type: Number,
            required: true
        },
        baseAtk: {
            type: Number,
            required: true
        },
        baseDef: {
            type: Number,
            required: true
        },
        specialStat: {
            stat: {
                type: String,
                required: true,
                enum: ["HP", "ATK", "DEF", "CRIT DMG", "CRIT RATE", "ER", "EM", "Elemental DMG Bonus"]
            },
            baseStat: {
                type: Number,
                required: true
            }
        }
    },
    talents: [talentSchema],
    constellations: [constellationSchema],
    weapon: {
        type: String,
        required: true,
        enum: ["Sword", "Bow", "Claymore", "Catalyst", "Polearm"]
    },
    region: {
        type: String,
        required: true,
        enum: ["Mondstadt", "Liyue", "Inazuma", "Sumeru", "Fontaine", "Snezhnaya"]
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    releaseDate: {
        type: Date,
        required: true
    },
    version: {
        type: Number,
        required: true,
        min: 1.0,
        max: 4.2
    },
    icon: {
        type: String,
        required: true
    }
})
 
module.exports = mongoose.model('GenshinChar', genshinCharSchema)