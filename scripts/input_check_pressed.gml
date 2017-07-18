///input_check_pressed(control);
/*
Checks whether the given control is pressed. Makes support for
different controls easier. Also has checks for when to ignore input.
*/
var ret = false;
if(Controller.shake == 0 && !(room == rLongFall && Controller.state[0] >= S_HAPPYOLDGUY)) {
    switch(argument0) {
        case I_JUMP:
            if(Mobile) {
                ret = keyboard_check_pressed(vk_left) && keyboard_check_pressed(vk_right);
            } else {
                ret = (keyboard_check_pressed(vk_up) || (keyboard_check_pressed(ord("W")) && room != rSetup));
            }
            break;
        case I_ACTION:
            ret = (keyboard_check_pressed(vk_down) || (keyboard_check_pressed(ord("S")) && room != rSetup));
            break;
        case I_HAXIS:
            ret = ((keyboard_check_pressed(vk_right) || keyboard_check_pressed(ord("D"))) - (keyboard_check_pressed(vk_left) || keyboard_check_pressed(ord("A"))));
            break;
        case I_SAVE:
            ret = keyboard_check_pressed(vk_space);
            break;
    }
}
return ret;
