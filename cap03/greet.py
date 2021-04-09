'''
Objetivo: explicar a ideia de pilha de chamada.

Pilha de chamada é uma estrutura de dados que guarda as variáveis
de múltiplas funções

'''


def greet(name):
    print("Hello, " + name + "!")
    greet2(name)
    print("Working to say bye...")
    bye()

def greet2(name):
    print("How are " + name + "?")

def bye():
    print("Ok, bye!")


greet('Igor')