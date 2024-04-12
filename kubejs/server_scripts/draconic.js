onEvent('recipes', event => {
    event.remove({output: '#forge:ingots/draconium'})
    event.recipes.thermal.smelter('draconicevolution:draconium_ingot', ['kubejs:thaumium_ingot','mekanism:pellet_antimatter','#forge:dusts/draconium']).energy(5000000)
    event.recipes.thermal.smelter('draconicevolution:draconium_ingot', ['kubejs:thaumium_ingot','mekanism:pellet_antimatter','9x #forge:nuggets/draconium']).energy(5000000)
})