number = Random.new
i = 0

while i < 5
  puts number.rand(0..99)
  i += 1
end

# Solution
puts "Solution"
number = []
while number.size < 5
  number << rand(100)
end
puts number
