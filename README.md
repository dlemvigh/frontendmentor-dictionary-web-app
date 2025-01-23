# Frontend Mentor - Dictionary web app solution

This is a solution to the [Dictionary web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Search for words using the input field
- See the Free Dictionary API's response for the searched word
- See a form validation message when trying to submit a blank form
- Play the audio file for a word when it's available
- Switch between serif, sans serif, and monospace fonts
- Switch between light and dark themes
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

#### Dark-mode and font switcher

I wanted to implement the dark-mode and font switcher, with as little javascript as possible, and make it accessible and well structured. 
I managed to implement the logic using a react context api, letting me centralize the state and logic, and be loosely coupled to where in the UI the switchers are located.
The context applies css classes to the body setting css variables, letting the styling be independant of the javascript.

You could argue the context could be removed, letting the switchers apply the classes to the body them selves. I initially though I would need to access the dark-mode or font state in some of the components to override styling, but css variables was enough. I do think it is cleaner that the centralized context is responsible for applying the classes to the body. So in the end I am happy with the implementation

#### Accessible font switcher

I worked for a company that was obsessed with accessibility, and I have gotten in the habbit that all controls should atlease be keyboard accessible.
By that I mean that keyboard navigation should be able to access and toggle all controls, and that focused element should be highlighted.

I managed to do it with the font switcher, but making interactable elements buttons. To be 100% accessible I should have more aria-expanded, aria-controls, and other attributes, which I have skipped out of lazyness, because it requires having id's on all relevant elements, and it is easy to mess up.

### Continued development

I am using react-hook-form and @tanstack/react-query, which is overkill for the amount of form logic and data fetching, so I could be convised to remove it.

I am not quite happy with when the form validation is triggered.

The design is probably 90% on target, there are probably some spacing that are a bit off.

The is a small transition animation when switching dark-mode, that animates the background. Would be fun to animate everything, but that would require adding `transition: ...` to elements that switch color or background, and I couldn't be bothered, so stuck with background since that gave me 80% of the coolness factor.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/dlemvigh)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
