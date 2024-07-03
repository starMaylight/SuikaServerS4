onEvent('item.modification', event => {
	event.modify('extendedcrafting:black_iron_ingot', item => {
		item.rename('midnight_ingot')
	  })
	//event.renameItem('extendedcrafting:black_iron_ingot','midnight_ingot')
})