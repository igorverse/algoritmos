def searchSmaller(arr):
    small = arr[0] # armazena o menor valor
    small_index = 0 # armazena o índice do menor valor
    for i in range(1, len(arr)):
        if arr[i] < small:
            small = arr[i]
            small_index = i
    return small_index


def selectionSort(arr): # ordenacao em um array
    newArr = []
    for _ in range(len(arr)):
        small = searchSmaller(arr) # encontra o menor elemento do array e adiciona ao novo array
        newArr.append(arr.pop(small))
    return newArr

print(selectionSort([5, 3, 6, 2, 10]))
print(selectionSort([10, 3, 2, 5, 1, -90, 0, 2]))