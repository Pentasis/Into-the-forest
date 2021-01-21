// priority: 10

onEvent('recipes', event => {

    Object.keys(METALS).forEach(metal => {

        event.recipes.create.compacting(METALS[metal].ingot, [
            METALS[metal].nugget,
            METALS[metal].nugget,
            METALS[metal].nugget,
            METALS[metal].nugget,
            METALS[metal].nugget,
            METALS[metal].nugget,
            METALS[metal].nugget,
            METALS[metal].nugget,
            METALS[metal].nugget
        ]).superheated();

        event.recipes.create.compacting(METALS[metal].block, [
            METALS[metal].ingot,
            METALS[metal].ingot,
            METALS[metal].ingot,
            METALS[metal].ingot,
            METALS[metal].ingot,
            METALS[metal].ingot,
            METALS[metal].ingot,
            METALS[metal].ingot,
            METALS[metal].ingot
        ]).superheated();

        if (METALS[metal].slab) {
            event.recipes.create.compacting(METALS[metal].block, [
                METALS[metal].slab,
                METALS[metal].slab
            ]).superheated();
        }

        if (METALS[metal].dust) {
            event.recipes.create.compacting(METALS[metal].ingot, [
                METALS[metal].dust
            ]).superheated();
        }

        if (METALS[metal].melting_temp < 1100) {
            event.recipes.create.compacting(METALS[metal].ingot, [
                METALS[metal].nugget,
                METALS[metal].nugget,
                METALS[metal].nugget,
                METALS[metal].nugget,
                METALS[metal].nugget,
                METALS[metal].nugget,
                METALS[metal].nugget,
                METALS[metal].nugget,
                METALS[metal].nugget
            ]).heated();

            event.recipes.create.compacting(METALS[metal].block, [
                METALS[metal].ingot,
                METALS[metal].ingot,
                METALS[metal].ingot,
                METALS[metal].ingot,
                METALS[metal].ingot,
                METALS[metal].ingot,
                METALS[metal].ingot,
                METALS[metal].ingot,
                METALS[metal].ingot
            ]).heated();

            if (METALS[metal].slab) {
                event.recipes.create.compacting(METALS[metal].block, [
                    METALS[metal].slab,
                    METALS[metal].slab
                ]).heated();
            }

            if (METALS[metal].dust) {
                event.recipes.create.compacting(METALS[metal].ingot, [
                    METALS[metal].dust
                ]).heated();
            }
        }

    });

});