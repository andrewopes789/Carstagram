<h1 align="center"> Carstagram </h1>
<h4 align="center">
Carstagram is an Instagram-inspired, photo sharing application for car enthusiasts to share photos of their favorite cars with other enthusiasts.
</h4>

The live site can be found [here](https://carstagram.herokuapp.com/#/).

## Table of Contents

- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Challenges](#challenges)
- [Triumphs](#triumphs)
- [Future Directions](#future-directions)
 
## Key Features
* User Authentication
  * Sign up for a new account or sign in to an existing account.
  * Users who would like to try the site without an account can also use the demonstrative login feature.

* Like/Unlike Your Favorite Car Photos
 
* Add/Delete Comments on Photos

* Post Photos

* View Photos in More Detail
  * Click on a photo on any user's profile page to view an enhanced version of the image.
  
* Follow/Unfollow Other Users
  * Follow other users to have their photos appear on your feed, or unfollow to remove their photos from your feed.
  
## Technologies Used
* Ruby on Rails (RoR) was used for the backend. 
  * Ruby on Rails was chosen for the following reasons:
  
    * With many ready-made modules and plugins, RoR is very efficient.
    * RoR is scalable and therefore very valuable when your userbase grows.
    * RoR has many built-in security features, fostering security for your application.
    
* Redux was used to manage the application state.
  * Redux provides the following benefits:
    
    * With a centralized state, Redux makes dispatching changes to the data or persisting data more intuitive.
    * Redux facilitates the testing of logic due to its implementation of 'pure' reducer functions.
    * Redux provides predictable updates to the state, making it easier to understand how data flows within the application.
    
* React was used to build the user interface.
  * React's advantages are as follows:
    
    * React provides a single source of truth due to its one-way data flow; therefore, only changes to the data trigger changes to the       user interface. This facilitates debugging by making it easier to reproduce errors.
    * React simplifies creating user interfaces by declaring them in self-contained components.
    * Every user interface created with React is a component, allowing the nesting of components without worrying about mismatched           object types.

## Challenges
* A common issue I came across was that when rendering a new component, the properties of that component would not initially load. As a   result, the first time an associated property was called on in the component, the render would break. I resolved this issue by adding   "placeholder" properties in the appropriate reducer.

  * When the render function for my component was loading, a part of my render called upon the `followers_by_id`, `followings_by_id`,       and `photos_by_id` properties; however, since they were not initially loaded, my component broke. As a result, I added the  "placeholders" as show below.

<p align="center">
<a href="https://andrewopes789.github.io/blinddate-website/">
    <img alt="BlindDate" title="BlindDate" src="https://github.com/andrewopes789/carstagram/blob/master/user_reducer.png" >
</a>
</p> 

## Triumphs
* A triumph I had was in rendering the comments of each post under the post's photo. I wanted the comments to initially render the most recent four, and then when the 'comment trigger' button was pressed, all of the comments would render. I also wanted the 'comment trigger' button to be dynamic in the following ways:

  * If there were less than five comments, the button would not exist and the post would simply display all four comments.
  * If there were between five and 20 comments, the button would say `View all ${number_of_comments} comments`.
  * If there were more than 20 comments, the button would simply say `Load more comments`.
  
* In order to accomplish this, I created multiple ternary operators to filter through the data and render the correct button, as shown below.

<p align="center">
<a href="https://andrewopes789.github.io/blinddate-website/">
    <img alt="BlindDate" title="BlindDate" src="https://github.com/andrewopes789/carstagram/blob/master/comments.png" >
</a>
</p>

## Future Directions
* Search Function
  * Users will be able to search for other users on the application.
  
* Direct Messaging
  * Users will be able to share photos and private messages with other user(s) in a built-in messaging platform.
