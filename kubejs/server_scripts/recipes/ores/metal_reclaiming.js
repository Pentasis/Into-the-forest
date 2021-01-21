// priority: 10

onEvent('recipes', event => {

    Object.keys(METALS).forEach(metal => {

        // Grind ingots & blocks into nuggets
        event.recipes.create.crushing([
                Item.of(METALS[metal].nugget, 9)
            ],
            Ingredient.of(METALS[metal].ingot)
        );

        event.recipes.create.crushing([
                Item.of(METALS[metal].nugget, 64),
                Item.of(METALS[metal].nugget, 17)
            ],
            Ingredient.of(METALS[metal].block)
        );

        // Grind ingots & blocks into dust

    });

});