# CRM-Food. 


# Get requests
Orders:       /getNewOrders
Orders:       /getInProgressOrders
Orders:       /getDoneOrders

# Post requests

There are three roles: admin, waiter and cooker 

## Admin: 

### post requests

 * /addTable  (Table)
 * /addWaiter (AddWaiter)
 * /addMealCategory (MealCategory)
 * /addMeal (Meal)
 * /assignWaiterToTable (WaiterAndTable)
 * /removeWaiterFromTable (WaiterAndTable)
 
 ### get requests
  
## Waiter:

 ### get requests
  * /getMealCategories returns Array< MealCategory >
  * /getMealsBy/{ MealCategoryId }  returns Array< Meal >
  * /getMyOrders returns Array< Order > 
  * /getCheck/{OrderId} returns Check
  
 ### post requests
  * /order (Order)
  * /addMealsToOrder (Order with id) 
  
## Sockets
  * /delivered
    -> OrderId, MealId 
  * /cooking
    -> OrderId, MealId
  * /doneCooking
    -> OrderId, MealId
    
# Models
 
### Table
  
    "id": String,
    "number": Int
    
 ### AddWaiter
 
    "name": String,
    "surname": String,
    "login": String,
    "password": String,
    "dateOfAdd": String, //timestamp
    
 ### MealCategory
 
    "id": String,
    "name": String
    
 ### Meal
    
    "id": String,
    "name": String,
    "price": Int
    
### WaiterAndTable
    
    "waiterId": String,
    "tableId": String
    
### Order

    "id": String,
    "waiterId": String,
    "table": Int,
    "meals" : Array<Meal>
    
### Check

    "orderId" : String,
    "orderSum": Int,
    "serviceFee": Int,
    "totalSum": Int
  
  
