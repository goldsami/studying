use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
    println!("Guess the number!");
    let secret_number = rand::thread_rng().gen_range(1..101);

    loop {
        println!("Enter your variant");

        let mut guess = String::new();

        io::stdin().read_line(&mut guess).expect("Wrong input");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };
        println!("You entered {} number", guess);

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Your number is too small!"),
            Ordering::Greater => println!("Your number is too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
}
