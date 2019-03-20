def jump_around
    puts "BEGINING THE FUNCTION(METHOD)"
    yield("SALTA")
    puts "ENDING THE FUNCTION(METHOD)"
end

# jump_around { puts "JUMP UP JUMP UP AND GET DOWN"}

# jump_around do |word_for_jump |
#      puts "#{word_for_jump} UP"
#      puts "#{word_for_jump} UP"
#      puts "AND GET DOWN"
# end

friends = ["Kea", "Antoinne", "Jack", "Alex", "Andrew", "Jesse", "Mike"]

# friends.each { |f| puts f.reverse }

class Array
    def backwards_each
        
        # self = this array(friends)
        # using the yield method and probably a loop,
        # go through each element in the array
        # starting at the END of the array to the beginning,
        #and running a yield for each
        i = self.length - 1
        while i >= 0
            yield(self[i])
            i -= 1

            # #or
        # i = 1
        # while i , self.length
        #     yield(self[-i])
        #     i += 1

        end
    end
end




friends.backwards_each do |f|
    puts f.reverse
end