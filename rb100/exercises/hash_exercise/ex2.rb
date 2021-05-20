#---Exercise 2--- differences in merge and merge!
# merge method does not change original hash
# merge! method mutates the hash the 1st hash
# both merges uses values from 2nd hash if not specified
h1 = { a: 1, b: 2, c: 3 }
h2 = { b: 3, d: 5, e: 3 }

puts "Usinge merge"
h3_merge = h1.merge(h2)
p h1, h2, h3_merge

puts "Using merge!"
h3_merge_bang = h1.merge!(h2)
p h1, h2, h3_merge
