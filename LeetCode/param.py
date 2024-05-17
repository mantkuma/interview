class Solution:
    def isValid(self, s: str) -> bool:
        hashBracket = { "(": ")", "{": "}", "[": "]" }
        stack = []
        for ele in s:
            if(ele in hashBracket):
                stack.append(hashBracket[ele])
            else:
                if(len(stack) > 0 and stack[len(stack) - 1] == ele):
                    stack.pop();  
                else:
                    return False
        return len(stack)==0
                      

 
p1 = Solution()
print(p1.isValid("[[[]"))
