#---Exercise 2--- Blocks
def execute(&block)
  block.call
end

execute { puts "Hello from inside the execute method!" }

# Nothing happens, because we never used the call method to activiate block
# need to do this block.call
