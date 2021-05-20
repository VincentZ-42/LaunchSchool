def find_first_nonzero_among(numbers)
  numbers.each do |n|
      return n if n.nonzero?
        end
        end

# Examples

find_first_nonzero_among([0, 0, 1, 0, 2, 0]) #method only accepts one argument
# input should be an array of numbers instead
find_first_nonzero_among([1]) # this is only one number, so doesn't work
