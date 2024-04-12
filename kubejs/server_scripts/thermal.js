//Lace add
onEvent('recipes', event => {
    //remove
    event.remove({output:'thermal:machine_frame'})
    event.remove({output:'thermal:energy_cell'})
    event.remove({output:'thermal:rf_coil'})
    event.remove({output:'thermal:fluid_cell'})
    event.remove({output:'thermal:redstone_servo'})
    event.remove({output:'thermal:energy_limiter_attachment'})
    event.remove({output:'thermal:filter_attachment'})
    event.remove({output:'thermal:servo_attachment'})
    event.remove({output:'thermal:turbo_servo_attachment'})
    event.remove({output:'thermal:obsidian_glass'})
    
    event.recipes.botania.mana_infusion('thermal:obsidian_glass','kubejs:origins_glass',50000)

    let th_se ='kubejs:incomplete_thermal_machine_frame'

    event.recipes.createSequencedAssembly([
        Item.of('thermal:machine_frame')
        ],
        'planttech2:machineshell_iron',
        [
            event.recipes.createDeploying(th_se,[th_se,'#forge:ingots/iron']),
            event.recipes.createDeploying(th_se,[th_se,'kubejs:origins_glass']),
            event.recipes.createDeploying(th_se,[th_se,'#forge:gears/tin'])
        ]).transitionalItem(th_se).loops(4)

        event.recipes.createFilling('thermal:energy_cell', [
            'thermal:energy_cell_frame',
            Fluid.of('thermal:redstone', 1000)
        ])

        event.recipes.createFilling('thermal:fluid_cell', [
            'thermal:fluid_cell_frame',
            Fluid.of('thermal:glowstone', 1000)
        ])

    event.custom({
        
            "type": "pneumaticcraft:pressure_chamber",
            "inputs": [
              {
                "type": "pneumaticcraft:stacked_item",
                "count": 4,
                "tag": "forge:dusts/cinnabar"
              },
              {
                "tag": "forge:ingots/gold"
              }
            ],
            "pressure": 2.5,
            "results": [
              {
                "item": "thermal:rf_coil"
              }
            ]
          

    })
    event.custom({
        
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
          {
            "type": "pneumaticcraft:stacked_item",
            "count": 4,
            "tag": "forge:dusts/cinnabar"
          },
          {
            "tag": "forge:ingots/iron"
          }
        ],
        "pressure": 2.5,
        "results": [
          {
            "item": "thermal:redstone_servo"
          }
        ]

    })
    event.shaped('thermal:energy_limiter_attachment',[
      '   ',
      'TXT',
      'EVE'
  ],{
      E:'#forge:ingots/electrum',
      T:'#forge:nuggets/lead',
      X:'create_crystal_clear:train_clear_glass_casing',
      V:'magickcore:solar'
  })
  event.shaped('thermal:filter_attachment',[
    '   ',
    'TXT',
    'EVE'
],{
    E:'create_dd:compound_base',
    T:'#forge:nuggets/powered_tin',
    X:'create_crystal_clear:train_clear_glass_casing',
    V:'magickcore:stasis'
})
event.shaped('thermal:servo_attachment',[
  '   ',
  'TXT',
  'EVE'
],{
  E:'#forge:ingots/overcharge_alloy',
  T:'redstone_arsenal:flux_nugget',
  X:'create_crystal_clear:train_clear_glass_casing',
  V:'magickcore:arc'
})
event.shaped('thermal:turbo_servo_attachment',[
  '   ',
  'TXT',
  'EVE'
],{
  E:'#forge:ingots/ivory_psimetal',
  T:'cyclic:gem_obsidian',
  X:'create_crystal_clear:train_clear_glass_casing',
  V:'magickcore:mana_spider_eye'
})



})