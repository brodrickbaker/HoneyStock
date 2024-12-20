# User Stories
## Landing Page
* As a logged out user, I should be able to view the landing page.
    * When on the `/` page:
        * I can create a new profile.
        * I can log into an existing profile.
        * I can can search and view stocks.
          
## Viewing Profile
* As a logged in user, I should be able to view my profile page.
    * When on the `/` page:
        * I can view my portfolio (owned stocks).
        * I can view my watchlists.
        * I can view my previous transactions.

## Creating a Portfolio
* As a logged-in user, I should be able to create a new portfolio.
    * When on the `/` page:
       * I should see a response with the details of my newly created portfolio, including the balance and an empty assets array.
       * If I am not authenticated, I should receive a 401 error with the message "Authentication required."

## Updating Portfolio (Add Money)
* As a logged-in user, I should be able to add money to my portfolio.
    * When on the `/` page:
       * I can send a request with an amount to add to my portfolio balance.
       * I should receive a response with the updated balance of my portfolio.
       * If I am not authenticated, I should receive a 401 error with the message "Authentication required."

## Viewing Watchlist 
* As a logged-in user, I should be able to view my selected watchlist of stocks.
    * When on the `/` page:
       * I can view my watchlist.
       * If I am not authenticated, I should receive a 401 error with the message "Authentication required."

## Adding to Watchlist 
* As a logged-in user, I should be able to add stocks to my watchlist.
    * When on the `/` page:
       * I can add stocks to my watchlist.
       * The added stock should show up on my watchlist after submission.
       * If I am not authenticated, I should receive a 401 error with the message "Authentication required."

## Removing from Watchlist 
* As a logged-in user, I should be able to remove stocks from my watchlist.
    * When on the `/` page:
       * I can delete stocks from my watchlist.
       * I should receive a message confirming the stock has been removed successfully.
       * The added stock should show up on my watchlist after submission.
       * If I am not authenticated, I should receive a 401 error with the message "Authentication required."
     
## Deleting a Watchlist
* As a logged-in user, I should be able to delete my a watchlist.
    * When on the `/` page:
       * I can send a delete request to removethe watchlist and all associated stocks from the list.
       * I should receive a message confirming the watchlist was deleted successfully.
       * If I am not authenticated, I should receive a 401 error with the message "Authentication required."
       
## Viewing Transaction History        
* As a logged-in user, I should be able to view the history of all transaction made in my portfolios.
    * When on the `/` page:
       * I can view a list of my recent transactions.
       * I should be able to open a window to view the full list of my transactions.
       * If I am not authenticated, I should receive a 401 error with the message "Authentication required."

## Viewing Stock Details      
* As a logged in or logged out user, I should be able to view a selected stock
    * When viewing the `/stocks/:symb` page:
        * If I am not logged in I should only be able to view the stock.
        * If I am logged: 
            * I should be able to purchase the stock.
            * If I already own the stock I should be able to update the amount (buy more stock or sell some stock).
            * If I already own the stock I should be able to sell all of that stock (delete).
            * I should be able to add the stock to a wtchlist.



