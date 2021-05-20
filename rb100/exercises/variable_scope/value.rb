# What's my Value? Exercises on Variable Scope

array = [1,2,3]

array.each do |element|
  a = element
end

puts a
