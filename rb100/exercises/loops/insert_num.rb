numbers = []

loop do
  puts 'Enter any number:'
  input = gets.chomp.to_i
  numbers << input
  if numbers.size < 5
    puts 'Go on....we need more numbers'
  else
    break
  end
end
puts numbers
