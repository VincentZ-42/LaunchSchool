stoplight = ['green', 'yellow', 'red'].sample

# Part 1

#case stoplight
#  when 'green'
#    puts 'Go!'
#  when 'yellow'
#    puts 'Slow down!'
#  when 'red'
#    puts 'Stop!'
#end


# Part 2
#if stoplight == 'green'
#  puts 'Go!'
#elsif stoplight == 'yellow'
#  puts 'Slow down!'
#else
#  puts 'Stop!'
#end

# Part 3 - reformating
if stoplight == 'green'; puts 'Go!'
elsif stoplight == 'yellow'; puts 'Slow down!'
else puts 'Stop!'
end

# Can also use then
if stoplight == 'green'     then puts 'Go!'
elsif stoplight == 'yellow' then puts 'Slow down!'
else                             puts 'Stop!'
end

