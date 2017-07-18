///change_tileset(set);
var tiles = tile_get_ids();
for(var i = 0; i < array_length_1d(tiles); i++) {
    tile_set_background(tiles[i], argument[0]);
}
