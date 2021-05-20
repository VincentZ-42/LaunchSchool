USERNAME = 'admin'
PASSWORD = 'SecreT'
loop do
  puts '>> Please enter user name:'
  user_input = gets.chomp
  puts '>> Please enter your password:'
  pass_input = gets.chomp
  break if user_input == USERNAME && pass_input == PASSWORD
  puts '>> Authorization failed!'
end
puts 'Welcome!'
