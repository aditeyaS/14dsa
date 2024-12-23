export const pylps = `def getLPS(s, patternLength):
    lps = [0] * patternLength
    cL = 0 # len
    i = 1
    while i < len(s):
        if s[i] == s[cL]:
            cL += 1
            lps[i] = cL
            i += 1
        else:
            if cL == 0:
                lps[i] = 0
                i += 1
            else:
                cL = lps[cL - 1]
    return lps`;

export const pykmp = `def KMP(s, pattern):
    N, M = len(s), len(pattern)
    lps = getLPS(s, M)
    i, j = 0, 0
    res = []
    while i < N:
        if s[i] == pattern[j]:
            i += 1
            j += 1
        if j == M:
            res.append(i - M)
            j = lps[j - 1]
        elif i < N and s[i] != pattern[j]:
            if j == 0:
                i += 1
            else:
                j = lps[j - 1]`;
