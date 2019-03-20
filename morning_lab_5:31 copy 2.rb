# Write a method named square that takes one argument. The method should take every individual digit, square it, and return a concatenated integer.

#     square(12)    #should return 14
#     square(123)   #should return 149
#     square(9119)  #should return 811181


# my attempt:

def square_every_digit(digits)
    array = digits.split
    array.map! do |digit| digit ** 2 
    end
  end
  # map needs to be run on an array
  # digits is not a string or an array
  
  
  # jacks answer:
  
  # def square_every_digit(digits)
  #   array = digits.digits.reverse
  #   array.map! { |n| n = n** 2}
  #   array.join('').to_i
  #   # to_i converts string into integer
  # end
  # puts square_every_digit(222)
  
  # alex's answer
  
  # def square(num)
  #  new_array = []
  #  num.to_s.split('').each do |n|
  #    new_array.push(n.to_i * n.to_i)
  #  end
  #  new_array.join.to_i
  # end
  # square(12345)
  
  # # googles answer:
  
  # # class Array
  # #   def square!
  # #     self.map! {|num| num ** 2}
  # #   end
  # # end
  
  # # [1,2,3].square!

  flavors = ["mint", "chocolate", "strawberry"]
# power of .map -you can target individual elements of an array
  p flavors.map {|f| f.upcase.reverse}