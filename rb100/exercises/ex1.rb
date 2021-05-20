#---Execise 1--- regex

find = Proc.new do |word|
  puts word.match?("lab") ? word : "lab not found in #{word}"
end

words = ["laboratory", "experiment", "Pans Labyrinth", "elaborate", "polar bear"]
words.each { |x| find.call x }
