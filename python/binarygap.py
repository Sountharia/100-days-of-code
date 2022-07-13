# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(N):
    # write your code in Python 3.6
    def findBinary(n):
        i=n
        cnt = -1
        #max=0
        binr=[]
        while i:
            binr.append(i%2)
            i//=2

        binr.reverse()
        prev=0
        cnt=0
        print(binr)
        for i in range(len(binr)-1):
            print(i,i+1,binr[i],binr[i+1],cnt,prev)
            if binr[i]==binr[i+1] and binr[i]==1:
                cnt=0
            elif binr[i]==binr[i+1] and binr[i]==0:
                cnt+=1
            elif binr[i]!=binr[i+1] and binr[i]==1:
                cnt=1
            elif binr[i]!=binr[i+1] and binr[i]==0:
                prev=max(prev,cnt)
                cnt=0

            
        return(prev)
    ans=findBinary(N)
    return ans#findBinary(N)
solution(1041)
