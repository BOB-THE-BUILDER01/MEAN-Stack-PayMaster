<h2>PayMaster- The Employee Tracking App (MEAN Stack)</h2>

The Backend is completed, with all routes and schemas. All required modules are imported and setup in the index.js file. 
To have the back end running for your own use and testing:<br>
1. navigate to the index.js and make sure your .listen() is set at a port where it isn't clashing with your front end.
2. Go to the package.json and install all modules under the dependencies. Use 'npm install <module name>' to install.
3. type 'nodemon start' to run your server.
4. Sit back and take a sip of your imaginary drink. Who are you kidding, you've only come here to take someone's project at the last minute. Dw, it's all yours.
  <br><br><i>Sidenote: This is all inside the server folder. If you require this warning, <b>PLEASE</b> go study NodeJS, Express and MongoDB. This is not a tutorial.</i>

If you want to run commands and test the backend (it works if you're wondering -_-) install Postman or similar apps.
To run commands, see the URL extensions for each command in routes.js. It usually goes something like this:<br>
https://localhost:[your_port_no]/[extensions_are_here]<br><br>
<i>Still confused?</i> please <b>STUDY</b>

<br>I have written the services for the front end. Not yet tested if they work. I couldn't right now if I wanted to. Just coded it according to some 2 year old tutorial.
The front end devs will have to use the service classes which have already been imported in the app.module file.
All the classes are individually imported so as to import only required services into components and using said functions.

The front end consists of an Angular template downloaded online. I have given the devs instructions on how to navigate, make changes and include
the different elements required to complete the front end. No ETA. If you have a front end, go for this. It's basically done.

As of now, front end development is still in the works. 
<br><br>
<h4>EDIT: </h4>The front end is uploaded. If you are asking me, please create your own front end. There is very good chance that this does not work <i>(ᴛʜʀᴏᴡɪɴɢ sʜᴀᴅᴇ)</i>.
If you want more direction on what to do for the front end:
1. Use your imagination, please.
2. There are many free templates online. I used the first Google search result to find mine.<br>
https://www.creative-tim.com/templates/angular-free <br>
This is the website I used to get the template.
3. Paper Kit 2 Angular (Heads up, it uses Angular 9) and Material Dashboard Angular (this is 10)
4. PK2 is used as the main template (it has a signup and landing pages). I only wanted to use the table components from MD as half of this project is just tables.
5. If you are wondering about services, go to Client -> src -> app -> services. It should have them for all components you are using. Refer to the components.module.ts to see how they are imported to be used throughout the app.

All the Best,

Signed,

BOB THE BUILDER <br>
(yes he can !)
