var d = 0, xx = 0;
if(argument_count == 2) {
    d = argument[1];
}
with(argument[0]) {
    if(vspeed == 0) {
        xx = x;
        if(d == 0) {
            while(place_meeting(x, y, other)) {
                var inst = instance_place(x + sign(Player.hspeed), y, Crate);
                if(inst != noone) {
                    crate_move(inst);
                }
                if(place_meeting(x + sign(Player.hspeed), y, Wall) || place_meeting(x + sign(Player.hspeed), y, CrateBarrier)) { //Stop if it hits a wall
                    break;
                } else {
                    x += sign(Player.hspeed); //Move away from Player
                }
            }
            inst = instance_place(x, y - 1, Crate);
            if(inst != noone) {
                crate_move(inst, x - xx);
            }
        } else {
            while(place_meeting(x + d, y, Wall)) {
                d -= sign(d);
                if(d == 0) {
                    break;
                }
            }
            x += d;
        }
    }
}