onEvent('recipes', event=>{
    //Lace add
    event.remove({output: 'integrateddynamics:energy_battery'})

    event.remove({output: 'integrateddynamics:cable'})
    event.remove({output: 'integrateddynamics:variable'})
    event.remove({output: 'integrateddynamics:variable_transformer_output'})
    event.remove({output: 'integrateddynamics:variable_transformer_input'})
    event.remove({output: 'integrateddynamics:logic_programmer'})
    event.remove({output: 'integrateddynamics:variablestore'})

    event.recipes.botania.runic_altar("integrateddynamics:energy_battery", ["extradisks:256k_storage_part", "integrateddynamics:crystalized_menril_block","create_dd:mithril_casing"], 5000)

    event.custom({
        "type": "ten3:compressor",
        "inputs": [
          {
            "form": "item",
            "type": "static",
            "key": "kubejs:azure_menril_ingot"
          },
          {
            "form": "item",
            "type": "static",
            "key": "ten3:mould_rod"
          }
        ],
        "outputs": [
          {
            "form": "item",
            "key": "integrateddynamics:cable",
            "count": 2
          }
        ],
        "time": 100
      })
      event.recipes.thermal.press('integrateddynamics:cable', ['kubejs:azure_menril_ingot', 'ten3:mould_rod'])
      
    event.custom({
        "type": "ten3:induction_furnace",
        "inputs": [
          {
            "form": "item",
            "type": "tag",
            "key": "forge:ingots/powered_tin",
            "count": 2
          },
          {
            "form": "item",
            "type": "static",
            "key": "integrateddynamics:crystalized_menril_chunk"
          },
          {
            "form": "item",
            "type": "tag",
            "key": "forge:ingots/azure_silver"
          }
        ],
        "outputs": [
          {
            "form": "item",
            "key": "kubejs:azure_menril_ingot"
          }
        ],
        "time": 100
      })
      event.recipes.thermal.smelter('kubejs:azure_menril_ingot',['#forge:ingots/azure_silver', 'integrateddynamics:crystalized_menril_chunk','2x #forge:ingots/powered_tin']).energy(200000)
      event.custom({
        "type": "ten3:compressor",
        "inputs": [
          {
            "form": "item",
            "type": "static",
            "key": "kubejs:azure_menril_ingot"
          },
          {
            "form": "item",
            "type": "static",
            "key": "ten3:mould_plate"
          }
        ],
        "outputs": [
          {
            "form": "item",
            "key": "integrateddynamics:variable"
          }
        ],
        "time": 100
      })
      event.recipes.thermal.press('integrateddynamics:variable', ['kubejs:azure_menril_ingot', 'ten3:mould_plate'])
      event.shaped('integrateddynamics:variable_transformer_input', [
        ' A ',
        'SBS',
        ' A '
      ], {
        S: 'kubejs:azure_menril_ingot',
        A: 'integrateddynamics:variable',
        B: 'minecraft:sticky_piston'
      })
      event.shaped('integrateddynamics:variable_transformer_output', [
        ' A ',
        'SBS',
        ' A '
      ], {
        S: 'kubejs:azure_menril_ingot',
        A: 'integrateddynamics:variable',
        B: 'minecraft:piston'
      })
      event.shaped('integrateddynamics:logic_programmer', [
        'ASA',
        'SBS',
        'ASA'
      ], {
        S: 'kubejs:azure_menril_ingot',
        A: 'integrateddynamics:variable',
        B: 'mekanism:steel_casing'
      })
      event.shaped('integrateddynamics:variablestore', [
        'ASA',
        'SBS',
        'ASA'
      ], {
        S: 'kubejs:azure_menril_ingot',
        A: 'integrateddynamics:variable',
        B: 'integrateddynamics:energy_battery'
      })
    
})