def findWinner(s):
    print(s)
    vow=['a','e','i','o','u']
    stuart=0
    kevin=0
    slen = len(s)
    for i in range(slen):
        #for j in range(i+1,len(s)+1):
            #print(s[i],s[j])
        if s[i] in vow:
            kevin+=slen-i
        else:
            stuart+=slen-i
    if stuart>kevin:
        print("Stuart {}".format(stuart))
    elif stuart<kevin:
        print("Kevin",kevin)
    else:
        print("Draw")



s = "banana"
findWinner(s)
