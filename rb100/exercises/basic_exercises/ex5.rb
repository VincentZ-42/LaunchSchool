#---Exercise 5---

def print_factorial(num)
  ans = num
  og_num = num
  while num > 1
    num -= 1
    ans *= num
  end
  puts "#{og_num}! = #{ans}"
end

input = [5, 6, 7, 8]

input.each { |x| print_factorial(x) }
