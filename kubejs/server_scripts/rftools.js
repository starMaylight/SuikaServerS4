onEvent('recipes', event => {
    //Lace add
    event.remove({output: 'rftoolsbase:machine_frame'})

    event.recipes.createMechanicalCrafting('rftoolsbase:machine_frame',[
        'ABCDDEFA',
        'GHIIIIHG',
        'GJKLMNOG',
        'DJMNKLOD',
        'DJLKNMOD',
        'GJNMLKOG',
        'GHPPPPHG',
        'AQRDDSTA'
    ],
    {
        A:'rftoolsbase:infused_enderpearl',
        B:'create_dd:netherite_casing',
        C:'create_dd:stargaze_singularity_casing',
        D:'#forge:storage_blocks/osmium',
        E:'create:brass_casing',
        F:'create:railway_casing',
        G:'mythicbotany:alfsteel_ingot',
        H:'rftoolsbase:infused_diamond',
        I:'solarforge:illidium_ingot',
        J:'solarforge:charged_qualadium_ingot',
        K:'refinedstorage:advanced_processor',
        L:'cyclic:gem_obsidian',
        M:'rftoolsbase:dimensionalshard',
        N:'mythicbotany:raw_elementium',
        O:'solarforge:algadium_ingot',
        P:'solarforge:qualadium_ingot',
        Q:'create_dd:mithril_casing',
        R:'create_dd:blaze_gold_casing',
        S:'create_dd:refined_radiance_casing',
        T:'create_dd:overcharged_casing'
        
    })
    event.recipes.createFilling('rftoolsbase:machine_frame', ['mekanism:steel_casing', Fluid.of('create_dd:shimmer',1000)])

})