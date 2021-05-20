#---Exercise 2---
def capitalize(phrase)
  if phrase.length.to_i > 10
    return phrase.upcase!
  else
    return "phrase not long enough"
  end
end

puts capitalize("Hello")
puts capitalize("Hello World")
