onEvent('recipes', event => {
    let del =[
        'ae2:inscriber',
        'ae2:charger',
        'ae2:controller',
        'ae2:printed_silicon',
        'ae2:printed_logic_processor',
        'ae2:printed_engineering_processor',
        'ae2:printed_calculation_processor',
        'lazierae2:logic_unit'
    ]
    event.remove({output:del})
    event.remove({id:'createaddition:compat/ae2/charged_certus_quartz'})
    event.recipes.botania.terra_plate('ae2:controller', ['refinedstorage:controller', 'ae2:engineering_processor','botania:corporea_spark'], 5000000)
    function inscribe(output,middle,top) {
        event.custom({"type": "ae2:inscriber","ingredients": {"middle": {"item": middle},"top": {"item": top}},"mode": "press","result": {"count": 1,"item": output}})}
    inscribe('ae2:printed_engineering_processor','refinedstorage:raw_advanced_processor','ae2:engineering_processor_press')
    inscribe('ae2:printed_logic_processor','refinedstorage:raw_improved_processor','ae2:logic_processor_press')
    inscribe('ae2:printed_silicon','refinedstorage:raw_basic_processor','ae2:silicon_press')
    inscribe('ae2:printed_calculation_processor','ae2:charged_certus_quartz_crystal','ae2:calculation_processor_press')
    event.shaped('ae2:inscriber',[
        ['solarforge:algadium_ingot','createcasing:creative_press','solarforge:algadium_ingot'],
        ['solarforge:energy_core',null,'create:radial_chassis'],
        ['solarforge:algadium_ingot','createcasing:industrial_iron_depot','solarforge:algadium_ingot']])
    event.shaped('ae2:charger',[
        ['minecraft:iron_ingot','ae2:fluix_crystal','minecraft:iron_ingot'],
        ['minecraft:iron_ingot',null,null],
        ['minecraft:iron_ingot','ae2:fluix_crystal','minecraft:iron_ingot']])
    event.shapeless('ae2:charged_certus_quartz_crystal',['ae2:certus_quartz_crystal','create_dd:overcharged_alloy_block'])
    event.recipes.createDeploying('ae2:calculation_processor_press', ['rftoolsutility:module_template', 'refinedstorage:advanced_processor'])
    event.recipes.createDeploying('ae2:engineering_processor_press', ['rftoolsutility:module_template', 'refinedstorage:construction_core'])
    event.recipes.createDeploying('ae2:logic_processor_press', ['rftoolsutility:module_template', 'refinedstorage:improved_processor'])
    event.recipes.createDeploying('ae2:silicon_press', ['rftoolsutility:module_template', 'refinedstorage:basic_processor'])
    event.shaped('lazierae2:logic_unit',[
        ['lazierae2:fluix_steel_ingot','mekanism:energy_tablet','lazierae2:fluix_steel_ingot'],
        ['integrateddynamics:logic_director','ae2:logic_processor','integrateddynamics:logic_director'],
        ['lazierae2:fluix_steel_ingot','integrateddynamics:logic_director','lazierae2:fluix_steel_ingot']])
    })