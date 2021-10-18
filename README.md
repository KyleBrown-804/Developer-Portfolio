# Gatsby & React-Bootsrap Developer Portfolio
I developed this portfolio with Gatsby and react-boostrap and am hosting it through Netlify.  
  
Most recent deploy status: [![Netlify Status](https://api.netlify.com/api/v1/badges/f7b86692-e0fb-4224-b9db-87309b4c1b14/deploy-status)](https://app.netlify.com/sites/nifty-colden-6d83d1/deploys). 

## Goal of this project 
The goal of this project was so that I could learn Gatsby, more responsive web design, and to have a professional portfolio to show what I know. In order to get more practice with Bootsrap, I chose to utilize [react-bootstrap](https://react-bootstrap.github.io/) to make use of it's convienent UI kit for inline stylings. I chose to learn and use Gatsby to make use of server side rendering performance and leverage better SEO. This project was also my first introduction to using netlify as a hosting service, and it was much faster and convienent than I originally imagined. :raised_hands:  

## How to navigate this repository  
* This project was built off of the [gatsby starter repo](https://github.com/gatsbyjs/gatsby-starter-default) so all new code is under the ```src/``` directory.
* All sections viewable on the site were built as individual components to allow for flexibility and changing order if desired. All portfolio sections are viewable in the [components](./src/components/) folder under ```src/```
* All of these sections come together to make up this single page webapp within the [index.js](./src/pages/index.js) file and are rendered in a wrapper [Layout](./src/components/layout.js) component.  
* Some additional dependencies and configurations were also made within the **gatsby-browser.js** and **gatsby-config.js** files as well.

## Why I built the project this way
* As I already have had some experience with React, I picked up Gatsby relatively quickly. My main goal was to learn how to create responsive and professional looking UI.
* I consider that goal acomplished as I have tested the UI responsiveness on multiple screen sizes and everything is mobile friendly. :trophy:
* I kept the practice of dynamic rendering in mind as I implemented sections so that projects and other specific parts may be dynamically rendered based on the content provided. As an example see [here](https://github.com/KyleBrown-804/Developer-Portfolio/blob/master/src/components/projects.js#L159) where I dynamically render button components with project data and map them to buttons.
* In the vein of security and protecting my own email account from spam, I learned how to integrate a honeypot filter and reCaptcha for bot spam prevention. Netlify has support for both of these technologies however I had to implement my own custom reCaptcha2 component with custom logic as I ran into limitations with Netlify's default reCaptcha. 
* This was particularly tricky to handle reCaptcha's styling restrictions with mobile responsiveness. I figured out a solution which uses [react-media](https://www.npmjs.com/package/react-media) for media queries to be used with React JSX. An example of this and my form logic can be found within the **contactForm.js** file [here](https://github.com/KyleBrown-804/Developer-Portfolio/blob/master/src/components/contactForm.js#L235).

## In the future with more time available
* I plan on adding more theming and color to the site based off the color schemes used in my hero banner headshot.
* In addition to this I plan on adding css animations to some parts sections such as smooth transitions between skills in the hero section and possibly animations with the svg icons of myself.
* If I had more time, I would also look into and add more SEO enhancements.

## Live Demo
This website is currently live at https://kylebrown.page/ and can be viewed on any smartphone or tablet as well. :tada:
