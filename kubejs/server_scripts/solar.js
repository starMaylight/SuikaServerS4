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
      event.custom({
        "type":"solarforge:solar_smelting",
        "ingredients": [
          {
            "item": "minecraft:gold_ingot"
          },
          {
            "item": "solarforge:energy_dust",
            "count": 8
          },
          {
            "item": "minecraft:redstone",
            "count": 16
          }
        ],
        "result": "solarforge:energetic_ingot",
        "time": 150,
        "requires": "solar_forge_progression_solar_lens_craft",
        "category": "solar_category.smelting"
      })
      event.custom({
        "type":"solarforge:solar_smelting",
        "ingredients": [
          {
            "item": "minecraft:iron_ingot"
          },
          {
            "item": "solarforge:enderite_essence",
            "count": 16
          },
          {
            "item": "minecraft:ender_pearl",
            "count": 4
          },
          {
            "item": "solarforge:void_dust",
            "count": 8
          }
        ],
        "result": "solarforge:enderium_ingot",
        "time": 400,
        "requires": "solar_forge_progression_solar_lens_craft",
        "category": "solar_category.smelting"
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