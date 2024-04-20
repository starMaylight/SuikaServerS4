onEvent('recipes', event => {
    event.recipes.botania.mana_infusion('psi:psidust','minecraft:redstone',10000,'kubejs:psionic_transmutation_catalyst')
    event.recipes.botania.mana_infusion(Item.of('patchouli:guide_book', '{"patchouli:book":"psi:encyclopaedia_psionica"}'),'minecraft:book',10000,'kubejs:psionic_transmutation_catalyst')
})