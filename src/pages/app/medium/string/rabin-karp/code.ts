export const pyrk = `# q -> prime number (to avoid overflow)
def rabinKarpSearch(s, pattern, q):
    D = 256 # distinct characters in s    
    N, M = len(s), len(pattern)
    
    H = 1 # helper to calculate rolling hash
    for _ in range(M-1):
        H = (H * D) % q

    pH, sH = 0 # pattern hash, s hash
    for i in range(M):
        pH = (D * pH + ord(pattern[i])) % q
        sH = (D * sH + ord(s[i])) % q
    
    res = []
    for i in range(N - M + 1):
        if pH == sH:
            for j in range(M):
                if s[i + j] != pattern[j]:
                    break
            else:
                res.append(i)

        if i < N - M:
            sH = (D * (sH - ord(s[i]) * H) + ord(s[i+M])) % q
            if sH < 0:
                sH += q

    return res`;
