for i in 1..100
  print i unless i % 2 == 0
end

# Solution
puts "\nSolution"
for i in 1..100
  print i if i.odd?
end
