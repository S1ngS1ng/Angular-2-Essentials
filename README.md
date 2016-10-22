# Angular-2-Essentials

## Live demo: http://singsing.io/Angular-2-Essentials

### Update 10/22/2016
> **Project Status**
> 
* Update to Angular 2.0.0
* Form module done
* Filter, directive WIP

## This project is built according to: [THIS](http://www.lynda.com/AngularJS-tutorials/AngularJS-2-Essential-Training/422834-2.html)
**The tutorial on [lynda](http://www.lynda.com/AngularJS-tutorials/AngularJS-2-Essential-Training/422834-2.html) is still using Angular2 beta version**

**Build your app with the latest version is highly recommended. Update from beta to final realease is not fun**

## Upgrade your project from System.js to Webpack
> Angular-CLI is using webpack. Please follow [this official guide](https://github.com/angular/angular-cli/wiki/Upgrading-from-Beta.10-to-Beta.14).

# Project Structure
    .
    ├── e2e                         # Protractor test files
    ├── coverage                    # Auto-generated test coverage reports
    ├── src                         # Source code
    │   ├── app                     # Project Source Code
    │   │   ├── media-item          # media-item module
    │   │   ├── media-item-form     # media-item-form module
    │   │   ├── media-item-list     # media-item-list module
    │   │   ├── category-list.pipe  # A pipe for filtering data (WIP)
    │   │   ├── favorite.directive  # A directive for customized style (WIP)
    │   │   ├── media.interface.ts  # Interface of media data
    │   │   ├── media-app.*.*       # A top-level module that wraps up all sub modules
    │   │   ├── media-item.service  # A service handling CRUD of media items
    │   │   └── providers.ts        # Opaque Token (WIP)
    │   ├── main.ts                 # App entry file
    │   ├── index.html              # Index file
    │   └── tsconfig.json           # TS compiler configuration file
    ├── .editorconfig               # Set coding style (indents, charset, etc.)
    ├── .gitignore                  # You know the drill...
    ├── Angular 2 - S1ngS1ng.pdf    # Slides
    ├── angular-cli.json            # Angular-CLI configuration file
    ├── package.json                # npm configuration file
    ├── README.md                   # Read this FIRST :)
    ├── tslint.json                 # tsLint configuration file
    └── ...

# Clone and play (Command line guide)
1. `git clone https://github.com/S1ngS1ng/Angular-2-Essentials.git`
2. `cd Angular-2-Essentials`
3. `npm i`
4. `npm start`

# Deploy to github-pages is easy
`ng github-pages:deploy --message "Deploy messge"`
> ref: https://github.com/angular/angular-cli#deploying-the-app-via-github-pages

# Have better ideas? Help me improve!
1. Fork this
2. `git clone [yourURL]`
3. coding...
4. `git commit -m [commitMessage]`
5. `git push [yourBranch]`
6. Send Pull Request
