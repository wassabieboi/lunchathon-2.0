class SignupController < ApplicationController

  respond_to :json

  def new
    
  end

  def get_restaurant_and_attendees
    test = [{id: 1, name: 'Foo', users: ['Barbara', 'Charlie']}, {id: 2, name: 'Restaurant A', users: ['Doug', 'Ernie']}, {id: 3, name: 'Restaurant B', users: ['Frank', 'George']}]

    respond_with test
  end

  def get_restaurant
    test = {name: 'Foo', users: ['Barbara', 'Charlie']}

    respond_with test
  end

  def create
  end
end
