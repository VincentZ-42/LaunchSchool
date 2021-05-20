car = {
  type: 'sedan',
  color: 'blue',
  mileage: 80_000,
  year: 2003
}

# Adding the year---
# car[:year] = 2003

# Broken Odometer---
# car.delete(:mileage)

# What color---
puts "Car's color is #{car[:color]}"

puts car
