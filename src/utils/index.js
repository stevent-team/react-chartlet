export const scale = (number, min, max, lowest, highest) => (max-min)*(number-lowest)/(highest-lowest)+min
