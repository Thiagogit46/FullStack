from random import randint

with open('numero.txt','w') as numero:
    for i in range(101):
        numero.write(f'{randint(0,100)} ')

with open('numero.txt') as numero:
    numeros=numero.readline().split(' ')
    print(numeros)
for j in range ()