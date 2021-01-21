// priority: 10

onEvent('recipes', event => {

	event.replaceInput({output: 'minecraft:stone_shovel'}, 'minecraft:cobblestone', 'kubejs:bronze_ingot');
	event.replaceInput({output: 'minecraft:stone_axe'}, 'minecraft:cobblestone', 'kubejs:bronze_ingot');
	event.replaceInput({output: 'minecraft:stone_pickaxe'}, 'minecraft:cobblestone', 'kubejs:bronze_ingot');
	event.replaceInput({output: 'minecraft:stone_hoe'}, 'minecraft:cobblestone', 'kubejs:bronze_ingot');
	event.replaceInput({output: 'minecraft:stone_sword'}, 'minecraft:cobblestone', 'kubejs:bronze_ingot');

	event.replaceInput({output: 'minecraft:diamond_shovel'}, 'minecraft:diamond', 'immersiveengineering:ingot_steel');
	event.replaceInput({output: 'minecraft:diamond_axe'}, 'minecraft:diamond', 'immersiveengineering:ingot_steel');
	event.replaceInput({output: 'minecraft:diamond_pickaxe'}, 'minecraft:diamond', 'immersiveengineering:ingot_steel');
	event.replaceInput({output: 'minecraft:diamond_hoe'}, 'minecraft:diamond', 'immersiveengineering:ingot_steel');
	event.replaceInput({output: 'minecraft:diamond_sword'}, 'minecraft:diamond', 'immersiveengineering:ingot_steel');

	event.replaceInput({output: 'minecraft:netherite_shovel'}, 'minecraft:netherite_ingot', 'kubejs:titanium_ingot');
	event.replaceInput({output: 'minecraft:netherite_axe'}, 'minecraft:netherite_ingot', 'kubejs:titanium_ingot');
	event.replaceInput({output: 'minecraft:netherite_pickaxe'}, 'minecraft:netherite_ingot', 'kubejs:titanium_ingot');
	event.replaceInput({output: 'minecraft:netherite_hoe'}, 'minecraft:netherite_ingot', 'kubejs:titanium_ingot');
	event.replaceInput({output: 'minecraft:netherite_sword'}, 'minecraft:netherite_ingot', 'kubejs:titanium_ingot');

	event.remove({output: 'immersiveengineering:shovel_steel'});
	event.remove({output: 'immersiveengineering:axe_steel'});
	event.remove({output: 'immersiveengineering:pickaxe_steel'});
	event.remove({output: 'immersiveengineering:hoe_steel'});
	event.remove({output: 'immersiveengineering:sword_steel'});

	event.remove({output: 'notreepunching:iron_knife'});
	event.remove({output: 'notreepunching:gold_knife'});
	event.remove({output: 'notreepunching:diamond_knife'});
	event.remove({output: 'notreepunching:iron_mattock'});
	event.remove({output: 'notreepunching:gold_mattock'});
	event.remove({output: 'notreepunching:diamond_mattock'});
	event.remove({output: 'notreepunching:iron_saw'});
	event.remove({output: 'notreepunching:gold_saw'});
	event.remove({output: 'notreepunching:diamond_saw'});

});