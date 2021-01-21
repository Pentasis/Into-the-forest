// priority: 10

onEvent('recipes', event => {

	// Remove some silly recipes from the cuttingboard
	event.remove({output: 'minecraft:brick', type: 'farmersdelight:cutting'});
	event.remove({output: 'minecraft:nether_brick', type: 'farmersdelight:cutting'});
	event.remove({output: 'minecraft:leather', type: 'farmersdelight:cutting'});


	// Remove stew & soup from crafting table
	event.remove({output: 'minecraft:rabbit_stew', type: 'minecraft:crafting_shapeless'});
	event.remove({output: 'minecraft:rabbit_stew', type: 'minecraft:crafting_shaped'});
	event.remove({output: 'minecraft:mushroom_stew', type: 'minecraft:crafting_shapeless'});
	event.remove({output: 'minecraft:mushroom_stew', type: 'minecraft:crafting_shaped'});
	event.remove({output: 'minecraft:beetroot_soup', type: 'minecraft:crafting_shapeless'});
	event.remove({output: 'minecraft:beetroot_soup', type: 'minecraft:crafting_shaped'});
	
});
