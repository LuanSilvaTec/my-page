# Build react app on GitHub 

**Add this code on the package.json of the project:**

```
"predeploy":"npm run build"
"build":"react-scripts build"
"deploy":"gh-pages -d build -r <repository name>"
```
Then, deploy the application using the following command:
```
npm run deploy
```
