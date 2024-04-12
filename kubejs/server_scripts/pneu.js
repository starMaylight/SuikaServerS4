onEvent('recipes', event => {
    event.remove({output: 'pneumaticcraft:drone'})
    event.remove({output:'pneumaticcraft:pressure_chamber_interface'})
    event.custom({
        "type": "solarforge:infusing_crafting",
        "pattern": [
          " X ",
          "XFX",
          "ZXZ"
        ],
        "keys": {
          "X": {
            "item": "pneumaticcraft:turbine_rotor"
          },
          "F": {
            "item": "create_things_and_misc:radar"
          },
          "Z": {
            "item": "kubejs:illidium_plate"
          }
        },
        "output": {
          "item": "pneumaticcraft:drone"
        },
        "fragment": "solar_infuser",
        "time": 700
      })
      event.custom({
        "type": "solarforge:infusing_crafting",
        "pattern": [
          "AXA",
          "XFX",
          "ZXZ"
        ],
        "keys": {
          "A": {
            "item": "pneumaticcraft:logistics_core"
              },
          "X": {
            "item": "pneumaticcraft:turbine_rotor"
          },
          "F": {
            "item": "pneumaticcraft:drone"
          },
          "Z": {
            "item": "kubejs:illidium_plate"
          }
        },
        "output": {
          "item": "pneumaticcraft:logistics_drone"
        },
        "fragment": "solar_infuser",
        "time": 700
      })
      event.custom({
        "type": "solarforge:infusing_crafting",
        "pattern": [
          "AXA",
          "XFX",
          "ZXZ"
        ],
        "keys": {
          "A": {
            "tag": "crops"
              },
          "X": {
            "item": "pneumaticcraft:turbine_rotor"
          },
          "F": {
            "item": "pneumaticcraft:drone"
          },
          "Z": {
            "item": "kubejs:illidium_plate"
          }
        },
        "output": {
          "item": "pneumaticcraft:harvesting_drone"
        },
        "fragment": "solar_infuser",
        "time": 700
      })
      event.custom({
        "type": "solarforge:infusing_crafting",
        "pattern": [
          "AXA",
          "XFX",
          "ZXZ"
        ],
        "keys": {
          "A": {
            "item": "'minecraft:iron_sword'"
              },
          "X": {
            "item": "pneumaticcraft:turbine_rotor"
          },
          "F": {
            "item": "pneumaticcraft:drone"
          },
          "Z": {
            "item": "kubejs:illidium_plate"
          }
        },
        "output": {
          "item": "pneumaticcraft:guard_drone"
        },
        "fragment": "solar_infuser",
        "time": 700
      })
      event.custom({
        "type": "solarforge:infusing_crafting",
        "pattern": [
          "AXA",
          "XFX",
          "ZXZ"
        ],
        "keys": {
          "A": {
            "item": "minecraft:hopper"
              },
          "X": {
            "item": "pneumaticcraft:turbine_rotor"
          },
          "F": {
            "item": "pneumaticcraft:drone"
          },
          "Z": {
            "item": "kubejs:illidium_plate"
          }
        },
        "output": {
          "item": "pneumaticcraft:collector_drone"
        },
        "fragment": "solar_infuser",
        "time": 700
      })
      event.shaped('pneumaticcraft:pressure_chamber_interface', [
        'AAA',
        'ASA',
        'AAA'
      ], {
        S: 'magickcore:context_core',
        A: 'pneumaticcraft:pressure_chamber_wall'
      })
      
})