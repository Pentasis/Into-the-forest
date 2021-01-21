// priority: 10

onEvent('recipes', event => {

    Object.keys(ALLOYS).forEach(alloy => {

    	// Remove all recipes of nuggets, blocks & ingots.
        if (ALLOYS[alloy].nugget) {
            event.remove({
                output: ALLOYS[alloy].nugget
            });
        }
        if (ALLOYS[alloy].ingot) {
            event.remove({
                output: ALLOYS[alloy].ingot
            });
        }
        if (ALLOYS[alloy].block) {
            event.remove({
                output: ALLOYS[alloy].block
            });
        }

        amountOut = ALLOYS[alloy].metalA[1] + ALLOYS[alloy].metalB[1];

        event.recipes.immersiveengineering.alloy(
            Item.of(ALLOYS[alloy].ingot, amountOut),
            Ingredient.of(METALS[ALLOYS[alloy].metalA[0]].ingot).withCount(ALLOYS[alloy].metalA[1]),
            Ingredient.of(METALS[ALLOYS[alloy].metalB[0]].ingot).withCount(ALLOYS[alloy].metalB[1]));

        if (METALS[ALLOYS[alloy].metalA[0]].ore && METALS[ALLOYS[alloy].metalB[0]].ore) {
            event.recipes.immersiveengineering.alloy(
                Item.of(ALLOYS[alloy].ingot, amountOut),
                Ingredient.of(METALS[ALLOYS[alloy].metalA[0]].ore).withCount(ALLOYS[alloy].metalA[1]),
                Ingredient.of(METALS[ALLOYS[alloy].metalB[0]].ore).withCount(ALLOYS[alloy].metalB[1]));
        }

        if (METALS[ALLOYS[alloy].metalA[0]].dust && METALS[ALLOYS[alloy].metalB[0]].dust) {
            event.recipes.immersiveengineering.alloy(
                Item.of(ALLOYS[alloy].ingot, amountOut),
                Ingredient.of(METALS[ALLOYS[alloy].metalA[0]].dust).withCount(ALLOYS[alloy].metalA[1]),
                Ingredient.of(METALS[ALLOYS[alloy].metalB[0]].dust).withCount(ALLOYS[alloy].metalB[1]));
        }

    });

    // Andesite
    event.remove({output: 'create:andesite_alloy'});

    event.recipes.immersiveengineering.alloy(
        Item.of('create:andesite_alloy'),
        Ingredient.of('minecraft:andesite'),
        Ingredient.of('create:zinc_nugget')
    );

});