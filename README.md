# React WordPress Post Cards

This is a simple React app that fetches posts from a WordPress site and displays them as cards. \

Each card displays the post title, featured image (if available), excerpt, and a "read more" link that takes the user to the full post on the WordPress site.

Check out the [live demo](https://wp-cards.vercel.app/).

## Installation

To run this app locally, follow these steps:

Clone this repository to your local machine:
```
git clone https://github.com/carvalhochris/WPCards.git
```
You also need a Wordpress site with the REST API enabled.

## Install the app dependencies:
```
cd react-wordpress-posts-cards
```
```
npm install
```
## Start the app:
```
npm start
```
Open your web browser and go to http://localhost:3000 to view the app.

## Usage

To use this app with your own WordPress site, you will need to update the src/components/GetCards.js file with the URL of your WordPress site. You can also customize the app by changing the card layout, color scheme, or other components.

## Dependencies

This app uses the following dependencies:

* React: a JavaScript library for building user interfaces
* axios: a JavaScript library for making HTTP requests
* Chakra UI: a set of accessible and reusable UI components for React

## Issues?

If you find any issues with this app, please submit an issue on the GitHub repository.