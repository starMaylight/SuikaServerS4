onEvent('recipes', event => {
    //Lace_addrecipe
    //remove
    event.remove({output:'#forge:ingots/osmium'})
    event.remove({output:'mekanism:steel_casing'})
    event.remove({output:'mekanism:upgrade_speed'})
    event.remove({output:'mekanism:upgrade_energy'})
    event.remove({output:'mekanism:upgrade_muffling'})
    event.remove({output:'mekanism:upgrade_gas'})
    event.remove({output:'mekanism:upgrade_anchor'})

    //upgrade card
    event.shaped('kubejs:mekanism_upgrade_base',[
      ' E ',
      'TXT',
      ' E '
  ],{
      E:'#forge:glass',
      T:'mekanism:alloy_infused',
      X:'pneumaticcraft:plastic'
  })
  event.shapeless('mekanism:upgrade_speed',['kubejs:mekanism_upgrade_base','thermal:machine_speed_augment'])
  event.shapeless('mekanism:upgrade_energy',['kubejs:mekanism_upgrade_base','thermal:machine_efficiency_augment'])
  event.shapeless('mekanism:upgrade_filter',['kubejs:mekanism_upgrade_base','itemfilters:always_true'])
  event.shapeless('mekanism:upgrade_muffling',['kubejs:mekanism_upgrade_base','gag:no_solicitors'])
  event.shapeless('mekanism:upgrade_gas',['kubejs:mekanism_upgrade_base','create_dd:chromatic_waste_bucket'])
  event.shapeless('mekanism:upgrade_anchor',['kubejs:mekanism_upgrade_base','createchunkloading:chunk_loader'])
  //osmium
    event.custom({
        "type": "planttech2:compressing",
        "input": {
          "count": 8,
          "item": "planttech2:osmium_particles"
        },
        "result": {
          "tag": "forge:ingots/osmium"
        }
      })

      event.recipes.create.mixing('mekanism:ingot_osmium',[
        '#forge:dusts/osmium',
        Item.of('ten3:bizarrerie')
      ]).superheated()

      let mek_hall = 'kubejs:incomplete_meka_machinecase'
    event.recipes.createSequencedAssembly([
        Item.of('mekanism:steel_casing')
        ],
        'rftoolsbase:machine_frame',
        [
            event.recipes.createDeploying(mek_hall,[mek_hall,'ten3:chlorium_gear']),
            event.recipes.createDeploying(mek_hall,[mek_hall,'ten3:powered_tin_gear']),
            event.recipes.createDeploying(mek_hall,[mek_hall,'planttech2:gear_kinnoium_infused']),
            event.recipes.createDeploying(mek_hall,[mek_hall,'planttech2:gear_dancium_infused']),
            event.recipes.createDeploying(mek_hall,[mek_hall,'planttech2:gear_kanekium']),
            event.recipes.createDeploying(mek_hall,[mek_hall,'thermal:enderium_gear']),
            event.recipes.createDeploying(mek_hall,[mek_hall,'thermal:lumium_gear']),
            event.recipes.createDeploying(mek_hall,[mek_hall,'solarforge:crystal_star']),
            event.recipes.createDeploying(mek_hall,[mek_hall,'pneumaticcraft:module_expansion_card'])
        ]).transitionalItem(mek_hall).loops(8)

    //advanced casing
    event.recipes.botania.terra_plate('mekanism:steel_casing', ['redstone_arsenal:flux_metal_block', 'planttech2:solarfocus_4','kubejs:wither_glass','solarforge:energetic_ingot','solarforge:enderium_ingot','mekanism:hdpe_stick','mekanism:hdpe_stick','mekanism:hdpe_stick','mekanism:hdpe_stick'], 1000000)

})