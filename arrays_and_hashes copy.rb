pets = [
  {
    name: "Steve",
    type: "dog",
    age: 5
  },
  {
    name: "Calvin",
    type: "snake", 
    age: 2
  }
]

# 1.puts a string that reads "My snake's name is Calvin", accessing the elements in the hash
# 2. Use a loop to increase the age of each pet by 1
# Make sure to print or puts each step to see the results


#1
fruits = ["apple", "banana", "orange", "strawberry", "mango"]


# Write a block that puts each fruit (on its own line)
fruits.map do |fruit|
     puts fruit
end
    
# Write a block that puts each fruit except "banana"
fruits.map do |fruit|
    puts fruit.delete("banana")
end
#2
# Return the last element in the array, 3 different ways (use puts to return)
p fruits.last
p fruits[-1]
p fruits[5]

# Now, return the second to last element in the array
p fruits[-2]

#3
friends = ["Rachel", "Monica", "Phoebe", "Joey", "Chandler", "Ross"]
# Find how many friends there are
friends.count
# Find how many friends there are whose names start with "R"
p friends.count { |f| f[0] == "R"}
# Sort the friends alphabetically
p friends.sort
# Imagine a world where Chandler and Janice ended up together and she became one of the friends (add "Janice" to the array)
friends.push("Janice")
# Now delete "Janice" from the array (Phew, back to normal)
friends.pop("Janice")
#4
me = {
 name: "Mike", 
 age: 27,
 hobbies: [Surfing],
 likes_pizza?: true
}
# Add a new key value pair for your birthday.
# Delete your last hobby (without referring to it specifically)
me.each do ()
# Delete the key/value of your age
# Change the value of your name to a nickname

#5
# Create a hash using symbols as keys (:a, :b, :c, :d) and values (100, 200, 300, 400)
# Use a loop to puts a string for each key/value pair: "The value of a is 100"
# Use a loop to increase the value of each key by 50 and puts it