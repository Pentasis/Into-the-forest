// priority: 998

function removeDefaultRecipes(result, event) {
	event.remove({output: result, type: 'minecraft:crafting_shapeless'});
	event.remove({output: result, type: 'minecraft:crafting_shaped'});
	event.remove({output: result, type: 'minecraft:smelting'});
}