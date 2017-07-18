///input_check(control);
/*
Checks whether the given control is pressed. Makes support for
different controls easier. Also has checks for when to ignore input.
*/
var ret = false;
if(Controller.shake == 0 && !(room == rLongFall && Controller.state[0] >= S_HAPPYOLDGUY)) {
    switch(argument0) {
        case I_JUMP:
            if(Mobile) {
                ret = keyboard_check(vk_left) && keyboard_check(vk_right);
            } else {
                ret = (keyboard_check(vk_up) || keyboard_check(ord("W")));
            }
            break;
        case I_ACTION:
            ret = (keyboard_check(vk_down) || keyboard_check(ord("S")));
            break;
        case I_HAXIS:
            if(Mobile) {
                ret = (keyboard_check(vk_right) * !keyboard_check_pressed(vk_right) - keyboard_check(vk_left) * !keyboard_check_pressed(vk_left));
            } else {
                ret = ((keyboard_check(vk_right) || keyboard_check(ord("D"))) - (keyboard_check(vk_left) || keyboard_check(ord("A"))));
            }
            break;
        case I_SAVE:
            ret = keyboard_check(vk_space);
            break;
    }
}
return ret;