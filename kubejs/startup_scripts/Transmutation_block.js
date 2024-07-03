onEvent('block.registry', event => {
    event.create('origins_glass')
         .material('glass')
         .hardness(0.5)
         .displayName('Origins Glass') // No longer required in 1.18.2+
         .tagBlock('minecraft:impermeable') // Make it mine faster using a shovel in 1.18.2+
  	     .tagBlock('forge:glass') // Make it require an iron or higher level tool on 1.18.2+
  	     .requiresTool(true)
         .renderType('translucent')

    event.create('wither_glass')
         .material('glass')
         .hardness(0.5)
         .displayName('Wither Glass') // No longer required in 1.18.2+
         .tagBlock('minecraft:impermeable') // Make it mine faster using a shovel in 1.18.2+
  	     .tagBlock('forge:glass') // Make it require an iron or higher level tool on 1.18.2+
  	     .requiresTool(true)
         .renderType('translucent')
})