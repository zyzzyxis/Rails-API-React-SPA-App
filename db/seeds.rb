# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require "faker"

Task.destroy_all


10.times do
  Task.create(
    # x = rand(1...12),
    # y = rand(1...31),
    # z = rand(1970...2000),
    title: Faker::Job.key_skill,
    description: Faker::Movies::HitchhikersGuideToTheGalaxy.quote,
    duedate: Faker::Date.in_date_period
  )
end 
puts "seeded #{Task.all.size}"