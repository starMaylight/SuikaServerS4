onEvent('recipes', event => {
    //Lace add
    //onEvent('recipes', event => {})
    //event.remove({output: })
    event.remove({output: 'solarforge:runestone'})

    event.recipes.create.mixing(Item.of('solarforge:runestone',8),[
		'#forge:stone',
 	 	Item.of('minecraft:flint')
	])
    event.custom({
        "type": "botanypots:crop",
        "seed": {
          "item": "solarforge:solar_flower"
        },
        "categories": [
          "dirt",
          "farmland"
        ],
        "growthTicks": 1200,
        "display": {
          "type": "botanypots:aging",
          "block": "solarforge:solar_flower"
        },
        "drops": [
          {
            "chance": 0.5,
            "output": {
              "item": "solarforge:solar_flower"
            },
            "minRolls": 1,
            "maxRolls": 2
          },
          {
            "chance": 0.85,
            "output": {
              "item": "solarforge:energy_dust"
            },
            "minRolls": 1,
            "maxRolls": 4
          }
        ]
      })
      event.custom({
        "type": "botanypots:crop",
        "seed": {
          "item": "solarforge:void_lily"
        },
        "categories": [
          "dirt",
          "farmland"
        ],
        "growthTicks": 1200,
        "display": {
          "type": "botanypots:aging",
          "block": "solarforge:void_lily"
        },
        "drops": [
          {
            "chance": 0.5,
            "output": {
              "item": "solarforge:void_lily"
            },
            "minRolls": 1,
            "maxRolls": 2
          },
          {
            "chance": 0.85,
            "output": {
              "item": "solarforge:void_dust"
            },
            "minRolls": 1,
            "maxRolls": 4
          }
        ]
      })
    /*event.custom({
        "type": "solarforge:infusing_crafting",
        "pattern": [
          "Z#Z",
          "XFX",
          "Z#Z"
        ],
        "keys": {
          "#": {
            "item": "minecraft:iron_block"
          },
          "X": {
            "item": "cyclic:gem_obsidian"
          },
          "F": {
            "item": "solarcraft:infusing_crafting_table"
          },
          "Z": {
            "item": "solarcraft:energy_dust"
          }
        },
        "output": {
          "item": "solarforge:solar_infuser",
          "nbt":"solarcraft_runic_energy:{}"
        },
        "fragment": "solar_infuser",
        "time": 700
      })*/
})