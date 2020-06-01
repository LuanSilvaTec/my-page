# Build react app on GitHub 

1. **Create your repository on GitHub**
The next step was to install ‘gh-pages’ package using the following npm command:
```
npm install --save gh-pages
```
**Add this code on the package.json of the project:**

```
"predeploy":"npm run build"
"build":"react-scripts build"
"deploy":"gh-pages -d build -r <repository link>"
```
Then, deploy the application using the following command:
```
npm run deploy
```
