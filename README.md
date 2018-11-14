# Serverless build
`aws-scripts` contains most of the script files needed to run the site and do custom build stuff. it also contains 
`express.js` and `express.local.js` which you can use to test the app. When you build the app the express files will be 
copied to the required folders and you can test locally by running `node express.local` in the build/dist folder.

build script is still a WIP and as such is not the best, however to build:
`yarn build` - will build the site and great your build folder
`yarn pre-deploy` - will copy the express.js file into your build folder as were bundling with the server
`yarn create:serverless` - uses claudiajs to generate the lambda file if needed
`yarn deploy:serverless` - this clones the build folder, uses claudia to send the package to aws, then cleans up the folder
`yarn update: serverless` - this will rebuild the app and update claudia

## Building
to make the site for the first run:
* `yarn build; yarn pre-deploy; yarn pre-serverless; yarn create:serverless` - this will create the dist folder as well as generate the lambda.js
* edit the resulting lambda.js to add `'application/javascript'` to the `binaryMimeTypes`
* `yarn deploy:serverless` will deploy the serverless app for the first time
* `yarn post-serverless` will clean the dist folder which should be done between builds

## Re-Building
to update the site after first run
* `yarn build; yarn pre-deploy; yarn pre-serverless;` - this will create the dist folder with new running code based on your update
* `yarn update:serverless` - this will update the code using claudia
* `yarn post-serverless` will clean the dist folder which should be done between builds

