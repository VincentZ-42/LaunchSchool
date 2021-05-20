#---Exercise 2---
puts "How old are you?"
age = gets.chomp.to_i
future = [10, 20, 30, 40]

future.each do |x|
  future_age = age + x
  puts "In #{x} years, you will be:\n#{future_age}"
end
