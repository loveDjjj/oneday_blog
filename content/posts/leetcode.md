---
title: LeetCode
weight: 1
slug: leetcode
date: 2026-03-08
lastmod: 2026-03-08
categories: LeetCode
tags:
  - 算法
  - LeetCode
draft: false
description: LeetCode刷题题解
ShowToc: true
TocOpen: true
math: true
---
## 刷题网站：
[LeetCode大神_灵茶山艾府](https://leetcode.cn/discuss/post/3141566/)

[LeetCode_Hot100](https://leetcode.cn/studyplan/top-100-liked/)

## python常用数据结构：
{{< collapse summary="点击展开：Python常用数据结构及其基本操作" >}}
```python
"""
Python 常用数据结构（对应 C++ STL）及基本操作
================================================
C++              Python
-------------------------
vector           list
stack            list
queue            collections.deque
unordered_map    dict
unordered_set    set
"""
# ==========================================================
# 1. 数组 / 动态数组
# C++: vector
# Python: list
# ==========================================================
arr = [1, 2, 3]        # 创建数组
# 插入元素
arr.append(4)          # 尾部插入 O(1)
# 在指定位置插入
arr.insert(1, 10)      # index=1 插入 10  -> O(n)
# 删除尾部
arr.pop()              # 删除最后一个元素 O(1)
# 删除指定位置
arr.pop(1)             # 删除 index=1
# 修改元素
arr[0] = 100
# 查找元素
print(arr[1])
# 遍历数组
for x in arr:
    print(x)
# ==========================================================
# 2. 栈 (Stack)
# C++: stack
# Python: list
# ==========================================================
stack = []
# 入栈 push
stack.append(1)
stack.append(2)
stack.append(3)
# 查看栈顶
print(stack[-1])
stack.top()
# 出栈 pop
stack.pop()
# 判断是否为空
if not stack:
    print("stack empty")
# ==========================================================
# 3. 队列 (Queue)
# C++: queue
# Python: collections.deque
# ==========================================================
from collections import deque
q = deque()
# 入队
q.append(1)
q.append(2)
q.append(3)
# 出队
q.popleft()
# 查看队首
print(q[0])
# 查看队尾
print(q[-1])
# BFS常用
while q:
    node = q.popleft()
# ==========================================================
# 4. 哈希表 / 字典
# C++: unordered_map
# Python: dict
# ==========================================================
mp = {}
# 插入
mp["a"] = 1
mp["b"] = 2
# 修改
mp["a"] = 100
# 查询
print(mp["a"])
# 判断key存在
if "a" in mp:
    print("exist")
# 删除
del mp["a"]
# 遍历key
for k in mp:
    print(k)
# 遍历key-value
for k, v in mp.items():
    print(k, v)
# ==========================================================
# 5. 集合
# C++: unordered_set
# Python: set
# ==========================================================
s = set()
# 插入
s.add(1)
s.add(2)
s.add(3)
# 删除
s.remove(2)
# 删除（如果不存在不会报错）
s.discard(10)
# 查询
if 1 in s:
    print("exist")
# 遍历
for x in s:
    print(x)
# ==========================================================
# 6. 初始化技巧（刷题常用）
# ==========================================================
# 初始化数组
arr = [0] * 10
# 初始化二维数组
grid = [[0]*5 for _ in range(5)]
# 初始化dict
mp = {"a": 1, "b": 2}
# 初始化set
s = {1,2,3}
# 初始化队列
q = deque([1,2,3])
# ==========================================================
# 7. 常见复杂度总结
# ==========================================================
"""
list
----
append      O(1)
pop()       O(1)
insert      O(n)
访问        O(1)

stack
-----
push        O(1)
pop         O(1)

deque
-----
append      O(1)
popleft     O(1)

dict
----
insert      O(1)
find        O(1)
delete      O(1)

set
---
insert      O(1)
find        O(1)
delete      O(1)
"""
```
{{< /collapse >}}
## DAY 1
### [1.两数之和](https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-100-liked)
O(n^2):
```python
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        for i,num1 in enumerate(nums):
            if target-num1 in nums[i+1:]:
                j=nums[i+1:].index(target-num1)+1+i
                return [i,j]
```
哈希表O(n):
```python
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        seen={}
        for i,num1 in enumerate(nums):
            num2=target-num1
            if num2 in seen :
                return [seen[num2],i]
            seen[num1]=i
```
O(nlogn):
```C++
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, int> s;  // key = num, value = index
        for(int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if(s.find(complement) != s.end()) {
                return {s[complement], i};
            }
            s[nums[i]] = i;
        }
        return {};
    }
};

```
O(n):
```C++
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> s;
        for(int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if(s.find(complement) != s.end()) {
                return {s[complement], i};
            }
            s[nums[i]] = i;
        }
        return {};
    }
};

```
{{< figure src="/images/leetcode/time_complexity_analysis.png" align="center" caption="数据规模对应的时间复杂度" >}}

### [2.两数相加(基于链表的倒序存储)](https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-100-liked)
思路分别计算两个数的大小，然后相加，最后用链表存储：
{{< collapse summary="点击展开" >}}
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        length1 = 0
        num1 = 0
        while l1:
            num1 += l1.val * (10 ** length1)
            length1 += 1
            l1 = l1.next
        length2 = 0
        num2 = 0
        while l2:
            num2 += l2.val * (10 ** length2)
            length2 += 1
            l2 = l2.next
        num3 = num1 + num2
        result = ListNode(0)
        cur = result
        if num3 == 0:
            return ListNode(0)
        while num3 >= 1:
            cur.next = ListNode(num3 % 10)
            cur = cur.next
            num3 //= 10  
        return result.next
```
{{< /collapse >}}
上述存在的问题在于，直接两数相加会存在溢出风险，可以采用<span class="algo-key">逐位相加</span>的思路：
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        cur = dummy
        carry = 0
        while l1 or l2 or carry:
            v1 = l1.val if l1 else 0
            v2 = l2.val if l2 else 0
            s = v1 + v2 + carry
            cur.next = ListNode(s % 10)
            carry = s // 10
            cur = cur.next
            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next
        return dummy.next
```

{{< notice note >}}
需要注意：
- 两条链表有长有短，在较短的链表前面补 0，方便相加；
- 每一位计算的同时需要考虑上一位的进位问题，而当前位计算结束后同样需要更新进位值；
- 如果两个链表全部遍历完毕后，进位值为 1，则在新链表最前方添加节点 1；
{{< /notice >}}
本题需要掌握的链表的写法包括：
- 链表的快速建立和初始化：
```python
nums = [1,2,3,4]
dummy = ListNode(0)
cur = dummy
for n in nums:
    cur.next = ListNode(n)
    cur = cur.next
head = dummy.next
```
- 链表的遍历：
```python
cur = head
while cur:
    print(cur.val)
    cur = cur.next
```

### [3.相交链表](https://leetcode.cn/problems/intersection-of-two-linked-lists/)(哈希/双指针/链表)
双重while循环<span class=algo-key>O(m*n)超时</span>：
{{< collapse summary="点击展开" >}}
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def getIntersectionNode(
        self, headA: ListNode, headB: ListNode
    ) -> Optional[ListNode]:
        headB_head = headB
        while headA:
            while headB:
                if headA != headB:
                    headB = headB.next
                else:
                    return headB
            headA = headA.next
            headB = headB_head
        return None
```
{{< /collapse >}}
可以采用哈希，提高检索效率<span class=algo-key>O(m+n)</span>：
{{< collapse summary="点击展开" >}}
```python
class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        setA = set()
        while headA:
            setA.add(headA)
            headA = headA.next
        while headB:
            if headB in setA:
                return headB
            headB = headB.next
        return None
```
{{< /collapse >}}
也可以采用双指针<span class=algo-key>O(m+n)</span>，关键弄懂指针怎么移动的——<span class=algo-key>a+c+b=b+c+a</span>
{{< collapse summary="点击展开" >}}
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        PA=headA
        PB=headB
        while PA!=PB:
            if PA:
                PA=PA.next
            else:
                PA=headB
            if PB:
                PB=PB.next
            else:
                PB=headA
        return PA
```
{{< /collapse >}}

### [4.反转链表](https://leetcode.cn/problems/reverse-linked-list/)(递归/链表)
递归写法：
{{< collapse summary="点击展开" >}}
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def digui(self, cur: Optional[ListNode], pre: Optional[ListNode]) -> Optional[ListNode]:
        # 递归终止：cur为空，返回新的头节点
        if not cur:
            return pre
        # 保存下一节点
        nxt = cur.next
        # 反转指针
        cur.next = pre
        # 递归处理下一个节点
        return self.digui(nxt, cur)
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        return self.digui(head, None)
```
{{< /collapse >}}
迭代写法：
{{< collapse summary="点击展开" >}}
```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        cur = head
        while cur:
            nxt = cur.next
            cur.next = prev
            prev = cur
            cur = nxt
        return prev
```
{{< /collapse >}}

### [5.回文链表](https://leetcode.cn/problems/palindrome-linked-list/)(双指针/链表)
双指针<span class=algo-key>O(n)</span>：
{{< collapse summary="点击展开" >}}
```python 
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        cur = head
        arr = []
        # 将链表存入数组
        while cur:
            arr.append(cur.val)
            cur = cur.next
        left = 0
        right = len(arr) - 1
        # 双指针判断回文
        while left < right:
            if arr[left] != arr[right]:
                return False
            left += 1
            right -= 1
        return True
```
{{< /collapse >}}
