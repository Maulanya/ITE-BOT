# ITE Bot (Original)

## Version 2.8.5

### developer Maulana#1977

#### How Clear Disk
##### type this in terminal
``cd .git
``
##### and this
``rm -r --interactive=never objects
``
##### then wait a few secound

#### How to host the bot

##### Using Visual Studio Code

#### 1. Download the project

Make sure you got download node.js before you install this repo, if you already downloaded node.js, download this repo.

#### 2. Unzip

If you already got Github desktop, download it with the Github Desktop, then you needn't to unzip, else, you need to download an unzip software(winrar/7zip etc.), and unzip the .zip

#### 3.Install packages

just type `npm i` in the console(cmd/powershell etc.) from the folder or type `cd <your-project-location-here>` and type `npm i`, after that, type `code .`, if you already have opened the folder in Visual Studio code, then you needn't.

#### 4.Create `.env` file

```env
PORT=3000
TOKEN=Your bot token goes here
imageapi=81ec44aee6ccbb692dabd2eb0e1454b7f0c5ef1dd805a939a291127eb26b0f5af5bb4a94f095bceade9417c25292e746504e378f2d0f3aa2864c3d775c32e76a
```

#### 5.Start the bot

run `npm run start` in the console to start the bot

### Using Glitch

Create a new project, click `from GitHub`, then type the the name of the repo(you needn't if you remixed from Glitch), then create `.env`, if there was already there, add the code below

```env
PORT=3000
TOKEN=Your bot token goes here
imageapi=81ec44aee6ccbb692dabd2eb0e1454b7f0c5ef1dd805a939a291127eb26b0f5af5bb4a94f095bceade9417c25292e746504e378f2d0f3aa2864c3d775c32e76a
```

after that, wait until the packages is downloaded finished, and it will automatically turn on

← `public/style.css`: The styling rules for the pages in your site.

← `server.js`: The **Node.js** server script for your new site. The JavaScript defines the endpoints in the site back-end, one to return the homepage and one to update with the submitted color. Each one sends data to a Handlebars template which builds these parameter values into the web page the visitor sees.

← `package.json`: The NPM packages for your project's dependencies.

← `src/`: This folder holds the site template along with some basic data files.

← `src/pages/index.hbs`: This is the main page template for your site. The template receives parameters from the server script, which it includes in the page HTML. The page sends the user submitted color value in the body of a request, or as a query parameter to choose a random color.

← `src/colors.json`: A collection of CSS color names. We use this in the server script to pick a random color, and to match searches against color names.

← `src/seo.json`: When you're ready to share your new site or add a custom domain, change SEO/meta settings in here.

## Try this next 🏗️

Take a look in `TODO.md` for next steps you can try out in your new site!

**_Want a minimal version of this project to build your own Node.js app? Check out [Blank Node](https://glitch.com/edit/#!/remix/glitch-blank-node)!_**

![Glitch](https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2FLogo_Color.svg?v=1602781328576)

## You built this with Glitch!

[Glitch](https://glitch.com) is a friendly community where millions of people come together to build web apps and websites.

- Need more help? [Check out our Help Center](https://help.glitch.com/) for answers to any common questions.
- Ready to make it official? [Become a paid Glitch member](https://glitch.com/pricing) to boost your app with private sharing, more storage and memory, domains and more.
