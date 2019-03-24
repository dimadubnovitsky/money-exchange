// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  // Your code goes here!
  // Return an object containing the minimum number of coins needed to make change
  let result = {};
  let H = Math.floor(currency / 50);
  let Q = Math.floor((currency - H * 50) / 25);
  let D = Math.floor((currency - H * 50 - Q * 25) / 10);
  let N = Math.floor((currency - H * 50 - Q * 25 - D * 10) / 5);
  let P = Math.floor(currency - H * 50 - Q * 25 - D * 10 - N * 5);

  if (currency <= 0) {
    return result;
  } else if (currency >= 10000) {
    result.error =
      "You are rich, my friend! We don't have so much coins for exchange";
    return result;
  } else {
    if (H > 0) {
      result.H = H;
    }
    if (Q > 0) {
      result.Q = Q;
    }
    if (D > 0) {
      result.D = D;
    }
    if (N > 0) {
      result.N = N;
    }
    if (P > 0) {
      result.P = P;
    }
    return result;
  }
};
