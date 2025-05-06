
export const useEmiCalculator = (P, R, N) => {
    if (!P || !R || !N) return 0;
    const r = R / 12 / 100;
    const emi = (P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1);
    return parseFloat(emi.toFixed(2));
  };
  