struct Point<T> {
    x: T,
    y: T,
}

impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }
}

impl Point<f64> {
    fn distance_from_origin(&self) -> f64 {
        (self.x.powi(2) + self.y.powi(2)).sqrt()
    }
}

fn main() {
    let p = Point { x: 5, y: 10 };
    let p2 = Point {x: 5.5, y: 10.1};

    println!("p.x = {}", p.x());
    println!("distance_from_origin = {}", p2.distance_from_origin()) // is available only for f64
}