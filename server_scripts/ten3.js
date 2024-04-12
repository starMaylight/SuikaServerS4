onEvent('recipes', event => {
    event.remove({output: 'ten3:redstone_ai'})

    let inter = 'kubejs:incomplete_redstone_ai'
    event.recipes.createSequencedAssembly([
        Item.of('ten3:redstone_ai').withChance(40),
        Item.of('pneumaticcraft:failed_pcb').withChance(20),
        Item.of('minecraft:redstone').withChance(25),
        'refinedstorage:silicon',
        'create:golden_sheet',
        'minecraft:slime_ball'
        ],
        'pneumaticcraft:printed_circuit_board',
        [
            event.recipes.createDeploying(inter,[inter,'refinedstorage:improved_processor']),
            event.recipes.createDeploying(inter,[inter,'createaddition:copper_wire']),
            event.recipes.createDeploying(inter,[inter,'minecraft:redstone_block']),
            event.recipes.createPressing(inter, inter)
        ]).transitionalItem(inter).loops(4)

    //Lace_addrecipe

    //val
    let inter2 = 'kubejs:incomplete_redstone_conductor'
    let inter3 = 'kubejs:incomplete_redstone_converter'
    let inter4 = 'kubejs:incomplete_redstone_storer'

    //remove

    event.remove({output:'ten3:redstone_conductor'})
    event.remove({output:'ten3:redstone_converter'})
    event.remove({output:'ten3:redstone_storer'})
    
    //add

    event.recipes.createSequencedAssembly([
        Item.of('ten3:redstone_conductor').withChance(40),
        Item.of('pneumaticcraft:failed_pcb').withChance(20),
        Item.of('minecraft:redstone').withChance(25)
        ],
        'cyclic:wireless_energy',
        [
            event.recipes.createDeploying(inter2,[inter2,'refinedstorage:advanced_processor']),
            event.recipes.createDeploying(inter2,[inter2,'planttech2:dancium_ingot']),
            event.recipes.createDeploying(inter2,[inter2,'minecraft:redstone_block']),
            event.recipes.createPressing(inter2, inter2)
        ]).transitionalItem(inter2).loops(4)

    event.recipes.createSequencedAssembly([
        Item.of('ten3:redstone_converter').withChance(40),
        Item.of('pneumaticcraft:failed_pcb').withChance(20),
        Item.of('minecraft:redstone').withChance(25)
        ],
        'cyclic:wireless_item',
        [event.recipes.createDeploying(inter3,[inter3,'refinedstorage:basic_processor']),
        event.recipes.createDeploying(inter3,[inter3,'thermal:invar_ingot']),
        event.recipes.createDeploying(inter3,[inter3,'minecraft:redstone_block']),
        event.recipes.createPressing(inter3, inter3)
        ]).transitionalItem(inter3).loops(4)
        
    event.recipes.createSequencedAssembly([
        Item.of('ten3:redstone_storer').withChance(40),
        Item.of('pneumaticcraft:failed_pcb').withChance(20),
        Item.of('minecraft:redstone').withChance(25)
        ],
        'cyclic:wireless_fluid',
        [event.recipes.createDeploying(inter4,[inter4,'refinedstorage:improved_processor']),
        event.recipes.createDeploying(inter4,[inter4,'create_dd:blaze_gold']),
        event.recipes.createDeploying(inter4,[inter4,'minecraft:redstone_block']),
        event.recipes.createPressing(inter4, inter4)
        ]).transitionalItem(inter4).loops(4)
})