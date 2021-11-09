
# Kaitongo Assessment

This project was used to evaluate my front-end skills and code quality.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browswer.

### Notes

#### Assets
All of the image files were copied from the live Kaitongo app. 
I found a free, open license download of the Muli font, though I will note it looks slightly different.
I converted the fonts and am serving them from the assets folder.

#### Styles
This project uses SASS and [BEM](http://getbem.com/) naming convention to style all of the components.
I implemented the [7-1](https://www.learnhowtoprogram.com/user-interfaces/building-layouts-preprocessors/7-1-sass-architecture) architecture for SASS as well, separating my files into parials which allows for one `main.scss` import into the `App.js` file.
I did consider using [styled-components](https://styled-components.com/) and this would likely be something I would try to implement in a future update of this code.

#### Form Validation
I initially started writing my own form validation, but realized that doing this from scratch would take too much time. 
Instead, I opted to look through a few different third-party options including Formik. 
Given that I had created the Sectors selector component from scratch (as opposed to using a component from a library), I realized I would face some challenges in implementing this solution. 
In the future, I think it would be best to find a library that can handle all of the various input needs thus minimizing the legwork required to hook everything together.

#### Form Submission
Given that the form isn't being validated, I decided not to spend too much time on creating dummy logic for the submission.
That said, I did write some code (which is commented out) so as to give you an idea of how I would handle the form submisison.

#### Challenges
The first challenge I encountered was creating the toggle for showing the password. 
While my code works, it does produce a warning in the console because I am conditionally changing the input type from password to text.
Ideally, I would use a library that would offer some tooling to help reduce the need for custom code, similar to my point above regarding Form Validation.

The second challenge I faced was handling the Sectors select input. 
I ended up creating a different type of state for this input because it was easier to manipulate the state and conditionally render the selected sectors. 
I also had to figure out how to remove values when they are clicked or selected again.