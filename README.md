#Movie List App 
https://kim-misol.github.io/movie_app/

Movie list (Dark Mode) with React.js and GraphQL

SETTING
npx create-react-app movie_list_app
BEFORE DEPLOY if you did already " c: > npm i gh-pages",

git remote add origin https://github.com/kim-misol/movie_app.git
git push -u origin master

c: > yarn add --dev gh-pages
edit package.json
yarn start 
yarn build 
yarn run deploy

ajax: a syncronize with html and json javascript + ajax 를 이용하여 db loading 할 때, 2nd db has to wait for loading 1st db. -> solution: promise (asynchronous)

NOTES: "Component's LifeCycle"

componentWillMount()
render()
componentDidMount()
"When you need to modify state" Do not mutate directly, because the settings of render won't work! Use this.setState()

the advantages of ReactJS and GraphQL

fast to develope and use
easy to learn
don't have to use webpack ...

// try for next time
yarn start
yarn build
yarn run deploy
git remote add origin https://github.com/kim-misol/movie_app.git
git push -u origin master