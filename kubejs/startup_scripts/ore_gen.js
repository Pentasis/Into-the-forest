// priority: 450

onEvent('worldgen.add', event => {

  event.addOre(ore => {
    ore.block = 'kubejs:tin_ore';
    ore.spawnsIn.blacklist = false;
    ore.spawnsIn.values = ['#minecraft:base_stone_overworld'];
    ore.clusterMinSize = 3;
    ore.clusterMaxSize = 8;
    ore.clusterCount = 4;
    ore.minHeight = 40;
    ore.maxHeight = 128;
    ore.biomes.blacklist = true;
    ore.biomes.values = ['#the_end', '#nether'];
  })
  
});
