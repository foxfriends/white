///save();
with(Controller) {
    if(instance_exists(Player)) {
        if(!keyboard_check(vk_escape)) {
            ini_open(working_directory + "temp.ini");
            ini_write_real("game", "x", Player.x);
            ini_write_real("game", "y", Player.y);
            ini_write_real("game", "c", image_blend);
            for(var i = 0; i < array_length_1d(state); i++) {
                ini_write_real("game", string(i), state[i]);
            }
            for(var i = 0; i < array_length_1d(colours); i++) {
                ini_write_real("game", string(i) + "_2", colours[i]);
            }
            ini_write_real("game", "r", room);
            ini_close();
            var in = file_text_open_read(working_directory + "temp.ini");
            var out = file_text_open_write(working_directory + "white.sav");
            while(!file_text_eof(in)) {
                file_text_write_string(out, encrypt(file_text_read_string(in)));
                file_text_readln(in);
                file_text_writeln(out);
            }
            file_text_close(in);
            file_text_close(out);
            file_delete(working_directory + "temp.ini");
        }
    }
}
