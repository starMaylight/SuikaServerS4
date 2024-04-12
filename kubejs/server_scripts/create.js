onEvent('recipes', event => {
    //Lace add
    event.remove({id: 'create:crafting/materials/andesite_alloy'})
    event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
    event.remove({id: 'create_dd:industrial_iron/andesite_alloy'})
    event.remove({output: 'create:brass_hand'})
    event.remove({output: 'create:rose_quartz'})

    event.remove({id: 'create_dd:mixing/mithril_ingot'})

    event.recipes.create.mixing('create:rose_quartz',[
		'#forge:gems/quartz',
        'createteleporters:redstone_pearl'
	]).heated()
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
          {
            "item": "minecraft:andesite"
          },
          {
            "item": "minecraft:iron_nugget"
          }
        ],
        "pressure": 2.0,
        "results": [
          {
            "item": "create:andesite_alloy"
          }
        ]
      })

    event.shaped('create:brass_hand',[
        ' E ',
        'TTT',
        ' T '
    ],{
        E:'#forge:andesite_alloy',
        T:'kubejs:illidium_plate',
    })

    event.recipes.create.mixing('create_dd:mithril_ingot',[
      '#forge:ingots/steel',
      '#forge:ingots/strong_bronze',
      '#forge:ingots/silver',
      '#forge:ingots/chromatic',
      '4x create:experience_nugget',
      Fluid.of('create_dd:glowberry_milkshake',500)
      ]).superheated()

})