// priority: 10

onEvent('recipes', event => {

    event.remove({
        output: 'minecraft:terracotta',
        type: 'minecraft:smelting'
    });

    event.remove({
        output: 'minecraft:brick',
        type: 'minecraft:smelting'
    });

    event.remove({
        output: 'notreepunching:ceramic_large_vessel',
        type: 'minecraft:smelting'
    });

    event.remove({
        output: 'notreepunching:ceramic_small_vessel',
        type: 'minecraft:smelting'
    });

    event.remove({
        output: 'notreepunching:ceramic_bucket',
        type: 'minecraft:smelting'
    });

    event.remove({
        output: 'minecraft:flower_pot',
        type: 'minecraft:smelting'
    });

    event.remove({
        output: 'minecraft:brick',
        type: 'minecraft:firing'
    });

    event.remove({
        output: /minecraft:.+_glazed_terracotta/,
        type: 'minecraft:smelting'
    });

    event.custom({
        type: 'minecraft:firing',
        ingredient: Ingredient.of('minecraft:clay').toJson(),
        result: Item.of('minecraft:terracotta').toResultJson(),
        experience: 0.35,
 		cookingtime: 300,
    });

    event.custom({
        type: 'minecraft:firing',
        ingredient: Ingredient.of('notreepunching:clay_brick').toJson(),
        result: Item.of('minecraft:brick').toResultJson(),
        experience: 0.35,
 		cookingtime: 100,
    });

    event.custom({
        type: 'minecraft:firing',
        ingredient: Ingredient.of('notreepunching:clay_large_vessel').toJson(),
        result: Item.of('notreepunching:ceramic_large_vessel').toResultJson(),
        experience: 0.35,
 		cookingtime: 100,
    });

    event.custom({
        type: 'minecraft:firing',
        ingredient: Ingredient.of('notreepunching:clay_small_vessel').toJson(),
        result: Item.of('notreepunching:ceramic_small_vessel').toResultJson(),
        experience: 0.35,
 		cookingtime: 100,
    });

    event.custom({
        type: 'minecraft:firing',
        ingredient: Ingredient.of('notreepunching:clay_bucket').toJson(),
        result: Item.of('notreepunching:ceramic_bucket').toResultJson(),
        experience: 0.35,
 		cookingtime: 100,
    });

    event.custom({
        type: 'minecraft:firing',
        ingredient: Ingredient.of('notreepunching:clay_flower_pot').toJson(),
        result: Item.of('minecraft:flower_pot').toResultJson(),
        experience: 0.35,
 		cookingtime: 100,
    });

});