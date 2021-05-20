array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Exercise 1
# array.each { |x| p x }

# Ex2
# array.each { |x| p x if x > 5 }

# Ex3
#odd_array = array.select { |x| x.odd? }
# p odd_array

# Ex4
array.push(11)   # can also use array << 11
array.prepend(0) # can also use aray.unshift(0)
p array

# Ex5
array.pop
array.push(3)    # can also use array << 3
p array

# Ex6
p array.uniq
p array

# Ex7
# Arrays are indexed in order
# Hash uses keys to identify value

# Ex8
# Two ways to create hash
hash_one = Hash.new()

hash_two = {a: 1, b:2} # new way
hash_two2 = {:a => 1, :b => 2} # old way

# Ex9
puts "-----Example 9-----"
h = {a: 1, b: 2, c: 3, d: 4}
puts "Value of key :b = #{h[:b]}"
h[:e] = 5
puts "{e:5} added to array"
p h
puts "removed all key:value pairs less than 3.5"
h.delete_if { |key, value| value < 3.5 }
# h.select! { |key, value| value < 3.5 }
p h

# Ex10
# hash values can be arrays
# Yes, you can have array of hashes
hash_of_arrays = {a: [1,2,3], b:[4,5,6]}
array_of_hashes = [{a: 1, b:2}, {c:1,d:2}]

# Ex11
puts "-----Example 11----"
contact_data = [
  ["joe@email.com", "123 Maint st.", "555-123-4567"],
  ["sally@email.com", "404 Not Found Dr.", "123-234-3454"]]
contacts = {
  "Joe Smith" => {},
  "Sally Johnson" => {}}

# contacts["Joe Smith"] = {
#   email: contact_data[0][0],
#   address: contact_data[0][1],
#   phone: contact_data[0][2]}
# contacts["Sally Johnson"] = {
#   email: contact_data[1][0],
#   address: contact_data[1][1],
#   phone: contact_data[1][2]}
# p contacts

# Ex12
puts "-----Example 12-----"
p "Joe's email is #{contacts["Joe Smith"][:email]}"
p "Sally's phone number is #{contacts["Sally Johnson"][:phone]}"

# Ex13
puts "-----Example 13-----"
arr = ['snow', 'winter', 'ice', 'slippery', 'salted roads', 'white trees']
p "OG: #{arr}"
arr.delete_if { |x| x.start_with?("s", "w") }
p "New: #{arr}"

# Ex14
puts "-----Example 14------"
a = ['white snow', 'winter wonderland', 'melting ice', 'slippery sidewalk',
    'salted roads', 'white trees']
print "OG: "
p a
b = a.map { |x| x.split(" ") }
print "New: "
b.flatten!
p b

# Ex 16
puts "-----Example 16-----"
keys = [:email, :address, :phone]
keys.each { |key| contacts["Joe Smith"][key] = contact_data[0][keys.index(key)]}
keys.each { |key| contacts["Sally Johnson"][key] = contact_data[1][keys.index(key)]}
p contacts

