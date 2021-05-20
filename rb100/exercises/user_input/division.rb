num = nil
dem = nil

def valid_number?(number_string)
  number_string.to_i.to_s == number_string
end

# Numerator input
loop do 
  puts '>> Please enter the numerator:'
  num = gets.chomp
  break if valid_number?(num)
  puts 'Invalid Input. Only integers are allowed'
end

# Demoninator input
loop do
  puts '>> Please enter the denominator:'
  dem = gets.chomp
  if dem == '0'
    puts '>> Invalid input. A denominator of 0 is not allowed'
  elsif valid_number?(dem)
    break
  else
    puts '>> Invalid input. Only integers are allowed'
  end
end
num = num.to_i
dem = dem.to_i
answer = num / dem
puts "#{num} / #{dem} is #{answer}"
