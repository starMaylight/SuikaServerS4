onEvent('recipes', event => {
    event.shaped('kubejs:dice_of_fate_replica',[
        'ETE',
        'TNT',
        'ETE'
    ],{
        E:'botania:elementium_ingot',
        T:'botania:terrasteel_block',
        N:'minecraft:nether_star'
    })

    //Lace add
    event.recipes.createPressing('kubejs:illidium_plate','solarforge:illidium_ingot')
    event.custom({
        "type": "magickcore:magick_workbench",
        "input":{
          "item":"botania:mana_glass"
        },
        "result":{
          "item":"kubejs:origins_glass",
          "count":1
        }
      })
      event.shaped('kubejs:wither_glass',[
        'ETE',
        'TNT',
        'ETE'
    ],{
        E:'botania:metamorphic_forest_stone',
        T:Item.of('magickcore:element_string', '{ELEMENT:"wither"}'),
        N:'kubejs:origins_glass'
    })
    event.shaped('kubejs:inactivated_rod_of_the_bifrost',[
        ' TE',
        ' NT',
        'N  '
    ],{
        E:'#forge:gems/dragonstone',
        T:'botania:pixie_dust',
        N:'#forge:ingots/elementium'
    })
    event.custom({
        "type": "mekanism:rotary",
        "fluidInput": {
          "amount": 8000,
          "fluid": "manaliquidizer:mana_fluid"
        },
        "gasOutput": {
          "gas": "kubejs:mana",
          "amount": 1
        },
        "gasInput": {
          "amount": 1,
          "gas": "kubejs:mana"
        },
        "fluidOutput": {
          "fluid": "manaliquidizer:mana_fluid",
          "amount": 1
        }
      })

})