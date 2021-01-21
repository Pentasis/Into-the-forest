// priority: 10

onEvent('recipes', event => {

	var stoneTypes = [
		['create', 'limestone'],
		['create', 'weathered_limestone'],
		['create', 'gabbro'],
		['create', 'dolomite'],
		['create', 'scoria'],
		['create', 'dark_scoria'],
		['minecraft', 'andesite'],
		['minecraft', 'diorite'],
		['minecraft', 'granite'],
		['minecraft', 'stone'],
		['quark', 'basalt'],
		['quark', 'brimstone'],
		['quark', 'jasper'],
		['quark', 'limestone'],
		['quark', 'marble'],
		['quark', 'permafrost'],
		['quark', 'slate'],
		['minecraft', 'sandstone'],
		['minecraft', 'red_sandstone'],
		['atmospheric', 'arid_sandstone'],
		['atmospheric', 'red_arid_sandstone']
	];

	var stoneVariations = [
		'#',
		'cut_#',
		'#_cobblestone',
		'polished_#',
		'smooth_#',
		'#_bricks',
		'fancy_#_bricks',
		'#_pillar',
		'paved_#',
		'layered_#',
		'chiseled_#',
		'#_pavement',
		'#_speleotherm'
	];

	stoneTypes.forEach(type => {

		stoneVariations.forEach(variation => {

			stone = variation.replace('#', type[1]);

			if (item.getItem(`${type[0]}:${stone}`) != AIR_ITEM) {
				removeDefaultRecipes(`${type[0]}:${stone}`, event);
			}
			if (item.getItem(`${type[0]}:${stone}_slab`) != AIR_ITEM) {
				removeDefaultRecipes(`${type[0]}:${stone}_slab`, event);
			}
			if (item.getItem(`${type[0]}:${stone}_stairs`) != AIR_ITEM) {
				removeDefaultRecipes(`${type[0]}:${stone}_stairs`, event);
			}
			if (item.getItem(`${type[0]}:${stone}_wall`) != AIR_ITEM) {
				removeDefaultRecipes(`${type[0]}:${stone}_wall`, event);
			}

			if (item.getItem(`quark:${stone}_vertical_slab`) != AIR_ITEM) {
				removeDefaultRecipes(`quark:${stone}_vertical_slab`, event);
			}

			if (item.getItem(`buildersaddition:${stone}_vertical_slab`) != AIR_ITEM) {
				removeDefaultRecipes(`buildersaddition:${stone}_vertical_slab`, event);
			}

		});

	});

});