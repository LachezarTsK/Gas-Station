
public class Solution {

    /*
    Since the track goes clockwise, then by going anticlockwise we can find the starting point
    from which most gas can be accrued when going clockwise.
    
    If 'gasBalance>=0' for the whole circle, and there is only one starting point 
    from where the circle can be completed, then this point is 'indexMaxGasValue'.   
     */
    public int canCompleteCircuit(int[] gas, int[] cost) {

        int size = gas.length;
        int maxGasValue = 0;
        int indexMaxGasValue = 0;
        int gasBalance = 0;

        for (int i = size - 1; i >= 0; i--) {
            gasBalance += gas[i] - cost[i];
            if (gasBalance > maxGasValue) {
                maxGasValue = gasBalance;
                indexMaxGasValue = i;
            }
        }

        return gasBalance >= 0 ? indexMaxGasValue : -1;
    }
}
