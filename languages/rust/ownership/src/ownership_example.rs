pub fn ownership_example() {
  let s = String::from("hello");
  takes_ownership(s);
  // println!("{}", s); wont work because "s" lost ownership

  let x = 5;
  makes_copy(x);
  // println!("{}", x); will work because primitives doesn't have ownership
}

fn takes_ownership(some_string: String) {
  println!("{}", some_string);
}

fn makes_copy(some_integer: i32) {
  println!("{}", some_integer);
}
