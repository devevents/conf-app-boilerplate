[![Codeship Status for devevents/conf-app-boilerplate](https://codeship.com/projects/fd7e1b10-0a37-0133-3a25-5ae6dce7dd45/status?branch=master)](https://codeship.com/projects/90677)
[![Build Status](https://travis-ci.org/devevents/conf-app-boilerplate.svg?branch=master)](https://travis-ci.org/devevents/conf-app-boilerplate)
[![Code Climate](https://codeclimate.com/github/devevents/conf-app-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/devevents/conf-app-boilerplate)
[![Dependency Status](https://david-dm.org/devevents/conf-app-boilerplate.png)](https://david-dm.org/devevents/conf-app-boilerplate)
[![devDependency Status](https://david-dm.org/devevents/conf-app-boilerplate/dev-status.svg)](https://david-dm.org/devevents/conf-app-boilerplate#info=devDependencies)

# Conf App Boilerplate

> Boilerplate of mobile application to help people who want to organize conferences/events and don't have time enough
to create an app with information about the event.

## How it works?

The main technology behind this project is [Ionic](http://ionicframework.com/), which is a framework for developing hybrid mobile apps. We also use a *bunch of other great technologies* to help us, like the [Jade Template Engine](http://jade-lang.com/), the [Sass](http://sass-lang.com/) preprocessor, [Typescript](http://www.typescriptlang.org/) for logic, [Gulp](http://gulpjs.com/) for tasks automation and many others.

By default, we have the following sections:

- *About* - to describe what's the main goal of your event.
- *Location* - to show where it's going to happen through Google Maps.
- *Speakers* - to list information about speakers.
- *Schedule* - to show the agenda.
- *Photos* - to show a gallery of photos based on the event's hashtag.
- *Sponsors* - to show the brand of your sponsors.
- *Partners* - to show the brand of your partners.

## Getting Started

1. Make sure you have [Git](http://git-scm.com/downloads) and [NodeJS](http://nodejs.org/download/).

2. Clone this repository:

  ```sh
  $ git clone git://github.com/devevents/conf-app-boilerplate.git my_event
  ```

3. Install all dependencies:

  ```sh
  $ cd my_event
  $ npm install
  $ bower install
  ```

4. And finally run:

  ```sh
  # Via Gulp + BrowserSync
  $ gulp

  # Via Gulp + Ionic CLI
  $ ionic serve

  # Via Gulp + Ionic CLI (Using Ionic Lab to test the app on multiple platforms
  $ ionic serve --lab
  ```

Now you can see the website running in:

- `localhost:3000` if you're using *BrowserSync*
- `localhost:8100` if you're using *Ionic CLI*
- `localhost:8100/ionic-lab` if you're using *Ionic CLI* + *Ionic Lab*

## Structure

The basic structure of the project is given in the following way:

```
|-- gulp/
|-- src/
|   |-- app/
|       |-- about/
|       |-- components/
|       |-- menu/
|       |-- partners/
|       |-- photos/
|       |-- schedule/
|       |-- speakers/
|       |-- sponsors/
|       |-- app.ts
|       |-- general.scss
|       |-- index.jade
|       |-- styles.scss
|   |-- typings/
|-- www/
|-- .bowerrc
|-- bower.json
|-- config.xml
|-- gulpfile.js
|-- ionic.project
|-- package.json
|-- tsconfig.json
|-- tsd.json
```
