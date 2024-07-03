onEvent('recipes', event => {
    event.remove({id:'planttech2:plantium_ingot4'})
    event.remove({id:'planttech2:plantium_ingot'})
    event.remove({output:'planttech2:cropbars'})
    //first_seed
    event.custom({
      "type": "pneumaticcraft:amadron",
      "id": "pneumaticcraft:amadron/new_plantium_seed",
      "input": {
        "type": "ITEM",
        "amount": 64,
        "id": "thermal:phytogro"
      },
      "level": 0,
      "output": {
        "type": "ITEM",
        "amount": 1,
        "id": "planttech2:plantium_seeds"
      },
      "static": true
    })
    //chip relief
    event.custom({
      "type": "pneumaticcraft:amadron",
      "id": "pneumaticcraft:amadron/new_plantium_seed",
      "input": {
        "type": "ITEM",
        "amount": 8,
        "id": "planttech2:plantium_block"
      },
      "level": 0,
      "output": {
        "type": "ITEM",
        "amount": 1,
        "id": "planttech2:knowledgechip_0"
      },
      "static": true
    })
    //crop
    event.shaped('8x planttech2:cropbars', [
      'SAS',
      'S S',
      'SAS'
    ], {
      S: '#forge:rods/wooden',
      A: 'planttech2:plantium_seeds'
    })
    //plamtium
    event.custom({
      "type": "pneumaticcraft:pressure_chamber",
      "inputs": [
        {
          "item": "minecraft:wheat_seeds"
        },
        {
          "item": "minecraft:iron_ingot"
        }
      ],
      "pressure": 2.0,
      "results": [
        {
          "item": "planttech2:plantium_ingot"
        }
      ]
    })
    //event.recipes.botania.runic_altar('planttech2:electrum_seeds', [,'minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:electrum_seeds', ['#forge:ingots/electrum','#forge:ingots/electrum','#forge:ingots/electrum','#forge:ingots/electrum','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:constantan_seeds', ['#forge:ingots/constantan','#forge:ingots/constantan','#forge:ingots/constantan','#forge:ingots/constantan','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:compressed_iron_seeds',['#forge:ingots/compressed_iron','#forge:ingots/compressed_iron','#forge:ingots/compressed_iron','#forge:ingots/compressed_iron','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:bronze_seeds', ['#forge:ingots/bronze','#forge:ingots/bronze','#forge:ingots/bronze','#forge:ingots/bronze','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:brass_seeds', ['#forge:ingots/brass','#forge:ingots/brass','#forge:ingots/brass','#forge:ingots/brass','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:apatite_seeds', ['#forge:gems/apatite','#forge:gems/apatite','#forge:gems/apatite','#forge:gems/apatite','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:ruby_seeds', ['#forge:gems/ruby','#forge:gems/ruby','#forge:gems/ruby','#forge:gems/ruby','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:refined_obsidian_seeds', ['#forge:ingots/refined_obsidian','#forge:ingots/refined_obsidian','#forge:ingots/refined_obsidian','#forge:ingots/refined_obsidian','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:platinum_seeds', ['#forge:ingots/platinum','#forge:ingots/platinum','#forge:ingots/platinum','#forge:ingots/platinum','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:tin_seeds', ['#forge:ingots/tin','#forge:ingots/tin','#forge:ingots/tin','#forge:ingots/tin','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:terrasteel_seeds', ['#forge:ingots/terrasteel','#forge:ingots/terrasteel','#forge:ingots/terrasteel','#forge:ingots/terrasteel','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:silver_seeds', ['#forge:ingots/silver','#forge:ingots/silver','#forge:ingots/silver','#forge:ingots/silver','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:signalum_seeds', ['#forge:ingots/signalum','#forge:ingots/signalum','#forge:ingots/signalum','#forge:ingots/signalum','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:sapphire_seeds', ['#forge:gems/sapphire','#forge:gems/sapphire','#forge:gems/sapphire','#forge:gems/sapphire','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:peridot_seeds', ['#forge:gems/peridot','#forge:gems/peridot','#forge:gems/peridot','#forge:gems/peridot','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:mithril_seeds', ['#forge:ingots/mithril','#forge:ingots/mithril','#forge:ingots/mithril','#forge:ingots/mithril','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:nickel_seeds', ['#forge:ingots/nickel','#forge:ingots/nickel','#forge:ingots/nickel','#forge:ingots/nickel','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:lumium_seeds', ['#forge:ingots/lumium','#forge:ingots/lumium','#forge:ingots/lumium','#forge:ingots/lumium','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:osmium_seeds', ['#forge:ingots/osmium','#forge:ingots/osmium','#forge:ingots/osmium','#forge:ingots/osmium','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:aluminum_seeds', ['#forge:ingots/aluminum','#forge:ingots/aluminum','#forge:ingots/aluminum','#forge:ingots/aluminum','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:lead_seeds', ['#forge:ingots/lead','#forge:ingots/lead','#forge:ingots/lead','#forge:ingots/lead','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:iridium_seeds', ['#forge:ingots/iridium','#forge:ingots/iridium','#forge:ingots/iridium','#forge:ingots/iridium','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:invar_seeds', ['#forge:ingots/invar','#forge:ingots/invar','#forge:ingots/invar','#forge:ingots/invar','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:enderium_seeds', ['#forge:ingots/enderium','#forge:ingots/enderium','#forge:ingots/enderium','#forge:ingots/enderium','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:elementium_seeds', ['#forge:ingots/elementium','#forge:ingots/elementium','#forge:ingots/elementium','#forge:ingots/elementium','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:zinc_seeds', ['#forge:ingots/zinc','#forge:ingots/zinc','#forge:ingots/zinc','#forge:ingots/zinc','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:awakened_draconium_seeds', ['#forge:storage_blocks/draconium_awakened','#forge:storage_blocks/draconium_awakened','#forge:storage_blocks/draconium_awakened','#forge:storage_blocks/draconium_awakened','#forge:storage_blocks/draconium_awakened','#forge:storage_blocks/draconium_awakened','#forge:storage_blocks/draconium_awakened','#forge:storage_blocks/draconium_awakened','#forge:storage_blocks/draconium_awakened','#forge:storage_blocks/draconium_awakened','minecraft:wheat_seeds'], 5000000)
    event.recipes.botania.runic_altar('planttech2:draconium_seeds', ['#forge:storage_blocks/draconium','#forge:storage_blocks/draconium','#forge:storage_blocks/draconium','#forge:storage_blocks/draconium','#forge:storage_blocks/draconium','#forge:storage_blocks/draconium','#forge:storage_blocks/draconium','#forge:storage_blocks/draconium','#forge:storage_blocks/draconium','#forge:storage_blocks/draconium','minecraft:wheat_seeds'], 5000000)
    event.recipes.botania.runic_altar('planttech2:rubber_seeds', ['thermal:cured_rubber','thermal:cured_rubber','thermal:cured_rubber','thermal:cured_rubber','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:cobalt_seeds', ['#forge:ingots/cobalt','#forge:ingots/cobalt','#forge:ingots/cobalt','#forge:ingots/cobalt','#forge:ingots/cobalt','#forge:ingots/cobalt','#forge:ingots/cobalt','#forge:ingots/cobalt','#forge:ingots/cobalt','#forge:ingots/cobalt','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:electrotine_seeds', ['#forge:dusts/electrotine','#forge:dusts/electrotine','#forge:dusts/electrotine','#forge:dusts/electrotine','#forge:dusts/electrotine','#forge:dusts/electrotine','#forge:dusts/electrotine','#forge:dusts/electrotine','#forge:dusts/electrotine','#forge:dusts/electrotine','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:tungsten_seeds', ['#forge:ingots/tungsten','#forge:ingots/tungsten','#forge:ingots/tungsten','#forge:ingots/tungsten','#forge:ingots/tungsten','#forge:ingots/tungsten','#forge:ingots/tungsten','#forge:ingots/tungsten','#forge:ingots/tungsten','#forge:ingots/tungsten','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:lithium_seeds', ['#forge:ingots/lithium','#forge:ingots/lithium','#forge:ingots/lithium','#forge:ingots/lithium','#forge:ingots/lithium','#forge:ingots/lithium','#forge:ingots/lithium','#forge:ingots/lithium','#forge:ingots/lithium','#forge:ingots/lithium','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:titanium_seeds', ['#forge:ingots/titanium','#forge:ingots/titanium','#forge:ingots/titanium','#forge:ingots/titanium','#forge:ingots/titanium','#forge:ingots/titanium','#forge:ingots/titanium','#forge:ingots/titanium','#forge:ingots/titanium','#forge:ingots/titanium','minecraft:wheat_seeds'], 5000)
    event.recipes.botania.runic_altar('planttech2:thaumium_seeds', ['kubejs:thaumium_ingot','kubejs:thaumium_ingot','kubejs:thaumium_ingot','kubejs:thaumium_ingot','kubejs:thaumium_ingot','kubejs:thaumium_ingot','kubejs:thaumium_ingot','kubejs:thaumium_ingot','kubejs:thaumium_ingot','kubejs:thaumium_ingot','minecraft:wheat_seeds'], 5000)
    //irregular
    event.custom({
        "type": "planttech2:compressing",
        "input": {
          "count": 12,
          "item": "planttech2:elementium_particles"
        },
        "result": {
          "item": "mythicbotany:raw_elementium"
        }
      })
      event.custom({
        "type": "planttech2:compressing",
        "input": {
          "count": 12,
          "item": "planttech2:rubber_particles"
        },
        "result": {
          "item": "thermal:cured_rubber"
        }
      })
      event.custom({
        "type": "planttech2:compressing",
        "input": {
          "count": 12,
          "item": "planttech2:thaumium_particles"
        },
        "result": {
          "item": "kubejs:thaumium_ingot"
        }
      })
      event.custom({
        "type": "planttech2:compressing",
        "input": {
          "count": 32,
          "item": "planttech2:quartz_particles"
        },
        "result": {
          "tag": "forge:silicon"
        }
      })
      event.custom({
        "type": "planttech2:compressing",
        "input": {
          "count": 8,
          "item": "planttech2:draconium_particles"
        },
        "result": {
          "item": "draconicevolution:draconium_ingot"
        }
      })
      event.custom({
        "type": "planttech2:compressing",
        "input": {
          "count": 8,
          "item": "planttech2:awakened_draconium_particles"
        },
        "result": {
          "item": "draconicevolution:awakened_draconium_ingot"
        }
      })

    //unknown_material
    event.recipes.thermal.smelter('moremekanismprocessing:cobalt_ingot', ['#forge:ingots/powered_tin','#forge:ingots/manasteel','refinedstorage:quartz_enriched_iron']).energy(100000)
    event.recipes.thermal.smelter('#forge:ingots/tungsten', ['#forge:ingots/compressed_iron','solarforge:algadium_ingot','#forge:ingots/lead']).energy(100000)
    event.recipes.thermal.smelter('#forge:ingots/titanium', ['#forge:ingots/steel','create_things_and_misc:sturdy_sheet_block','create_crush_everything:netherite_shard']).energy(100000)
    event.recipes.thermal.smelter('#forge:dusts/electrotine', ['manaliquidizer:mana_fluid_bucket','manaliquidizer:mana_fluid_bucket','fluxnetworks:flux_dust']).energy(100000)
    event.recipes.thermal.smelter('#forge:ingots/azure_silver', ['#forge:ingots/silver','#forge:gems/amethyst']).energy(100000)
    event.custom({
        "type": "mythicbotany:infusion",
        "fromColor": 16711821,
        "group": "infuser",
        "ingredients": [
          {
            "tag": "forge:ingots/titanium"
          },
          {
            "tag": "forge:dusts/electrotine"
          },
          {
            "tag": "forge:ingots/azure_silver"
          },
          {
            "tag": "forge:gems/peridot"
          }
          ,
          {
            "tag": "forge:gems/sapphire"
          }
          ,
          {
            "tag": "forge:gems/apatite"
          }
          ,
          {
            "tag": "forge:gems/peridot"
          }
          ,
          {
            "item": "solarforge:geminium_ingot"
          }
          ,
          {
            "tag": "forge:gems/ruby"
          }
          ,
          {
            "tag": "forge:ingots/tungsten"
          }
        ],
        "mana": 18000000,
        "output": {
          "count": 1,
          "item": "kubejs:thaumium_ingot"
        },
        "toColor": 16750080
      })
})