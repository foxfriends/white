///coltonum(col);
var win = make_color_rgb(0, 153, 255);
switch(argument0) {
    case c_white:
        return WHITE;
        break;
    case c_black:
        return BLACK;
        break
    case c_red:
        return RED;
        break;
    case c_green:
        return GREEN;
        break;
    case c_blue:
        return BLUE;
        break;
    case c_yellow:
        return YELLOW;
        break;
    case Controller.c_brown:
        return BROWN;
        break;
    case win: //win game colour
        return 100;
        break;
    default:
        /*var colorList = "
        White: " + string(c_white) + "
        Black: " + string(c_black) + "
        Red: " + string(c_red) + "
        Blue: " + string(c_blue) + "
        Green: " + string(c_green) + "
        Brown: " + string(Controller.c_brown) + "
        Yellow: " + string(c_yellow);
        show_error("Color not found: " + string(argument0) + colorList, false);*/
        return noone;
        break;
}