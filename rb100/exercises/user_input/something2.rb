loop do
  puts ">> Do you want me to print something? (y/n)"
  choice = gets.chomp.downcase
  if choice == 'n'
    break
  elsif choice =='y'
    puts 'something'
  else
    puts "Invalid input! Please enter y or n"
    next
  end
  break
end

# Clean Solution
# choice = nil
# loop do
#   puts '>> Do you want me to print something? (y/n)'
#   choice = gets.chomp.downcase
#   break if %w(y n).include?(choice)
#   puts '>> Invalid inputs! Please enter y or n'
# end
# puts 'something' if choice == 'y'
