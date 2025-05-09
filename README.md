---
description: Genshin API documentation
---

# Simple Genshin API

### What can you do with it?

You can add basic character information using a POST request with JSON.

Here's an example:

```
 

{
 

    "charName": "Tartaglia",
 

    "quality": 5,
 

    "element": "Hydro",
 

    "stats": {
 

        "level": 90,
 

        "baseHp": 13103,
 

        "baseAtk": 301,
 

        "baseDef": 814,
 

        "specialStat": {
 

            "stat": "Elemental DMG Bonus",
 

            "baseStat": 28.8
 

        }
 

    },
 

    "talents": [
 

        {
 

            "talentName": "Cutting Torrent",
 

            "talentType": "Normal Attack",
 

            "talentEffect": "Normal Attack\nPerforms up to 6 consecutive shots with a bow.\n\nCharged Attack\nPerforms a more precise Aimed Shot with increased DMG.\nWhile aiming, the power of Hydro will accumulate on the arrowhead. An arrow fully charged with the torrent will deal Hydro DMG and apply the Riptide status.\n\nRiptide\nOpponents affected by Riptide will suffer from AoE Hydro DMG effects when attacked by Tartaglia in various ways. DMG dealt in this way is considered Normal Attack DMG.\nRiptide Flash: A fully-charged Aimed Shot that hits an opponent affected by Riptide deals consecutive bouts of AoE DMG. Can occur once every 0.7s.\nRiptide Burst: Defeating an opponent affected by Riptide creates a Hydro burst that inflicts the Riptide status on nearby opponents hit.\n\nPlunging Attack\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.\nWhen Tartaglia is in Foul Legacy: Raging Tide's Melee Stance, he cannot perform a plunging attack."
 

        },
 

        {
 

            "talentName": "Foul Legacy: Raging Tide",
 

            "talentType": "Elemental Skill",
 

            "talentEffect": "Unleashes a set of weaponry made of pure water, dealing Hydro DMG to surrounding opponents and entering Melee Stance.\nIn this Stance, Tartaglia's Normal and Charged Attacks are converted to Hydro DMG that cannot be overridden by any other elemental infusion and change as follows:\n\nNormal Attack\nPerforms up to 6 consecutive Hydro strikes.\nCharged Attack\nConsumes a certain amount of Stamina to unleash a cross slash, dealing Hydro DMG.\n\nRiptide Slash\nHitting an opponent affected by Riptide with a melee attack unleashes a Riptide Slash that deals AoE Hydro DMG. DMG dealt in this way is considered Elemental Skill DMG, and can only occur once every 1.5s.\n\nAfter 30s, or when the ability is unleashed again, this skill will end. Tartaglia will return to his Ranged Stance and this ability will enter CD.\nThe longer Tartaglia stays in his Melee Stance, the longer the CD.\nIf the return to a ranged stance occurs automatically after 30s, the CD is even longer."
 

        },
 

        {
 

            "talentName": "Havoc: Obliteration",
 

            "talentType": "Elemental Burst",
 

            "talentEffect": "Performs different attacks based on what stance Tartaglia is in when casting.\n\nRanged Stance: Flash of Havoc\nSwiftly fires a Hydro-imbued magic arrow, dealing AoE Hydro DMG and applying the Riptide status.\nReturns a portion of its Energy Cost after use.\n\nMelee Stance: Light of Obliteration\nPerforms a slash with a large AoE, dealing massive Hydro DMG to all surrounding opponents, which triggers Riptide Blast.\n\nRiptide Blast\nWhen the obliterating waters hit an opponent affected by Riptide, it clears their Riptide status and triggers a Hydro Explosion that deals AoE Hydro DMG.\nDMG dealt in this way is considered Elemental Burst DMG."
 

        },
 

        {
 

            "talentName": "Never Ending",
 

            "talentType": "1st Ascension Passive",
 

            "talentEffect": "Extends Riptide duration by 8s."
 

        },
 

        {
 

            "talentName": "Sword of Torrents",
 

            "talentType": "4th Ascension Passive",
 

            "talentEffect": "When Tartaglia is in Foul Legacy: Raging Tide's Melee stance, on dealing a CRIT hit, Normal and Charged Attacks apply the Riptide status effects to opponents."
 

        },
 

        {
 

            "talentName": "Master of Weaponry",
 

            "talentType": "Utility Passive",
 

            "talentEffect": "Increases your own party members' Normal Attack Level by 1."
 

        }
 

    ],
 

    "constellations": [
 

        {
 

            "constName": "Foul Legacy: Tide Withholder",
 

            "constLevel": 1,
 

            "constEffect": "Decreases the CD of Foul Legacy: Raging Tide by 20%"
 

        },
 

        {
 

            "constName": "Foul Legacy: Understream",
 

            "constLevel": 2,
 

            "constEffect": "When opponents affected by Riptide are defeated, Tartaglia regenerates 4 Elemental Energy.When opponents affected by Riptide are defeated, Tartaglia regenerates 4 Elemental Energy."
 

        },
 

        {
 

            "constName": "Abyssal Mayhem: Vortex of Turmoil",
 

            "constLevel": 3,
 

            "constEffect": "Increases the Level of Foul Legacy: Raging Tide by 3.\nMaximum upgrade level is 15."
 

        },
 

        {
 

            "constName": "Abyssal Mayhem: Hydrospout",
 

            "constLevel": 4,
 

            "constEffect": "If Tartaglia is in Foul Legacy: Raging Tide's Melee Stance, triggers Riptide Slash against opponents on the field affected by Riptide every 4s, otherwise, triggers Riptide Flash.\nRiptide Slashes and Riptide Flashes triggered by this Constellation effect are not subject to the time intervals that would typically apply to these two Riptide effects, nor do they have any effect on those time intervals."
 

        },
 

        {
 

            "constName": "Havoc: Formless Blade",
 

            "constLevel": 5,
 

            "constEffect": "Increases the Level of Havoc: Obliteration by 3.\nMaximum upgrade level is 15."
 

        },
 

        {
 

            "constName": "Havoc: Annihilation",
 

            "constLevel": 6,
 

            "constEffect": "When Havoc: Obliteration is cast in Melee Stance, the CD of Foul Legacy: Raging Tide is reset.\nThis effect will only take place once Tartaglia returns to his Ranged Stance."
 

        }
 

    ],
 

    "weapon": "Bow",
 

    "region": "Snezhnaya",
 

    "gender": "Male",
 

    "releaseDate": "2020-11-11",
 

    "version": 1.1,
 

    "icon": "https://static.wikia.nocookie.net/gensin-impact/images/3/3c/Tartaglia_Card.png/revision/latest/scale-to-width-down/281?cb=20231114211512"
 

}
 


 

{
 

    "charName": "Kaedehara Kazuha",
 

    "quality": 5,
 

    "element": "Anemo",
 

    "stats": {
 

        "level": 90,
 

        "baseHp": 13348,
 

        "baseAtk": 296,
 

        "baseDef": 806,
 

        "specialStat": {
 

            "stat": "EM",
 

            "baseStat": 115.2
 

        }
 

    },
 

    "talents": [
 

        {
 

            "talentName": "Garyuu Bladework",
 

            "talentType": "Normal Attack",
 

            "talentEffect": "Normal Attack\nPerforms up to 5 rapid strikes.\n\nCharged Attack\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\n\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact. If this Plunging Attack is triggered by Chihayaburu, it will be converted to Plunging Attack: Midare Ranzan.\n\nPlunging Attack: Midare Ranzan\nWhen a Plunging Attack is performed using the effects of the Elemental Skill Chihayaburu, Plunging Attack DMG is converted to Anemo DMG and will create a small wind tunnel via a secret blade technique that pulls in nearby objects and opponents."
 

        },
 

        {
 

            "talentName": "Chihayaburu",
 

            "talentType": "Elemental Skill",
 

            "talentEffect": "Unleashes a secret technique as fierce as the rushing wind that pulls objects and opponents towards Kazuha's current position before launching opponents within the AoE, dealing Anemo DMG and lifting Kazuha into the air on a rushing gust of wind.\nWithin 10s of remaining airborne after casting Chihayaburu, Kazuha can unleash a powerful Plunging Attack known as Midare Ranzan.\n\nPress\nCan be used in mid-air.\n\nHold\nCharges up before unleashing greater Anemo DMG over a larger AoE than Press Mode.\n\nPlunging Attack: Midare Ranzan\nWhen a Plunging Attack is performed using the effects of the Elemental Skill Chihayaburu, Plunging Attack DMG is converted to Anemo DMG. On landing, Kazuha creates a small wind tunnel via a secret blade technique that pulls in nearby objects and opponents.\nMidare Ranzan's DMG is considered Plunging Attack DMG."
 

        },
 

        {
 

            "talentName": "Kazuha Slash",
 

            "talentType": "Elemental Burst",
 

            "talentEffect": "The signature technique of Kazuha's self-styled bladework — a single slash that strikes with the force of the first winds of autumn, dealing AoE Anemo DMG.\nThe blade's passage will leave behind a field named 'Autumn Whirlwind' that periodically deals AoE Anemo DMG to opponents within its range.\n\nElemental Absorption\nIf Autumn Whirlwind comes into contact with Hydro/Pyro/Cryo/Electro, it will deal additional elemental DMG of that type.\nElemental Absorption may only occur once per use."
 

        },
 

        {
 

            "talentName": "Soumon Swordsmanship",
 

            "talentType": "1st Ascension Passive",
 

            "talentEffect": "If Chihayaburu comes into contact with Hydro/Pyro/Cryo/Electro when cast, Chihayaburu will absorb that element and if Plunging Attack: Midare Ranzan is used before the effect expires, it will deal an additional 200% ATK of the absorbed elemental type as DMG. This will be considered Plunging Attack DMG.\nElemental Absorption may only occur once per use of Chihayaburu."
 

        },
 

        {
 

            "talentName": "Poetics of Fuubutsu",
 

            "talentType": "4th Ascension Passive",
 

            "talentEffect": "Upon triggering a Swirl reaction, Kaedehara Kazuha will grant all party members a 0.04% Elemental DMG Bonus to the element absorbed by Swirl for every point of Elemental Mastery he has for 8s. Bonuses for different elements obtained through this method can co-exist."
 

        },
 

        {
 

            "talentName": "Cloud Strider",
 

            "talentType": "Utility Passive",
 

            "talentEffect": "Decreases sprinting Stamina consumption for your own party members by 20%.\nNot stackable with Passive Talents that provide the exact same effects."
 

        }
 

    ],
 

    "constellations": [
 

        {
 

            "constName": "Scarlet Hills",
 

            "constLevel": 1,
 

            "constEffect": "Decreases Chihayaburu's CD by 10%.\nUsing Kazuha Slash resets the CD of Chihayaburu."
 

        },
 

        {
 

            "constName": "Yamaarashi Tailwind",
 

            "constLevel": 2,
 

            "constEffect": "The Autumn Whirlwind field created by Kazuha Slash has the following effects:\nIncreases Kaedehara Kazuha's own Elemental Mastery by 200 for its duration.\nIncreases the Elemental Mastery of characters within the field by 200.\n\nThe Elemental Mastery-increasing effects of this Constellation do not stack."
 

        },
 

        {
 

            "constName": "Maple Monogatari",
 

            "constLevel": 3,
 

            "constEffect": "Increases the Level of Chihayaburu by 3.\nMaximum upgrade level is 15."
 

        },
 

        {
 

            "constName": "Oozora Genpou",
 

            "constLevel": 4,
 

            "constEffect": "When Kaedehara Kazuha's Energy is lower than 45, he obtains the following effects:\nPressing or Holding Chihayaburu regenerates 3 or 4 Energy for Kaedehara Kazuha, respectively.\nWhen gliding, Kaedehara Kazuha regenerates 2 Energy per second."
 

        },
 

        {
 

            "constName": "Wisdom of Bansei",
 

            "constLevel": 5,
 

            "constEffect": "Increases the Level of Kazuha Slash by 3.\nMaximum upgrade level is 15."
 

        },
 

        {
 

            "constName": "Crimson Momiji",
 

            "constLevel": 6,
 

            "constEffect": "After using Chihayaburu or Kazuha Slash, Kaedehara Kazuha gains an Anemo Infusion for 5s. Additionally, each point of Elemental Mastery will increase the DMG dealt by Kaedehara Kazuha's Normal, Charged, and Plunging Attacks by 0.2%."
 

        }
 

    ],
 

    "weapon": "Sword",
 

    "region": "Inazuma",
 

    "gender": "Male",
 

    "releaseDate": "2021-06-29",
 

    "version": 1.6,
 

    "icon": "https://static.wikia.nocookie.net/gensin-impact/images/8/81/Kaedehara_Kazuha_Card.png/revision/latest/scale-to-width-down/281?cb=20210607100841"
 

}
 

```

As you can see, this is Tartaglia's info format as a JSON. The only thing you need to do to add another character is to open the "route.rest" file and complete the request. You can also use any application like Postman to do it.

If you want to modify the JSON format, you can do it in the "genshinChar.js" file. Finally, if you want to collaborate, feel free to fork!
