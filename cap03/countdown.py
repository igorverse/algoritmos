'''
Objetivo: entender os conceitos: caso-base caso recursivo.

Caso recursivo: quando a função chama a si mesma.

Caso-base: quando a função não chama a si mesma novamente, 
de forma que o programa não se torna um loop infinito.
'''

def countdown(i):
    print(i)
    if i <= 1:
        return
    else:
        countdown(i-1)

countdown(10)
