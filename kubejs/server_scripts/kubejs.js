// priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

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

    let obsidian_casing_input = 'kubejs:incomplete_obsidian_casing';
    event.recipes.createSequencedAssembly([
        'kubejs:obsidian_casing'
    ],'rftoolsbase:machine_frame',[
        event.recipes.createDeploying(obsidian_casing_input,[obsidian_casing_input,'create_dd:infaobsidian']),
        event.recipes.createDeploying(obsidian_casing_input,[obsidian_casing_input,'thermal:enderium_ingot']),
        event.recipes.createDeploying(obsidian_casing_input,[obsidian_casing_input,'minecraft:respawn_anchor']),
        event.recipes.createFilling(obsidian_casing_input,[obsidian_casing_input,Fluid.of('minecraft:lava',1000)]),
        event.recipes.createPressing(obsidian_casing_input,obsidian_casing_input)
    ]).transitionalItem(obsidian_casing_input).loops(4)
    event.custom({
      "type": "mythicbotany:infusion",
      "fromColor": 16711821,
      "group": "infuser",
      "ingredients":[
        {
          "item":'appbot:mana_cell_housing'
        },{
          "item":'mythicbotany:alf_pixie_spawn_egg'
        },{
          "item":'extendedcrafting:ender_star'
        },{
          "item":'mythicbotany:alfsteel_block'
        },{
          "item":'mekanism:block_refined_obsidian'
        },{
          "item":'kubejs:obsidian_casing'
        }
      ],
      "mana": 18000000,
      "output": {
        "count": 1,
        "item": 'kubejs:refined_obsidian_casing'
      },
      "toColor": 16750080
    })
    event.recipes.botania.runic_altar('kubejs:blank_rune',['quark:blank_rune','botania:manasteel_ingot','botania:terrasteel_ingot','botania:elementium_ingot','botania:dragonstone','botania:mana_diamond','mythicbotany:alfsteel_ingot','botania:mana_powder'],20000)
    event.recipes.botania.runic_altar('kubejs:rune_of_psi',['kubejs:blank_rune','psi:psidust_block',Item.of('patchouli:guide_book', '{"patchouli:book":"psi:encyclopaedia_psionica"}')],12000)
    event.recipes.botania.runic_altar('kubejs:rune_of_yin_and_yang',['kubejs:blank_rune','psi:ivory_psimetal_block','psi:ivory_psimetal_block','psi:ivory_psimetal_block','kubejs:blank_rune','psi:ebony_psimetal_block','psi:ebony_psimetal_block','psi:ebony_psimetal_block'],20000)
    function fusion_crafting(output, mainInput, sideInput, tier, energy) {
      //ExCの方の奴をコピペしてきただけ
      if (typeof tier!="string") tier = "DRACONIUM"
      if (typeof energy!="number") energy = 100000
      let catalyst = Ingredient.of(mainInput)
      if (catalyst.getCount() > 1) {
          catalyst = {
              type: "draconicevolution:ingredient_stack",
              items: [catalyst],
              count: catalyst.getCount()
          }
      }
      
      let items = Array.isArray(sideInput) ? sideInput : [sideInput]
      let ingredients = []
      items.forEach(item => {ingredients.push(Ingredient.of(item))})
              
      event.custom({
          type: "draconicevolution:fusion_crafting",
  
          catalyst: catalyst,
          ingredients: ingredients,
          result: Ingredient.of(output),
  
          total_energy: energy,
          tier: tier
      })
  }
  fusion_crafting('kubejs:awakened_rune_of_yin_and_yang','kubejs:rune_of_yin_and_yang',['hostilenetworks:overworld_prediction', 'hostilenetworks:end_prediction', 'minecraft:cobblestone', 'minecraft:end_stone', 'quark:green_corundum', 'quark:myalite_crystal', 'minecraft:water_bucket', 'thermal:ender_bucket'],'CHAOTIC',2048000000)

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
    
  event.recipes.mekanismEnriching('kubejs:void_element_crystal',Item.of('magickcore:element_crystal','{ELEMENT:"void"}'))
  event.recipes.mekanismEnriching('kubejs:stasis_element_crystal',Item.of('magickcore:element_crystal','{ELEMENT:"stasis"}'))
  event.recipes.mekanismEnriching('kubejs:wither_element_crystal',Item.of('magickcore:element_crystal','{ELEMENT:"wither"}'))
  event.recipes.mekanismEnriching('kubejs:botania_element_crystal',Item.of('magickcore:element_crystal','{ELEMENT:"botania"}'))
  event.recipes.mekanismEnriching('kubejs:psi_element_crystal',Item.of('magickcore:element_crystal','{ELEMENT:"psi"}'))
  event.recipes.mekanismEnriching('kubejs:arc_element_crystal',Item.of('magickcore:element_crystal','{ELEMENT:"arc"}'))
  event.recipes.mekanismEnriching('kubejs:solar_element_crystal',Item.of('magickcore:element_crystal','{ELEMENT:"solar"}'))
  event.recipes.mekanismEnriching('kubejs:taken_element_crystal',Item.of('magickcore:element_crystal','{ELEMENT:"taken"}'))

    let mekInfuseItem = (input, infuseType, amount) => {
      if (amount == undefined) { amount = 10 }
      event.custom({
          "type": "mekanism:infusion_conversion",
          "input": { "ingredient": { "item": input }},
          "output": { "infuse_type": infuseType, "amount": amount }
          })
      }
    mekInfuseItem('kubejs:taken_element_crystal','kubejs:taken')
    mekInfuseItem('kubejs:psi_element_crystal','kubejs:psi')
    mekInfuseItem('kubejs:void_element_crystal','kubejs:void')
    mekInfuseItem('kubejs:solar_element_crystal','kubejs:solar')

    let mekOxiItem = (input,outgas,amount) =>{
      if (amount == undefined) { amount = 100 }
      event.custom({
        "type": "mekanism:oxidizing",
        "input": {"ingredient": {"item": input}},
        "output": {"gas": outgas,"amount": amount}
      })
    }
    mekOxiItem('kubejs:stasis_element_crystal','kubejs:stasis')
    mekOxiItem('kubejs:arc_element_crystal','kubejs:arc')
    mekOxiItem('kubejs:wither_element_crystal','kubejs:wither')
    mekOxiItem('kubejs:botania_element_crystal','kubejs:botania')
    event.custom({
      "type": "mekanism:chemical_infusing",
      "leftInput": {
        "amount": 10,
        "gas": "kubejs:arc"
      },
      "rightInput": {
        "amount": 10,
        "gas": "kubejs:stasis"
      },
      "output": {
        "gas": "kubejs:electric_frost",
        "amount": 1
      }
    })
    event.custom({
      "type": "mekanism:chemical_infusing",
      "leftInput": {
        "amount": 10,
        "gas": "kubejs:wither"
      },
      "rightInput": {
        "amount": 10,
        "gas": "kubejs:botania"
      },
      "output": {
        "gas": "kubejs:withering_of_nature",
        "amount": 1
      }
    })
    event.shaped('kubejs:basic_circuit_base',
    [
      'ABC',
      'DEF',
      'GHI'
    ],
    {
      A:'redstonepen:relay',
      B: 'createteleporters:advanced_part',
      C:'redstonepen:pulse_relay',
      D:'redstonepen:inverted_relay',
      E:'redstonepen:bridge_relay',
      F:'redstonepen:bistable_relay',
      G:Item.of('pneumaticcraft:empty_pcb', '{"pneumaticcraft:uv_exposure":100}'),
      H:'integrateddynamics:variable',
      I:'redstonepen:control_box'
  })
})