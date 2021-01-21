// priority: 400

onEvent('item.tags', event => {
	event.get('forge:ores').add('kubejs:tin_ore');
	event.get('forge:ores/tin').add('kubejs:tin_ore');

	event.get('forge:ingots').add('kubejs:tin_ingot');
	event.get('forge:ingots').add('kubejs:bronze_ingot');
	event.get('forge:ingots').add('kubejs:titanium_ingot');
	event.get('forge:ingots/tin').add('kubejs:tin_ingot');
	//event.get('forge:ingots/bronze').add('kubejs:bronze_ingot'); // Removed because IE messes up alloy recipes
	event.get('forge:ingots/titanium').add('kubejs:titanium_ingot');

	event.get('forge:nuggets').add('kubejs:tin_nugget');
	event.get('forge:nuggets').add('kubejs:bronze_nugget');
	event.get('forge:nuggets').add('kubejs:titanium_nugget');
	event.get('forge:nuggets/tin').add('kubejs:tin_nugget');
	//event.get('forge:nuggets/bronze').add('kubejs:bronze_nugget'); // Removed because IE messes up alloy recipes
	event.get('forge:nuggets/titanium').add('kubejs:titanium_nugget');

})
