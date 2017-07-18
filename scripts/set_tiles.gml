///set_tiles();
/* Updates ts_use to the correct colours */
with(Controller) {
    if(colours[BLACK]) {
        if(colours[RED]) {
            if(colours[GREEN]) {
                if(colours[YELLOW]) {
                    if(colours[BROWN]) {
                        change_tileset(tsBWRGYN);
                    } else {
                        change_tileset(tsBWRGY);
                    }
                } else if(colours[BROWN]) {
                    change_tileset(tsBWRGN);
                } else {
                    change_tileset(tsBWRG);
                }
            } else if(colours[BROWN]) {
                change_tileset(tsBWRN);
            } else {
                change_tileset(tsBWR);
            }
        } else if(colours[GREEN]) {
            change_tileset(tsBWG);
        } else {
            change_tileset(tsBW);
        }
    } else {
        change_tileset(tsW);
    }
}
