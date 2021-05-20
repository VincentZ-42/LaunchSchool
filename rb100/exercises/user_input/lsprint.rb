puts '>> How many output lines do you want? Enter a number >= 3:'
lines = gets.chomp.to_i
if lines >= 3
  lines.times { |x| puts "Launch School is the best!" }
else
  puts "That's not enough lines"
end
