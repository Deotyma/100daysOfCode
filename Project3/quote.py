import random
import json

def read_values_from_json(file, key):
    values = []
    with open(file) as f:
        data = json.load(f)
        for entry in data:
            values.append(entry[key])
    return values        

def message (quote):
    n_quote = quote.capitalize()
    return "Antoine de Saint-Exupéry a dit: {}".format(n_quote)

def get_random_item_in(my_list):
    rand_numb = random.randint(0, len(my_list) - 1)
    item = my_list[rand_numb] # get a quote from a list
    return item # return the item

def get_random_quote():
    all_values = read_values_from_json('quotes.json', 'quote')
    return get_random_item_in(all_values)

user_answer = input('Tapez entrée pour connaître une autre citation ou Q pour quitter le programme.')

while user_answer != "Q":
    print(message (get_random_quote()))
    user_answer = input('Tapez entrée pour connaître une autre citation ou Q pour quitter le programme.')

