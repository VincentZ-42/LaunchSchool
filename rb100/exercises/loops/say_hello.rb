say_hello = true
print = 0

while say_hello
  puts 'Hello!'
  print += 1
  say_hello = false if print == 5
end
