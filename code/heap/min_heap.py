class MinHeap:
    def __init__(self):
        self.mh = []

    def __init__(self, l):
        self.mh = l
        i = (len(l) - 2) // 2
        while i >= 0:
            self.minHeapify(i)
            i -= 1

    def parent(self, i):
        return (i - 1) // 2

    def left(self, i):
        return 2 * i + 1

    def right(self, i):
        return 2 * i + 2

    def insert(self, x):
        self.mh.append(x)
        i = len(self.mh) - 1
        while i > 0 and self.mh[self.parent(i)] > self.mh[i]:
            p = self.parent(i)
            self.mh[i], self.mh[p] = self.mh[p], self.mh[i]
            i = p

    def minHeapify(self, i):
        l = self.left(i)
        r = self.right(i)
        smallest = i
        n = len(self.mh)
        if l < n and self.mh[l] < self.mh[smallest]:
            smallest = l
        if r < n and self.mh[r] < self.mh[smallest]:
            smallest = r
        if smallest != i:
            self.mh[smallest], self.mh[i] = self.mh[i], self.mh[smallest]
            self.minHeapify(smallest)

    def extractMin(self):
        n = len(self.mh)
        if n == 0:
            return float("inf")
        res = self.mh[0]
        self.mh[0] = self.mh[n - 1]
        self.mh.pop()
        self.minHeapify(0)
        return res

    def decreaseKey(self, i, x):
        self.mh[i] = x
        while i != 0 and self.mh[self.parent(i)] > self.mh[i]:
            p = self.parent(i)
            self.mh[i], self.mh[p] = self.mh[p], self.mh[i]
            i = p

    def deleteKey(self, i):
        n = len(self.mh)
        if i >= n:
            return
        self.decreaseKey(i, float("-inf"))
        self.extractMin()
