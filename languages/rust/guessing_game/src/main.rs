use std::io;

fn main() {
    println!("Guess the number!");
    println!("Enter your variant");

    let mut guess = String::new();

    io::stdin().read_line(&mut guess).expect("Wrong input");

    println!("You entered {} number", guess);
}
