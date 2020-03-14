def maxUncrossedLines(A, B):
    prev, crnt = [0] * (1 + len(B)), [0] * (1 + len(B))
    print(prev, crnt)

    for a in range(len(A)):
        prev, crnt = crnt, prev
        for b in range(len(B)):
            if A[a] == B[b]:
                crnt[b + 1] = prev[b] + 1
            else:
                crnt[b + 1] = max(crnt[b], prev[b + 1])
    return crnt[len(B)]


A = [1,2,4,8,5]
B = [1,4,2,8]
print (maxUncrossedLines(A, B))





# 2
def maxUncrossedLines(self, A, B):
    dp, m, n = collections.defaultdict(int), len(A), len(B)
    for i in xrange(m):
        for j in xrange(n):
            dp[i, j] = max(dp[i - 1, j - 1] + (A[i] == B[j])
                            , dp[i - 1, j], dp[i, j - 1])
    return dp[m - 1, n - 1]


# 3 
def maxUncrossedLines(self, A, B):
    m, n = len(A), len(B)
    dp = [0] * (n + 1)
    for i in xrange(m):
        for j in range(n)[::-1]:
            if A[i] == B[j]: dp[j + 1] = dp[j] + 1
        for j in range(n):
            dp[j + 1] = max(dp[j + 1], dp[j])
    return dp[n]