---
title: LeetCode
weight: 1
slug: xxxx
date: 2026-02-16
lastmod: 2026-02-16
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

![[Pasted image 20260217140528.png]]

