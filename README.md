# Taskrunner Dukeout: Gulp vs Grunt
--------
Testing speed and usability between gulp and grunt


## Setup to run this yourself

```
npm install
```
--------

This repository was set up to build duelling scripts - one in [Grunt](http://gruntjs.com) and the other in [Gulp](http://gulpjs.com) - and run them against each other to see which is faster and which is easier to set up.

My notes are below and very general.

## Functionality in each script

* Compass/SASS compilation
* Browser Refresh
* Server creation
* Launch-in-browser

## Testing Requirements

* Speed
* Ease of setup

## Test results

After setting up the server, I made a single change to a single .scss file and checked the results.

### Gulp

Setup time: ~4 hours

Result: 2.72 miliseconds

```
Started connect web server on localhost:8001
identical app/styles/main.css

[14:06:35] Starting 'compass'...
[14:06:35] Finished 'compass' after 2.72 ms
overwrite app/styles/main.css
```
### Grunt

Setup time: ~2 hours

Result: 1.112 seconds

```
>> File "app/scss/main.scss" changed.
Running "compass:dist" (compass) task
overwrite app/styles/main.css (0.009s)
Compilation took 0.01s

Done, without errors.
Completed in 1.112s at Wed Aug 13 2014 14:09:16 GMT-0400 (EDT) -
```

---------

# NOTES

## Gulp

* [Basic Tasks in Gulp](http://ilikekillnerds.com/2014/07/how-to-basic-tasks-in-gulp-js/)
	* Compress Images
	* Compiling Sass/Compass
	* Hinting Your Javascript
	* Combine/Minify Your Javascript
* [example gulpfile.js](https://gist.github.com/anonymous/11545221)
* [getting started with gulp](http://markgoodyear.com/2014/01/getting-started-with-gulp)
	* lots of stuff we need like minify css, concat, etc
* [recipes from from gulp](https://github.com/gulpjs/gulp/tree/master/docs/recipes#recipes)