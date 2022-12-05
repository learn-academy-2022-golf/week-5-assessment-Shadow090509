# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.
# Okay, I must take this array and return an array with the words that contain the letter of my choosing
beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
# the method must take two arguments
def bev_array(array, ltr)
  # I use the select method to make a new array with the word that includes the letter. can't forget the pipes
  array.select { |word| word.include? ltr}
end
p bev_array(beverages_array, letter_o)
# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'
# googled it. the second result was named folks talk and was to the point about the methods that can be used to put everything onto one array

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], northeast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# made the method that takes the hash as the argument
def alph_states(hash)
  # I want to get the values onto one array and sort them alphabetically. i understood flatten as a way to put them on the same plane or array
   hash.values.flatten.sort
end
p alph_states(us_states)
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.
class Bike
# Not sure if this top part is needed, but i was just following the syllabus
  attr_accessor :model, :wheels, :current_speed
  
  def initialize(model)
  @model = model 
  @wheels = 2
  @current_speed = 0
  end
# getter method
  def get_wheels
    @wheels
  end
# made the model customizable
  def set_model(model)
    @model = model
  end
# getter method
  def get_model
    @model
  end
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.
# acceleration
  def pedal_faster(num)
    @current_speed += (num)
  end
# decceleration
  def brake(num)
    @current_speed -= (num)
    #Forgot we can put conditionals inside of a method. thats how i figured out ho to stop the speed from going below zero
    if @current_speed <= 0
      @current_speed = 0

      
    end
  end
# getter method
  def get_speed
    @current_speed
  end
#getter method
  def get_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
  end


end
# gave the bike a creative name
bike = Bike.new('bike')
# made it an exotic model
bike.set_model('Honda')
# pushed it to the limits
bike.pedal_faster(100)
# saw a cop and had to hit the brakes hard!
bike.brake(150)


# checked to see how fast I'm going
p bike.get_info



# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'




# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
