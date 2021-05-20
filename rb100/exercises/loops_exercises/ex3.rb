#---Exercise 3--- Counting down with recurssion

def countdown(n)
  puts n
  if n == 0
    n
  elsif n > 0
    countdown(n - 1)
  end
end

countdown(10)
