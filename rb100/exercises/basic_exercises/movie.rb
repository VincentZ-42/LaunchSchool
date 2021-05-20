# ---Exercise 3---
movies = {
  :memento => 1975,
  :soul => 2004,
  :Pixar => 2013,
  :hi => 2001,
  :bye => 1981
}
# movies.each { |key, value| puts movies[key] }

#---Exercise 4---
# literal set 
# movies_array = [1975, 2004, 2013, 2001, 1987]
movies_array = []
movies.each { |key, value| movies_array.push(value) }
puts movies_array
