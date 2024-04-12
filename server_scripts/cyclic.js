onEvent('recipes', event => {
    event.remove({id:'cyclic:biomass'})
    event.remove({output:'cyclic:solidifier'})
    event.remove({output:'cyclic:melter'})
    event.remove({output:'cyclic:anvil'})
    event.remove({output:'cyclic:crusher'})    
    event.remove({output:'cyclic:placer'})
    event.remove({output:'cyclic:user'})
    event.remove({output:'cyclic:collector'})


    event.shaped('cyclic:solidifier',[
        'RVR',
        'TXT',
        'EEE'
      ],{
        E:'cyclic:netherite_pressure_plate',
        T:'botania:bifrost_perm',
        X:'cyclic:compressed_cobblestone',
        V:'#forge:gems/quartz',
        R:'#forge:storage_blocks/lapis'
      })

      event.shaped('cyclic:melter',[
        'RVR',
        'TXT',
        'EEE'
      ],{
        E:'minecraft:obsidian',
        T:'botania:bifrost_perm',
        X:'planttech2:machineshell_plantium',
        V:'#forge:gems/quartz',
        R:'#forge:storage_blocks/redstone'
      })

      event.shaped('cyclic:anvil',[
        'RRR',
        'TXT',
        'EEE'
      ],{
        E:'planttech2:machineshell_iron',
        T:'psi:psidust',
        X:'cyclic:gem_obsidian',
        R:'#forge:storage_blocks/diamond'
      })

      event.shaped('cyclic:crusher',[
        'RVR',
        'TXT',
        'RVR'
      ],{
        T:'minecraft:stonecutter',
        X:'sfm:manager',
        V:'#forge:nuggets/bronze',
        R:'cyclic:compressed_cobblestone'
      })
      event.shaped('cyclic:placer',[
        'RVR',
        'TXT',
        'RVR'
      ],{
        T:'alltheores:platinum_gear',
        X:'createteleporters:quantum_mechanism',
        V:'minecraft:dispenser',
        R:'cyclic:compressed_cobblestone'
      })
      event.shaped('cyclic:user',[
        'RVR',
        'TXT',
        'RVR'
      ],{
        T:'alltheores:osmium_gear',
        X:'createteleporters:quantum_mechanism',
        V:'alltheores:iridium_gear',
        R:'solarforge:solar_stone_bricks'
      })
      event.shaped('cyclic:collector',[
        'EVE',
        'TXT',
        'RRR'
      ],{
        T:'alltheores:aluminum_gear',
        X:'create_dd:inductive_mechanism',
        V:'#forge:gears/uranium',
        R:'botania:floating_hopperhock',
        E:'integrateddynamics:crystalized_menril_block'
      })
})