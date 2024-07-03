onEvent('mekanism.gas.registry', event => {
    event.create("mana").color(0x00ced1)
    event.create("arc").color(0x00bfff)
    event.create("stasis").color(0x0000ff)
    event.create("wither").color(0x32cd32)
    event.create("botania").color(0x7cfc00)
    event.create("electric_frost").color(0x191970)
    event.create("withering_of_nature").color(0x808000)
})

onEvent('mekanism.infuse_type.registry', event => {

    event.create("taken").color(0x000000)
    event.create("gaia").color(0xe6e6fa)
    event.create("arc").color(0x00bfff)
    event.create("void").color(0x9400d3)
    event.create("psi").color(0x00bfff)
    event.create("solar").color(0xff8c00)
    event.create("mana").color(0x00ced1)
  })