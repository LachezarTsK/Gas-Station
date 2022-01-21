
/*
 Since the track goes clockwise, then by going anticlockwise we can find the starting point
 from which most gas can be accrued when going clockwise.
 
 If 'gasBalance>=0' for the whole circle, and there is only one starting point 
 from where the circle can be completed, then this point is 'indexMaxGasValue'.   
 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    const size = gas.length;
    let maxGasValue = 0;
    let indexMaxGasValue = 0;
    let gasBalance = 0;

    for (let i = size - 1; i >= 0; i--) {
        gasBalance += gas[i] - cost[i];
        if (gasBalance > maxGasValue) {
            maxGasValue = gasBalance;
            indexMaxGasValue = i;
        }
    }

    return gasBalance >= 0 ? indexMaxGasValue : -1;
};
