// priority: 10

// Smoker 250
// Campfire 500
// Furnace 1100
// Blast furnace 2000
// Arc furnace 2500 - 3000


onEvent('recipes', event => {

    Object.keys(METALS).forEach(metal => {

        // High temperature
        if (METALS[metal].ore) {
            event.recipes.immersiveengineering.blast_furnace(
                Item.of(METALS[metal].ingot),
                Ingredient.of(METALS[metal].dust),
                'immersiveengineering:slag');

            event.recipes.immersiveengineering.arc_furnace(
                [Item.of(METALS[metal].ingot)],
                Ingredient.of(METALS[metal].dust), [],
                'immersiveengineering:slag');

            // Low temperature
            if (METALS[metal].melting_temp < 1100) {
                event.smelting(Item.of(METALS[metal].nugget, 2), METALS[metal].ore);
                event.smelting(Item.of(METALS[metal].nugget, 2), METALS[metal].cluster);
                event.smelting(Item.of(METALS[metal].nugget, 4), METALS[metal].crushed);
                event.smelting(Item.of(METALS[metal].nugget, 8), METALS[metal].clump);
                event.smelting(Item.of(METALS[metal].nugget, 8), METALS[metal].dirty_dust);
                event.smelting(Item.of(METALS[metal].nugget, 8), METALS[metal].dust);
            }

            // Campfire
            //if (METALS[metal].melting_temp < 500) {
                //event.campfire_cooking(Item.of(METALS[metal].nugget, 4), METALS[metal].ore);
                //event.campfire_cooking(Item.of(METALS[metal].nugget, 5), METALS[metal].cluster);
                //event.campfire_cooking(Item.of(METALS[metal].nugget, 6), METALS[metal].crushed);
                //event.campfire_cooking(Item.of(METALS[metal].nugget, 7), METALS[metal].dirty_dust);
                //event.campfire_cooking(Item.of(METALS[metal].nugget, 8), METALS[metal].dust);
            //}
        }

    });

})