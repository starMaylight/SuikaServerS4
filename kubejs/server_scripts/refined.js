onEvent('recipes', event => {
    event.remove({output: '#forge:silicon'})
    event.remove({output: 'refinedstorage:basic_processor'})
    event.remove({output: 'refinedstorage:advanced_processor'})
    event.remove({output: 'refinedstorage:improved_processor'})
    event.remove({output: 'extradisks:withering_processor'})
    event.remove({output: 'extradisks:65536k_storage_part'})
    event.remove({output: 'extradisks:262144k_storage_part'})
    event.remove({output: 'extradisks:1048576k_storage_part'})
    event.remove({output: 'extradisks:infinite_storage_part'})


    event.remove({output:'refinedstorage:machine_casing'})
    event.custom({
      "type": "pneumaticcraft:assembly_laser",
      "input": {
        "item": "extradisks:raw_withering_processor",
        "count": 1
      },
      "result": {
        "item": "extradisks:withering_processor",
        "count": 1
      },
      "program": "laser"
    })
    event.custom({
        "type": "pneumaticcraft:assembly_laser",
        "input": {
          "count": 1,
          "item": "refinedstorage:raw_basic_processor"
        },
        "program": "laser",
        "result": {
          "count": 1,
          "item": "refinedstorage:basic_processor"
        }
      })
      event.custom({
        "type": "pneumaticcraft:assembly_laser",
        "input": {
          "count": 1,
          "item": "refinedstorage:raw_improved_processor"
        },
        "program": "laser",
        "result": {
          "count": 1,
          "item": "refinedstorage:improved_processor"
        }
      })
      event.custom({
        "type": "pneumaticcraft:assembly_laser",
        "input": {
          "count": 1,
          "item": "refinedstorage:raw_advanced_processor"
        },
        "program": "laser",
        "result": {
          "count": 1,
          "item": "refinedstorage:advanced_processor"
        }
      })
      event.recipes.botania.terra_plate('refinedstorage:machine_casing', ['rftoolsbase:machine_frame', 'refinedstorage:quartz_enriched_iron_block','botania:corporea_spark'], 5000000)

event.shaped('extradisks:65536k_storage_part',[
  'AEA',
  'TXT',
  'ATA'
],{
  E:'refinedstorage:quartz_enriched_iron',
  T:'extradisks:16384k_storage_part',
  X:'createteleporters:quantum_mechanism',
  A:'mekanism:qio_drive_base'
})
event.shaped('extradisks:262144k_storage_part',[
  'AEA',
  'TXT',
  'ATA'
],{
  E:'refinedstorage:quartz_enriched_iron',
  T:'extradisks:65536k_storage_part',
  X:'create_things_and_misc:vibration_mechanism',
  A:'mekanism:qio_drive_hyper_dense'
})
event.shaped('extradisks:1048576k_storage_part',[
  'AEA',
  'TXT',
  'ATA'
],{
  E:'refinedstorage:quartz_enriched_iron',
  T:'extradisks:262144k_storage_part',
  X:'create_dd:integrated_mechanism',
  A:'mekanism:qio_drive_time_dilating'
})
event.shaped('extradisks:infinite_storage_part',[
  'AEA',
  'TXT',
  'ATA'
],{
  E:'refinedstorage:quartz_enriched_iron',
  T:'extradisks:1048576k_storage_part',
  X:'solarforge:aura_healer_block',
  A:'mekanism:qio_drive_supermassive'
})
})
    //