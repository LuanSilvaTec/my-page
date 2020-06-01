# Build react app on GitHub 

1. **Create your repository on GitHub**
2. The next step was to install ‘gh-pages’ package using the following npm command:
```
npm install --save gh-pages
```
3. Modified the package.json file of the project by adding the following statements (the statements are highlighted):
```
The “homepage” specifies the host path where you want to host the application. 
The template for the URL is: 
https://[your-user-name].github.io/[your-repo-name]/
“predeploy” specifies the command to build before deployment.
“deploy” specifies which branch and directory to deploy.
```

4. **Add this code on the package.json of the project:**

```
"predeploy":"npm run build"
"build":"react-scripts build"
"deploy":"gh-pages -d build -r <repository link>"
```
5. Then, deploy the application using the following command:
```
npm run deploy
```
For more details, look at [here](https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d)
