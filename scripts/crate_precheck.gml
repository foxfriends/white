with(argument[0]) {
    if(vspeed == 0) {
        var inst = instance_place(x + input_check(I_HAXIS), y, Crate);
        if(inst != noone) { //Move away 1 px if possible
            crate_precheck(inst);
        }
        if(!place_meeting(x + input_check(I_HAXIS), y, Wall)) {
            if(!place_meeting(x + input_check(I_HAXIS), y, CrateBarrier)) {
                x += input_check(I_HAXIS);
                inst = instance_place(x, y - 1, Crate);
                if(inst != noone) {
                    crate_precheck(inst);
                }
            }
        }
    }
}