// priority: 10

// Logs, planks, slabs & stairs

onEvent('recipes', event => {

	var woodTypes = [
		['minecraft', 'oak'],
		['minecraft', 'birch'],
		['minecraft', 'spruce'],
		['minecraft', 'jungle'],
		['minecraft', 'acacia'],
		['minecraft', 'dark_oak'],
		['minecraft', 'crimson'],
		['minecraft', 'warped'],
		['upgrade_aquatic', 'driftwood'],
		['upgrade_aquatic', 'river'],
		['atmospheric', 'rosewood'],
		['atmospheric', 'morado'],
		['atmospheric', 'yucca'],
		['atmospheric', 'kousa'],
		['atmospheric', 'aspen'],
		['atmospheric', 'grimwood'],
		['integrateddynamics', 'menril'],
		['autumnity', 'maple']
	];

	woodTypes.forEach(wood => {

		log = 'log';

		if (wood[1] == 'crimson' || wood[1] == 'warped') {
			log = 'stem';
		}

		if (item.getItem(`${wood[0]}:stripped_${wood[1]}_${log}`) != AIR_ITEM) {
			removeDefaultRecipes(`${wood[0]}:stripped_${wood[1]}_${log}`, event);
			event.remove({output: `${wood[0]}:stripped_${wood[1]}_${log}`, type: 'farmersdelight:cutting'});
		}
		if (item.getItem(`${wood[0]}:${wood[1]}_planks`) != AIR_ITEM) {
			removeDefaultRecipes(`${wood[0]}:${wood[1]}_planks`, event);
			event.remove({output: `${wood[0]}:${wood[1]}_planks`, type: 'farmersdelight:cutting'});
		}
		if (item.getItem(`${wood[0]}:${wood[1]}_slab`) != AIR_ITEM) {
			removeDefaultRecipes(`${wood[0]}:${wood[1]}_slab`, event);
		}
		if (item.getItem(`${wood[0]}:${wood[1]}_stairs`) != AIR_ITEM) {
			removeDefaultRecipes(`${wood[0]}:${wood[1]}_stairs`, event);
		}
		if (item.getItem(`quark:${wood[1]}_vertical_slab`) != AIR_ITEM) {
			removeDefaultRecipes(`quark:${wood[1]}_vertical_slab`, event);
		}
		if (item.getItem(`buildersaddition:${wood[1]}_vertical_slab`) != AIR_ITEM) {
			removeDefaultRecipes(`buildersaddition:${wood[1]}_vertical_slab`, event);
		}


		// Simple, early game planks
		if (item.getItem(`${wood[0]}:stripped_${wood[1]}_${log}`) != AIR_ITEM) {
			event.shaped(Item.of(`${wood[0]}:stripped_${wood[1]}_${log}`), [
		        'LF'
		    ], {
		        L: `${wood[0]}:${wood[1]}_${log}`,
		        F: 'minecraft:flint'
		    });

		    event.shaped(Item.of(`${wood[0]}:${wood[1]}_planks`, 2), [
		        'LF'
		    ], {
		        L: `${wood[0]}:stripped_${wood[1]}_${log}`,
		        F: 'minecraft:flint'
		    });
		}

	});

});