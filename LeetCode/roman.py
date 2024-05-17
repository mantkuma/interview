num = "III"
res=0;
romanHash = { "I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000,}
for i in range(len(num)):
    if i + 1 < len(num) and romanHash[num[i]] < romanHash[num[i+1]]:
        res -=romanHash[num[i]]
    else:
        res += romanHash[num[i]]

print(res)