if __name__ == '__main__':
    s = input()
    # print(any(c.isalnum() for c in s))
    # print(any(c.isalpha() for c in s))
    # print(any(c.isdigit() for c in s))
    # print(any(c.isupper() for c in s))
    # print(any(c.islower() for c in s))a
    #s='Sountharia123'
    for func in ('isalnum','isalpha','isdigit','isupper','islower'):
        print(any(eval('c.'+func+'()') for c in s))
