onEvent('recipes', event => {
    //Lace_addrecipe
    //remove
    let del=[
    '#forge:ingots/osmium',
    'mekanism:steel_casing',
    'mekanism:upgrade_speed',
    'mekanism:upgrade_energy',
    'mekanism:upgrade_muffling',
    'mekanism:upgrade_gas',
    'mekanism:upgrade_anchor',
    'mekanism:upgrade_filter',
    'mekanism:electrolytic_core',
    'mekanism:teleportation_core',
    'mekanism:metallurgic_infuser',

    'mekanism:basic_control_circuit',
    'mekanism:advanced_control_circuit',
    'mekanism:elite_control_circuit',
    'mekanism:ultimate_control_circuit',

    'mekanism:alloy_infused',
    'mekanism:alloy_reinforced',
    'mekanism:alloy_atomic',

    'mekanism:qio_dashboard',
    'mekanism:qio_drive_array',
    'mekanism:qio_drive_base',
    'mekanism:qio_drive_hyper_dense',
    'mekanism:qio_drive_time_dilating',
    'mekanism:qio_drive_supermassive',
    'mekaevolution:qio_drive_absolute',
    'mekaevolution:qio_drive_supreme',
    'mekaevolution:qio_drive_cosmic',
    'mekaevolution:qio_drive_infinite',

    'mekanismgenerators:wind_generator',
    'mekanismgenerators:gas_burning_generator',

    'solarpanels:carbone_solar_element',
    'solarpanels:hybrid_solar_element',
    'solarpanels:improved_hybrid_solar_element',
    'solarpanels:quantum_solar_element',
    'solarpanels:spectral_solar_element',
    'solarpanels:singular_solar_element',
    'solarpanels:photonic_solar_element',
    'solarpanels:light_absorbing_solar_element',
    
    'solarpanels:advanced_solar_panel',
    'solarpanels:hybrid_solar_panel',
    'solarpanels:ultimate_hybrid_solar_panel',
    'solarpanels:quantum_solar_panel',
    'solarpanels:spectral_solar_panel',
    'solarpanels:singular_solar_panel',
    'solarpanels:light_absorbing_solar_panel',
    'solarpanels:photonic_solar_panel',

    'solarpanels:improved_energy_tablet',
    'solarpanels:quantum_energy_tablet',
    'solarpanels:spectral_energy_tablet',
    'solarpanels:singular_energy_tablet',
    'solarpanels:light_absorbing_energy_tablet',
    'solarpanels:photonic_energy_tablet',

    'mekaevolution:absolute_control_circuit',
    'mekaevolution:supreme_control_circuit',
    'mekaevolution:cosmic_control_circuit',
    'mekaevolution:infinite_control_circuit',

    'mekanismmatter:matter_fabricator',
    'mekanismmatter:matter_synthesizer',

    'mekaevolution:infinite_energy_cube',
    'mekaevolution:supreme_energy_cube',
    'mekaevolution:cosmic_energy_cube',
    'mekaevolution:absolute_energy_cube'
    ]
    event.remove({output:del})
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
    event.recipes.lazierae2.etcher('mekanism:basic_control_circuit', ['kubejs:basic_circuit_base', '#forge:ingots/osmium']).processingTime(50).energyCost(500)
    event.recipes.mekanismMetallurgicInfusing('mekanism:alloy_infused', '#forge:ingots/steel','80x mekanism:redstone')
    event.recipes.mekanismMetallurgicInfusing('mekanism:alloy_reinforced', 'createutilities:void_steel_ingot','160x mekanism:diamond')
    event.recipes.mekanismMetallurgicInfusing('mekanism:alloy_atomic', 'solarforge:enderium_ingot','320x mekanism:refined_obsidian')
    event.shaped('mekanism:qio_dashboard', [
      ['ten3:powered_tin_plate', 'createutilities:graviton_tube', 'ten3:powered_tin_plate'], 
      ['ten3:powered_tin_plate', 'integratedterminals:part_terminal_crafting_job', 'ten3:powered_tin_plate'], 
      ['ten3:powered_tin_plate', 'dimstorage:dimensional_tablet', 'ten3:powered_tin_plate']
    ]);
    event.shaped('mekanism:qio_drive_array', [
      ['pneumaticcraft:plastic', 'functionalstorage:compacting_drawer', 'pneumaticcraft:plastic'], 
      ['pneumaticcraft:plastic', 'dimstorage:dimensional_chest', 'pneumaticcraft:plastic'], 
      ['pneumaticcraft:plastic', 'functionalstorage:storage_controller', 'pneumaticcraft:plastic']
    ])
    let qio = (output,E,T,N) => {
      event.shaped(output,[
        'ete',
        'tnt',
        'ete'
    ],{
      e:E,
      t:T,
      n:N
  })
      }
      qio('mekanism:qio_drive_base','#forge:plates/invar','lazierae2:parallel_processor','redstone_arsenal:flux_plating')
      qio('mekanism:qio_drive_hyper_dense','planttech2:knowledgechip_5','mekanism:qio_drive_base','ends_delight:dragon_egg_shell')
      qio('mekanism:qio_drive_time_dilating','mekanism:pellet_polonium','mekanism:qio_drive_hyper_dense','planttech2:solarfocus_4')
      qio('mekanism:qio_drive_supermassive','create:sturdy_sheet','mekanism:qio_drive_time_dilating','mekanism:pellet_antimatter')
      qio('mekaevolution:qio_drive_absolute','draconicevolution:draconium_core','mekanism:qio_drive_supermassive','mekanism:pellet_antimatter')
      qio('mekaevolution:qio_drive_supreme','draconicevolution:wyvern_core','mekaevolution:qio_drive_absolute','mekanism:pellet_antimatter')
      qio('mekaevolution:qio_drive_cosmic','draconicevolution:awakened_core','mekaevolution:qio_drive_supreme','mekanism:pellet_antimatter')      
      qio('mekaevolution:qio_drive_infinite','draconicevolution:chaotic_core','mekaevolution:qio_drive_cosmic','mekanism:pellet_antimatter')
      qio('mekaevolution:absolute_energy_cube','mekaevolution:absolute_control_circuit','solarpanels:spectral_energy_tablet')
      qio('mekaevolution:supreme_energy_cube','mekaevolution:supreme_control_circuit','solarpanels:singular_energy_tablet','mekaevolution:absolute_energy_cube')
      qio('mekaevolution:cosmic_energy_cube','mekaevolution:cosmic_control_circuit','solarpanels:light_absorbing_energy_tablet','mekaevolution:supreme_energy_cube')
      qio('mekaevolution:infinite_energy_cube','mekaevolution:infinite_control_circuit','solarpanels:photonic_energy_tablet','mekaevolution:cosmic_energy_cube')
    let Mekcircuit = (output,E,T,S,N) => {
      event.shaped(output,[
          'et ',
          'sns',
          ' te'
      ],{
        e:E,
        t:T,
        s:S,
        n:N
      })
    }
    Mekcircuit('mekanism:advanced_control_circuit','redstone_arsenal:flux_gem','refinedstorage:destruction_core','mekanism:alloy_infused','mekanism:basic_control_circuit')
    Mekcircuit('mekanism:elite_control_circuit','solarforge:qualadium_ingot','refinedstorage:construction_core','mekanism:alloy_reinforced','mekanism:advanced_control_circuit')
    Mekcircuit('mekanism:ultimate_control_circuit','kubejs:thaumium_ingot','cyclic:gem_obsidian','mekanism:alloy_atomic','mekanism:elite_control_circuit')
    Mekcircuit('mekaevolution:absolute_control_circuit','solarforge:charged_qualadium_ingot','compressedcreativity:brass_gilded_lapis_lazuli','#forge:ingots/refined_glowstone','mekanism:ultimate_control_circuit')
    Mekcircuit('mekaevolution:supreme_control_circuit','mythicbotany:alfsteel_ingot','thermal:redstone_mushroom_spores','#forge:ingots/signalum','mekaevolution:absolute_control_circuit')
    Mekcircuit('mekaevolution:cosmic_control_circuit','#forge:ingots/refined_radiance','quark:rainbow_rune','mekanism:pellet_antimatter','mekaevolution:supreme_control_circuit')
    Mekcircuit('mekaevolution:infinite_control_circuit','mekanism:pellet_antimatter','draconicadditions:chaos_heart','draconicevolution:reactor_core','mekaevolution:cosmic_control_circuit')
event.shaped('mekanismgenerators:wind_generator',[
  'eee',
  'sns',
  'ata'
],{
e:'create:white_sail',
t:'createaddition:alternator',
n:'create:windmill_bearing',
s:'mekanism:alloy_infused',
a:'solarpanels:quantum_energy_tablet'
})
event.shaped('mekanism:electrolytic_core',[
  'ete',
  'sns',
  'ete'
],{
e:'mekanism:alloy_reinforced',
t:'#forge:nuggets/osmium',
n:'mekanism:elite_control_circuit',
s:'moremekanismprocessing:titanium_nugget'
})
event.shaped('mekanismgenerators:gas_burning_generator',[
  'ete',
  'sns',
  'ete'
],{
e:'#forge:storage_blocks/osmium',
t:'mekanism:elite_control_circuit',
n:'mekanism:electrolytic_core',
s:'mekanism:alloy_reinforced'
})
event.shaped('mekanism:teleportation_core',[
  'ete',
  'sns',
  'ete'
],{
e:'ends_delight:ender_pearl_grain',
t:'mekanism:ultimate_control_circuit',
n:'createteleporters:gravity_stab',
s:'redstone_arsenal:flux_ingot'
})
let mekReaction = (inItem,inFluid,inGas,output,count,gasOut,fluidin,gasin) => {
  if (fluidin == undefined) { fluidin = 1000 }
  if (gasin == undefined) { gasin = 1000 }
  event.custom({
  "type": "mekanism:reaction",
  "itemInput": {"ingredient":{"item": inItem},},
  "fluidInput": {"amount": fluidin,"fluid": inFluid},
  "gasInput": {"amount": gasin,"gas": inGas},"duration": 900,
  "itemOutput": {"item": output,"count": count},
  "gasOutput": {"gas": gasOut,"amount": 100}
})}
event.recipes.mekanismMetallurgicInfusing('solarpanels:carbone_solar_element', 'mekanismgenerators:solar_panel','40x kubejs:taken')
event.recipes.mekanismMetallurgicInfusing('solarpanels:hybrid_solar_element', 'solarpanels:carbone_solar_element','40x kubejs:psi')
mekReaction('solarpanels:hybrid_solar_element','manaliquidizer:mana_fluid','kubejs:electric_frost','solarpanels:improved_hybrid_solar_element',1,'kubejs:mana')
event.recipes.mekanismMetallurgicInfusing('solarpanels:quantum_solar_element', 'solarpanels:improved_hybrid_solar_element','40x kubejs:void')
event.recipes.mekanismMetallurgicInfusing('solarpanels:spectral_solar_element', 'solarpanels:quantum_solar_element','40x kubejs:solar')
event.recipes.mekanismMetallurgicInfusing('solarpanels:singular_solar_element', 'solarpanels:spectral_solar_element','40x kubejs:gaia')
mekReaction('solarpanels:light_absorbing_solar_element','ten3:liquid_bizarrerie','kubejs:withering_of_nature','solarpanels:photonic_solar_element',1,'mekanism:spent_nuclear_waste')
event.recipes.thermal.bottler('solarpanels:light_absorbing_solar_element', [Fluid.of('mekanismgenerators:deuterium', 1000), 'solarpanels:singular_solar_element'])
let solarGen = (output,E,T,N,S,C) =>{
  event.shaped(output,[
  'eee',
  'sns',
  'ctc'
],{e:E,t:T,n:N,s:S,c:C})}
solarGen('solarpanels:advanced_solar_panel','solarpanels:carbone_solar_element','mekanism:energy_tablet','mekanismgenerators:solar_generator','#forge:ingots/osmium','mekanism:basic_control_circuit')
solarGen('solarpanels:hybrid_solar_panel','solarpanels:hybrid_solar_element','mekanism:energy_tablet','solarpanels:advanced_solar_panel','#forge:ingots/refined_obsidian','mekanism:advanced_control_circuit')
solarGen('solarpanels:ultimate_hybrid_solar_panel','solarpanels:improved_hybrid_solar_element','solarpanels:improved_energy_tablet','solarpanels:hybrid_solar_panel','redstone_arsenal:flux_plating','mekanism:elite_control_circuit')
solarGen('solarpanels:quantum_solar_panel','solarpanels:quantum_solar_element','solarpanels:quantum_energy_tablet','solarpanels:ultimate_hybrid_solar_panel','minecraft:nether_star','mekanism:ultimate_control_circuit')
solarGen('solarpanels:spectral_solar_panel','solarpanels:spectral_solar_element','solarpanels:spectral_energy_tablet','solarpanels:quantum_solar_panel','cyclic:gem_amber','mekaevolution:absolute_control_circuit')
solarGen('solarpanels:singular_solar_panel','solarpanels:singular_solar_element','solarpanels:singular_energy_tablet','solarpanels:spectral_solar_panel','create_dd:stargaze_singularity','mekaevolution:supreme_control_circuit')
solarGen('solarpanels:light_absorbing_solar_panel','solarpanels:light_absorbing_solar_element','solarpanels:light_absorbing_energy_tablet','solarpanels:singular_solar_panel','extendedcrafting:redstone_ingot','mekaevolution:cosmic_control_circuit')
solarGen('solarpanels:photonic_solar_panel','solarpanels:photonic_solar_element','solarpanels:photonic_energy_tablet','solarpanels:light_absorbing_solar_panel','extendedcrafting:enhanced_ender_ingot','mekaevolution:infinite_control_circuit')
let Mektablet = (output,E,N,S,C) =>{
  event.shaped(output,[
  'ece',
  'sns',
  'ece'
],{e:E,n:N,s:S,c:C})}
Mektablet('solarpanels:improved_energy_tablet','mekanism:elite_control_circuit','mekanism:energy_tablet','mekanism:alloy_reinforced','lazierae2:resonating_crystal')
Mektablet('solarpanels:quantum_energy_tablet','mekanism:ultimate_control_circuit','solarpanels:improved_energy_tablet','mekanism:alloy_atomic','#forge:ingots/fluix_steel')
Mektablet('solarpanels:spectral_energy_tablet','mekaevolution:absolute_control_circuit','solarpanels:quantum_energy_tablet','mekanism:pellet_antimatter','create_confectionery:bar_of_ruby_chocolate')
Mektablet('solarpanels:singular_energy_tablet','mekaevolution:supreme_control_circuit','solarpanels:spectral_energy_tablet','draconicevolution:wyvern_core','ten3:bizarrerie')
Mektablet('solarpanels:light_absorbing_energy_tablet','mekaevolution:cosmic_control_circuit','solarpanels:singular_energy_tablet','draconicevolution:awakened_core','#forge:ingots/draconium_awakened')
Mektablet('solarpanels:photonic_energy_tablet','mekaevolution:infinite_control_circuit','solarpanels:light_absorbing_energy_tablet','draconicevolution:chaotic_core','extendedcrafting:enhanced_ender_ingot')
Mektablet('mekanismmatter:matter_fabricator','solarpanels:photonic_energy_tablet','mekanism:antiprotonic_nucleosynthesizer','mekaevolution:qio_drive_infinite','draconicadditions:chaos_heart')
Mektablet('mekanismmatter:matter_synthesizer','solarpanels:photonic_energy_tablet','mekanism:antiprotonic_nucleosynthesizer','mekanism:supercharged_coil','mekaevolution:infinite_energy_cube')

event.shaped('mekanism:metallurgic_infuser', [
  ['#forge:ingots/manasteel', 'thermal:machine_furnace', '#forge:ingots/manasteel'], 
  ['redstone_arsenal:flux_gem', 'dimstorage:dimensional_chest', 'redstone_arsenal:flux_gem'], 
  ['#forge:ingots/manasteel', 'thermal:machine_furnace', '#forge:ingots/manasteel']
])
})
