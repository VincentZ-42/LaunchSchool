#---Exercise 3---
puts "Pick a number between 0 and 100"
n = gets.chomp.to_i
if n >= 0 && n <= 50
  puts "0 < n < 50"
elsif n > 50 && n <= 100
  puts "50 < n < 100"
elsif n > 100
  puts "n > 100"
else
  puts "Please follow instructions"
end
