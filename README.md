# CRM-Food. 

## Admin: 

# Get requests

Orders:       /getNewOrders

Orders:       /getInProgressOrders

Orders:       /getDoneOrders

# Post requests

There are three roles: admin, waiter and cooker 

### post requests

 * /addTable  (Table)   
 * /addWaiter (Waiter) -> 
 * /addMealCategory (MealCategory)  
 * /addMeal (Meal)      

 
 ### get requests
  
## Waiter:

 ### get requests
  * /getMealCategories returns Array< MealCategory >
  * /getMealsByCategory/{ MealCategoryId }  returns Array< Meal >
  * /getMealById/{mealid} returns Meal
  * /getMyOrders/{userid} returns Array< Order > 
  * /getCheck/{OrderId} returns Check
  * /getAllMeals returns Array< Meal >
  * /getAllRoles returns Array< Role >
  
 ### post requests
  * /addOrder (Order)
  * /addMealsToOrder/{orderid}(Order with id) 
  
## Sockets
  * /delivered
    -> OrderId, MealId 
  * /cooking
    -> OrderId, MealId
  * /doneCooking
    -> OrderId, MealId
    
# Models
 
### Table
    "id": Int,             //used only for get requests
    "number": Int
    
 ### Waiter
    "id": Int,             //used only for get requests
    "name": String,
    "surname": String,
    "login": String,
    "password": String,
    "dateOfAdd": String, //timestamp
    
 ### MealCategory
    "id": Int,             //used only for get requests
    "name": String
    
 ### Meal
    "id": Int,             //used only for get requests
    "name": String,
    "price": Int
    
### Role
    "id": Int,
    "name": String
    
### WaiterAndTable
    "waiterId": String,
    "tableId": String
    
### Order
    "id": Int,             //used only for get requests
    "waiterId": String,
    "table": Int,
    "meals" : Array<Meal>
    
### Check
    "orderId" : String,
    "orderSum": Int,
    "serviceFee": Int,
    "totalSum": Int
  
  
