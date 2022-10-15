
list = ["cake", "  ", "pudding", "", "  ",'']



def count_blanks(arr):
    counter = 0
    for text in arr:
        if not text.strip():
            counter += 1
    print(counter)




count_blanks(list)