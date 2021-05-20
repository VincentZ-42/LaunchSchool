def time_of_day(daytime)
  puts daytime ? "It's daytime!" : "It's nighttime!"
end

daylight = [true, false].sample

time_of_day(daylight)
