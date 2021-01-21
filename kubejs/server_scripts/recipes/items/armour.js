// priority: 10

onEvent('recipes', event => {

	event.replaceInput({output: 'minecraft:diamond_helmet'}, 'minecraft:diamond', 'immersiveengineering:ingot_steel');
	event.replaceInput({output: 'minecraft:diamond_chestplate'}, 'minecraft:diamond', 'immersiveengineering:ingot_steel');
	event.replaceInput({output: 'minecraft:diamond_leggings'}, 'minecraft:diamond', 'immersiveengineering:ingot_steel');
	event.replaceInput({output: 'minecraft:diamond_boots'}, 'minecraft:diamond', 'immersiveengineering:ingot_steel');

	event.replaceInput({output: 'minecraft:netherite_helmet'}, 'minecraft:netherite_ingot', 'kubejs:titanium_ingot');
	event.replaceInput({output: 'minecraft:netherite_chestplate'}, 'minecraft:netherite_ingot', 'kubejs:titanium_ingot');
	event.replaceInput({output: 'minecraft:netherite_leggings'}, 'minecraft:netherite_ingot', 'kubejs:titanium_ingot');
	event.replaceInput({output: 'minecraft:netherite_boots'}, 'minecraft:netherite_ingot', 'kubejs:titanium_ingot');

});