# Jumsphot Lunch Machine

This tool might be used by Jumpshooters to decide when to go for lunch (when Avast canteen is closed, anyway).

It is built with [Angular 4](https://angular.io/) and [UIkit 3](https://getuikit.com/).

## How to run this

You need [Yarn](https://yarnpkg.com) to install dependencies. Get it and then run it in the project root by typing:

`yarn install`

This should fetch all that's needed. Now kick start the server by issuing:

`yarn run start`

This will build the app and then serve it. 

If it's a success you should be able to see the app running on [`http://localhost:4200`](http://localhost:4200)

## Tasks

Here's a list of things that would be great to do. 

- sort lunch list by number of upvotes
- find & fix nasty upvote bug
- disallow to add lunch place that's already there (with the same name)
- add button which will reset all upvotes to zero
- add an icon/button to remove a particular lunch place
- get rid of the ugly interval refreshing the lunch list by making the LunchService reactive
