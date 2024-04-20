onEvent('recipes', event => {
    event.remove({output:'gag:time_sand_pouch'})
    event.remove({output:'ironfurnaces:augment_generator'})
    event.remove({output:'fluxnetworks:flux_controller'})
    event.remove({output:'fluxnetworks:flux_core'})
    
    event.recipes.botania.mana_infusion(Item.of('magickcore:element_crystal', '{ELEMENT:"botania"}'),Item.of('magickcore:element_crystal', '{ELEMENT:"origin"}'),10000)
    
    event.custom({
      "type": 'solarforge:infusing_crafting',
      "pattern": [
        'SCS',
        'BXB',
        'SSS'
      ],
      "keys": {
        "X": {"item": 'kubejs:wither_glass'},
        "S": {"item": 'fluxnetworks:flux_block'},
        "B": {"item": 'fluxnetworks:flux_dust'},
        "C": {"item": 'fluxnetworks:flux_core'}
      },
      "output": {
        "item": 'fluxnetworks:flux_controller'
      },
      "time": 7000,
      "fragment": 'solar_infuser'
      
    })
    event.shaped('fluxnetworks:flux_core', [
      'ABA',
      'BSB',
      'ABA'
    ], {
      S: 'kubejs:wither_glass',
      A: 'botania:corporea_spark',
      B: 'fluxnetworks:flux_dust'
    })
    event.custom({
        "type": 'solarforge:infusing_new',
        "items": {
          "X": {"item": 'kubejs:time_ruler'},
          "S": {"item": 'solarforge:solar_shard'},
          "B": {"item": 'rsinfinitybooster:dimension_card'},
          "C": {"item": 'solarforge:illidium_ingot'},
          "D":{"item":'aeinfinitybooster:dimension_card'}
        },
        "pattern": [
          'CDC',
          'SS',
          'BXB',
          'SS',
          'CDC'
        ],
        "result": {
          "item": 'gag:time_sand_pouch'
          /**/
        },
        "time": 700,
        "fragment": 'solar_infuser'
        
      })
    
    let inter_augment_generator = 'kubejs:incomplete_augment_generator'

    event.recipes.createSequencedAssembly([
      Item.of('ironfurnaces:augment_generator')
    ],'pneumaticcraft:upgrade_matrix',[
      event.recipes.createDeploying(inter_augment_generator,[inter_augment_generator,'create_dd:industrial_iron_sheet']),
      event.recipes.createDeploying(inter_augment_generator,[inter_augment_generator,'thermal:rf_coil']),
      event.recipes.createDeploying(inter_augment_generator,[inter_augment_generator,'ten3:redstone_conductor']),
      event.recipes.createPressing(inter_augment_generator, inter_augment_generator)
    ]).transitionalItem(inter_augment_generator).loops(4)
    event.custom({
      "type": 'solarforge:infusing_crafting',
      "pattern": [
        'SCS',
        'CXC',
        'SCS'
      ],
      "keys": {
        "X": {"item": 'create_dd:ember_alloy_block'},
        "S": {"item": 'solarforge:solar_shard'},
        "C": {"item": 'thermal:rose_gold_gear'}
      },
      "output": {
        "item": 'ironfurnaces:heater'
      },
      "time": 700,
      "fragment": 'solar_infuser'
      
    })
})
    
