def pesquisa_binaria(lista, item):
    baixo = 0
    alto = len(lista) - 1 #Por conta dos índices

    while baixo <=alto:
        meio = (baixo + alto) // 2
        chute = lista[meio]
        if chute == item:
            return meio
        if chute > item:
            alto = meio - 1
        else:
            baixo = meio + 1
    
    return None


lista_de_teste = [1, 4, 5, 7, 9, 14, 20, 42, 50]

print('índice: ', pesquisa_binaria(lista_de_teste, 42))
print('índice: ', pesquisa_binaria(lista_de_teste, 21))