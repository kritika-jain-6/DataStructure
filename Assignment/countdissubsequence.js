function countDistinctSubsequences(str) {
    let n = str.length;
    // dp[i] will store the number of distinct subsequences that can be formed using the first i characters
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1; // Base case: empty string has exactly one subsequence (the empty subsequence)
    
    // To track the last occurrence of each character
    let lastIndex = {};
    
    for (let i = 1; i <= n; i++) {
        // dp[i] = 2 * dp[i-1], because we can either include or exclude the character at position i-1
        dp[i] = dp[i - 1] * 2;
        
        // If the character at str[i-1] has appeared before, we subtract the subsequences 
        // that would repeat by including this character again.
        if (lastIndex[str[i - 1]] !== undefined) {
            dp[i] -= dp[lastIndex[str[i - 1]] - 1];
        }
        
        // Update the last index of the current character
        lastIndex[str[i - 1]] = i;
    }
    
    // The final result is dp[n] - 1, as we subtract the empty subsequence.
    return dp[n] - 1;
}

// Test with the example
let str = "abcbac";
console.log("Number of Distinct Subsequences:", countDistinctSubsequences(str));
