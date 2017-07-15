# CRM-Food. 

## Admin: 

# Get requests

 * /getNewOrders

 * /getInProgressOrders

 * /getDoneOrders

# Post requests
There are three roles: admin, waiter and cooker 

### post requests
 * /addTable  
     - takes Table
 * /addUser 
     - takes User
 * /addMealCategory 
     - takes MealCategory  
 * /addMeal 
     - takes Meal      

 
 ### get requests
  
## Waiter:

 ### get requests
  * /getMealCategories 
     - returns Array< MealCategory >
  * /getMealsByCategory/{ MealCategoryId }  
     - returns Array< Meal >
  * /getMealById/{mealid} 
     - returns Meal
  * /getMyOrders/{userid} 
     - returns Array< Order > 
  * /getCheck/{Orderid} 
     - returns Check
  * /getAllMeals 
     - returns Array< Meal >
  * /getAllRoles 
     - returns Array< Role >
  
 ### post requests
  * /addOrder 
      - Order             
  * /addMealsToOrder/{OrderId}
  
    Example, /addMealsToOrder: 
       {
          "orderid": 1,
          "meals" : [ 1, 2, 3 ]   //Array of meal ids
       }
       
        
  
## Sockets
  * /delivered
    -> Orderid, Mealid 
  * /cooking
    -> Orderid, Mealid
  * /doneCooking
    -> Orderid, Mealid
    
# Models
 
### Table
    "id": Int,             //used only for get requests
    "name": String
    
 ### User
    "id": Int,             //used only for get requests
    "name": String,    
    "surname": String,
    "login": String,
    "password": String,
    "roleid": Int,
    "dateofadd": String, //timestamp // No need to add. Added Automatically
    
 ### MealCategory
    "id": Int,             //used only for get requests
    "name": String
    
 ### Meal
    "id": Int,             //used only for get requests
    "name": String,
    "categoryid": Int,
    "price": Int
    
### Role
    "id": Int,             // Used only for get requests
    "name": String
    
### WaiterAndTable
    "waiterid": Int,
    "tableid": Int
    
### Order
    "id": Int,             //used only for get requests
    "waiterid": Int,
    "tableid": Int,
    "meals" : Array<"mealid": Int>
    
### Check
    "orderid" : Int,
    "ordersum": Int,
    "servicefee": Int,
    "totalsum": Int
  
