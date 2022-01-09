pub fn borrowing_example() {
  println!("BORROWING EXAMPLE");
  let s1 = String::from("hello");
  let len = calculate_length(&s1);
  println!("Length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
  s.len()
}
