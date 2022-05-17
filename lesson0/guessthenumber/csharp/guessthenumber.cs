static int InitSecret(int min, int max)
{
    var random = new Random();
    System.Console.WriteLine($"Try to guess a number between {min} and {max}.");
    return random.Next(min, max);
}

static int PickNumber()
{
    int guess;
    Console.WriteLine("Pick a number... ");
    while (!int.TryParse(Console.ReadLine(), out guess))
    {
        Console.WriteLine("Input valid number, please.");
    }
    return guess;
}

const int minValue = 1;
const int maxValue = 100;
var secret = InitSecret(minValue, maxValue);
while (true)
{
    var guess = PickNumber();
    if (guess == secret)
    {
        Console.Write("Yay! You guessed it! Try again? [y/n]:");
        if (Console.ReadLine().ToLower() != "y")
        {
            break;
        }
        secret = InitSecret(minValue, maxValue);
    }
    else
    {
        Console.WriteLine($"The secret is {(guess < secret ? "greater" : "less")} than {guess}");
    }
}

