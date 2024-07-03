onEvent('recipes', event => {
    let del =[
        'extendedcrafting:black_iron_ingot',
        'extendedcrafting:black_iron_block',
        'extendedcrafting:frame',
        'extendedcrafting:crafting_core',
        'extendedcrafting:black_iron_slate',
        'extendedcrafting:basic_component',
        'extendedcrafting:advanced_component',
        'extendedcrafting:elite_component',
        'extendedcrafting:ultimate_component',
        //recipe no set
        'extendedcrafting:enhanced_ender_ingot',
        'extendedcrafting:ender_ingot',
        'extendedcrafting:redstone_ingot',
        'extendedcrafting:luminessence'
    ]
    event.remove({output:del})

    function fusion_crafting(output, mainInput, sideInput, tier, energy) {
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
    fusion_crafting('extendedcrafting:black_iron_ingot','solarforge:algadium_ingot',['thermal:bitumen_block','kubejs:taken_element_crystal','create:sturdy_sheet','extradisks:withering_processor','mekanismmatter:universal_mass','fluxnetworks:flux_block'],'DRACONIC',1000000)
    event.recipes.thermal.press('5x extendedcrafting:black_iron_slate', ['extendedcrafting:black_iron_block', 'ten3:mould_plate'])
    event.shaped('extendedcrafting:frame',[
        'exe',
        'xnx',
        'exe'
    ],{
        e:'extendedcrafting:black_iron_ingot',
        n:'extendedcrafting:black_iron_slate',
        x:'botania:bifrost_perm'
    })
    event.shaped('extendedcrafting:crafting_core',[
        ['extendedcrafting:black_iron_ingot','cyclic:crafter','extendedcrafting:black_iron_ingot'],
        ['rftoolsbuilder:space_chamber_controller','extendedcrafting:frame','rftoolsbuilder:space_chamber_controller'],
        ['extendedcrafting:black_iron_ingot','extendedcrafting:black_iron_slate','extendedcrafting:black_iron_ingot']
    ])
    //雑に簡易化
    function ExCombi(output,inputmain,side1,side2,side3,side4,cost){
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost":cost,
        "input": {"item": inputmain},
        "ingredients": [{"item": side1},{"item": side2},{"item": side3},{"item": side4}],
        "result": {"item": output}
      })}
    ExCombi('extendedcrafting:basic_component','extendedcrafting:black_iron_slate','mythicbotany:nidavellir_rune','botania:rune_water','psi:ivory_psimetal','extendedcrafting:luminessence',1000000)
    ExCombi('extendedcrafting:basic_component','extendedcrafting:black_iron_slate','mythicbotany:asgard_rune','botania:rune_fire','redstone_arsenal:flux_ingot','extendedcrafting:luminessence',1000000)
    ExCombi('extendedcrafting:elite_component','extendedcrafting:black_iron_slate','mythicbotany:asgard_rune','botania:rune_earth','create_dd:overcharge_alloy','extendedcrafting:luminessence',1000000)
    ExCombi('extendedcrafting:ultimate_component','extendedcrafting:black_iron_slate','mythicbotany:niflheim_rune','botania:rune_air','solarforge:geminium_ingot','extendedcrafting:luminessence',1000000)
    })