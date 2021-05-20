#---Exercise 3--- iterate and print keys n values
food = {
  apple: 1,
  orange: 3,
  pear: 5,
  strawberry: 9,
  blueberry: 13,
  watermelon: 20
}

p food.keys
p food.values
food.each { |key, value| p "key-value: #{key}-#{value}" }
