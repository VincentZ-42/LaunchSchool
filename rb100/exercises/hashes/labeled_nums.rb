numbers = {
  high: 100,
  medium: 50,
  low: 10
}

numbers.each { |key,value| puts "A #{key} number is #{value}." }

# Divided by two
div2_numbers = numbers.map { |k,v| v / 2 }
p div2_numbers

# low, Medium, or High?
low_numbers = numbers.select! { |k,v| v < 25 }
p low_numbers
p numbers
