onEvent('recipes', event => {
    event.remove({id:'botania:mana_infusion/manasteel' })
    event.remove({id:'botania:apothecary_default' })
    event.remove({id:'botania:terra_plate'})
    event.remove({id:'botania:mana_infusion/mana_diamond'})
    event.remove({id:'botania:mana_infusion/mana_powder_dust'})
    event.remove({id:'botania:mana_infusion/mana_powder_dye'})
    event.remove({output:'botania:mana_pearl'})
    event.remove({output:'botania:rainbow_rod'})

    event.recipes.botania.mana_infusion('#forge:dusts/mana','#forge:dusts/spirit',4000)
    event.recipes.botania.mana_infusion('#forge:ingots/manasteel','#forge:ingots/steel',4000)
    event.recipes.botania.mana_infusion('#forge:gems/mana_diamond','magickcore:completely_self',8000)
    event.recipes.botania.mana_infusion('botania:mana_pearl','rftoolsbase:infused_enderpearl',8000)
    event.shaped('botania:apothecary_default', [
        'ASA',
        ' A ',
        'AAA'
      ], {
        S: '#botania:petals',
        A: 'create:andesite_alloy_block'
      })
      event.shaped('botania:rainbow_rod', [
        'ABC',
        'DXE',
        'FGH'
      ], {
        A: Item.of('magickcore:element_wool', '{ELEMENT:"arc"}'),
        B: Item.of('magickcore:element_wool', '{ELEMENT:"stasis"}'),
        C: Item.of('magickcore:element_wool', '{ELEMENT:"botania"}'),
        D: Item.of('magickcore:element_wool', '{ELEMENT:"void"}'),
        E: Item.of('magickcore:element_wool', '{ELEMENT:"taken"}'),
        F: Item.of('magickcore:element_wool', '{ELEMENT:"psi"}'),
        G: Item.of('magickcore:element_wool', '{ELEMENT:"solar"}'),
        H: Item.of('magickcore:element_wool', '{ELEMENT:"wither"}'),
        X: 'kubejs:inactivated_rod_of_the_bifrost'
      })

      event.custom({
        "type": "solarforge:infusing_new",
        "items": {
          "A": {"item": "manaliquidizer:mana_fluid_bucket"},
          "B": {"item": "botanicalmachinery:mana_emerald"},
          "C": {"item": "compressedcreativity:brass_gilded_lapis_lazuli"},
          "D": {"item": "botania:runic_altar"},
          "E": {"item": "createaddition:festive_spool"},
          "F": {"item": "solarforge:charged_qualadium_ingot"}
        },
        "pattern": [
          "FEF",
          "BB",
          "BDB",
          "CC",
          "FAF"
        ],
        "result": {
          "item": "botania:terra_plate"
        },
        "time": 1500,
        "fragment": "catalysts",
        "catalysts": "U UU UU UU U",
        "urba": 10000,
        "energy": 5000
      })
})