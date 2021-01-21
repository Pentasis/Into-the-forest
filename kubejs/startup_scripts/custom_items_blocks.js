// priority: 500

onEvent('item.registry', event => {

	// Cluster (from ore)
	event.create('aluminum_cluster').displayName('Aluminum cluster');
	event.create('copper_cluster').displayName('Copper cluster');
	event.create('gold_cluster').displayName('Gold cluster');
	event.create('iron_cluster').displayName('Iron cluster');
	event.create('lead_cluster').displayName('Lead cluster');
	event.create('nickel_cluster').displayName('Nickel cluster');
	event.create('silver_cluster').displayName('Silver cluster');
	event.create('tin_cluster').displayName('Tin cluster');
	event.create('uranium_cluster').displayName('Uranium cluster');
	event.create('zinc_cluster').displayName('Zinc cluster');

	// Crushed from cluster (automatically added by create)

	// Clump from Crushed
	event.create('aluminum_clump').displayName('Aluminum clump');
	event.create('copper_clump').displayName('Copper clump');
	event.create('gold_clump').displayName('Gold clump');
	event.create('iron_clump').displayName('Iron clump');
	event.create('lead_clump').displayName('Lead clump');
	event.create('nickel_clump').displayName('Nickel clump');
	event.create('silver_clump').displayName('Silver clump');
	event.create('tin_clump').displayName('Tin clump');
	event.create('uranium_clump').displayName('Uranium clump');
	event.create('zinc_clump').displayName('Zinc clump');

	// Dirty dust from clump
	event.create('aluminum_dust_dirty').displayName('Aluminum dirty dust');
	event.create('copper_dust_dirty').displayName('Copper dirty dust');
	event.create('gold_dust_dirty').displayName('Gold dirty dust');
	event.create('iron_dust_dirty').displayName('Iron dirty dust');
	event.create('lead_dust_dirty').displayName('Lead dirty dust');
	event.create('nickel_dust_dirty').displayName('Nickel dirty dust');
	event.create('silver_dust_dirty').displayName('Silver dirty dust');
	event.create('tin_dust_dirty').displayName('Tin dirty dust');
	event.create('uranium_dust_dirty').displayName('Uranium dirty dust');
	event.create('zinc_dust_dirty').displayName('Zinc dirty dust');

	// Missing defaults
	event.create('bronze_ingot').displayName('Bronze ingot');
	event.create('bronze_nugget').displayName('Bronze nugget');
	event.create('tin_dust').displayName('Tin dust');
	event.create('tin_ingot').displayName('Tin ingot');
	event.create('tin_nugget').displayName('Tin nugget');
	event.create('titanium_ingot').displayName('Titanium ingot');
	event.create('titanium_nugget').displayName('Titanium nugget');
	event.create('zinc_dust').displayName('Zinc dust');
});

onEvent('block.registry', event => {
  event.create('tin_ore').material('stone').hardness(3.0).displayName('Tin ore');
  event.create('bronze_block').material('iron').hardness(5.0).displayName('Bronze block');
  event.create('tin_block').material('iron').hardness(5.0).displayName('Tin block');
  event.create('titanium_block').material('iron').hardness(5.0).displayName('Titanium block');
});