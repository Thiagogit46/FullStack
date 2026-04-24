pares=open('pares.txt')

multi4=open('multi4txt','w')

for linha in pares:
    x=int(linha)
    if x%4==0:
        multi4.write(linha)
multi4.close()
pares.close()