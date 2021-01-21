// priority: 10

onEvent('recipes', event => {

    Object.keys(METALS).forEach(metal => {

        // Remove all recipes of nuggets, blocks & ingots.
        if (METALS[metal].nugget) {
            event.remove({
                output: METALS[metal].nugget
            });
        }
        if (METALS[metal].ingot) {
            event.remove({
                output: METALS[metal].ingot
            });
        }
        if (METALS[metal].block) {
            event.remove({
                output: METALS[metal].block
            });
        }

        // Step 1. Raw grinding: ore to ore cluster.
        if (METALS[metal].cluster) {
            event.recipes.create.crushing([
                    Item.of(METALS[metal].cluster),
                    Item.of('minecraft:cobblestone'),
                    Item.of(METALS[metal].crushed).withChance(0.3),
                    Item.of(METALS[metal].crushed).withChance(0.1)
                ],
                Ingredient.of(METALS[metal].ore)
            );
        }

        // Step 2. Course grinding: ore cluster to crushed
        if (METALS[metal].crushed) {
            event.remove({
                output: METALS[metal].crushed
            });

            event.recipes.create.crushing([
                    Item.of(METALS[metal].crushed, 2),
                    Item.of('minecraft:gravel')
                ],
                Ingredient.of(METALS[metal].cluster)
            );
        }

        // Step 3. Medium grinding: crushed to clump
        if (METALS[metal].clump) {
            event.recipes.create.crushing([
                    Item.of(METALS[metal].clump, 2),
                    Item.of('minecraft:gravel')
                ],
                Ingredient.of(METALS[metal].crushed)
            );
        }

        // Step 4. Fine grinding: ore clump to dirty dust
        if (METALS[metal].dirty_dust) {
            event.recipes.create.crushing([
                    Item.of(METALS[metal].dirty_dust),
                    Item.of('minecraft:sand')
                ],
                Ingredient.of(METALS[metal].clump)
            );
        }

        // Step 5. Washing: dirty dust to dust
        if (METALS[metal].dust) {
            event.remove({
                id: `immersiveengineering:crafting/hammercrushing_${metal}`
            });

            event.recipes.create.splashing([
                    Item.of(METALS[metal].dust),
                    Item.of('minecraft:clay_ball')
                ],
                Ingredient.of(METALS[metal].dirty_dust)
            );
        }

    });

    Object.keys(GEMS).forEach(gem => {

        // Remove all recipes of gems.
        if (GEMS[gem].item) {
            event.remove({
                output: GEMS[gem].item
            });
        }

        event.recipes.create.crushing([
                Item.of(GEMS[gem].item, GEMS[gem].base_amount),
                Item.of(GEMS[gem].waste),
                Item.of(GEMS[gem].item, GEMS[gem].base_amount).withChance(0.5),
                Item.of(GEMS[gem].item, GEMS[gem].base_amount).withChance(0.25),
                Item.of(GEMS[gem].item, GEMS[gem].base_amount).withChance(0.05)
            ],
            Ingredient.of(GEMS[gem].ore)
        );

    });

});