# Stop number wehn it is equal and between 0 and 10
loop do
  number = rand(100)
  puts number
  break if number <= 10 && number >= 0
end

# Solution
# break if number.between?(0,10)
