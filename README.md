# create-netlify-functions

This is an initialiser for npm (like [`create-react-app`](https://github.com/facebook/create-react-app)) which scaffolds a small project for being able to deploy [Netlify Functions](https://www.netlify.com/features/functions/).

## Usage

Where you would substitute `<directory-name>` for the new directory you want the project to be created in.

_This is required, if you don’t specify one, don’t worry it won’t use your current working directory by default._

```sh
npm init netlify-functions <directory-name>
```

or

```sh
npx create-netlify-functions <directory-name>
```

or

```sh
yarn create netlify-functions <directory-name>
```

## What does it do?

Currently it creates a single “hello world” lambda in a directory. It sets up the Netlify config so that you could publish it immediately and it should Just Work™.

There will be a test suite already set up for you to add to. Run `npm test` in your new directory.

There will also be a dev environment set up for you via the [`netlify-lambda`](https://www.npmjs.com/package/netlify-lambda) package

## Local Development

```
git clone git@github.com:leggsimon/create-netlify-lambdas.git
cd create-netlify-lambdas
npm install
```

### How to publish

_(This is more for me, so I don’t forget)_

This uses the [`np`](https://www.npmjs.com/package/np) package to deploy. On the master branch locally run `np` and follow the instructions.

## Why?

I’ve really enjoyed how Netlify have made creating lambda functions so easy to set up and deploy and I’d like to make it easier for others to do it I guess…
