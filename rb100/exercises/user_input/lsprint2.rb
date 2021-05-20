loop do
  puts '>> How many output lines do you want? Enter a number >= 3 (Q to quit):'
  choice = gets.chomp
  if choice.downcase == 'q'
    break
  elsif choice.to_i >= 3
    choice.to_i.times { |x| puts 'Launch School is the best!' }
  else
    puts "That's not enough lines."
  end
end
