from random import randrange


def init_secret(min, max):
    print(f"Try to guess a number between {minValue} and {maxValue}.")
    return randrange(min, max + 1)


def pick_number():
    while True:
        try:
            guess = int(input("Pick a number... "))
            return guess
        except:
            print("Input valid number, please.")


minValue = 1
maxValue = 100
secret = init_secret(minValue, maxValue)
while True:
    guess = pick_number()
    if guess == secret:
        if input("Yay! You guessed it! Try again? [y/n]: ").lower() != "y":
            break
        secret = init_secret(minValue, maxValue)
    else:
        print(f"The secret is {'greater' if guess < secret else 'less'} than {guess}")
