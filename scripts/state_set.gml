///state_set(state, ind);
/*
Sets the state to the new value, but only if that is the next state.
*/
var s = 0;
if(argument_count == 2) {
    s = argument[1];
}
if(Controller.state[s] == argument[0] - 1) {
    Controller.state[s] = argument[0];
}