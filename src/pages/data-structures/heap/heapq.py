import heapq

pq = [5, 20, 1, 30, 4]

heapq.heapify(pq)  # 1,4,5,30,20
heapq.heappush(pq, 3)  # 1,4,3,30,20,5
m = heapq.heappop(pq)  # 3,4,5,30,20 (removes min element)

heapq.nlargest(2, pq)  # [30,20]
heapq.nsmallest(2, pq)  # [1,4]

heapq.pushpop(pq, 2)
heapq.heapreplace(pq, -1)
