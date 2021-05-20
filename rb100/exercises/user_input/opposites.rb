# First
# - Get two inputs from user
# - Check for non-zero integers
# Next
# - Check if we have one (+) and (-)
# - Start over if not
# Last
# - do Calculation

def valid_number?(number_string)
  number_string.to_i.to_s == number_string && number_string.to_i != 0
end

numbers = []

loop do
  
  # Gets input from the user
  count = 0
  while count < 2
    puts '>> Please enter a positive or negative integer:'
    input = gets.chomp
    if input == '0' || !valid_number?(input)
      puts 'Invalid input. Only non-zero integers are allowed'
      next
    end
    numbers[count] = input
    count += 1
  end

  # Checking if we have (+) & (-) numbers
  # positive and negetive number will always multiple to be a negative number
  unless numbers[0].to_i * numbers[1].to_i < 0
    puts 'Sorry. One integer must be positive, one must be negetive.'
    puts 'Please start over.'
    next
  end

  # Exits our input loop
  break
end

# Perform Calculation
a = numbers[0].to_i
b = numbers[1].to_i
c = a + b
puts "#{a} + #{b} = #{c}"
