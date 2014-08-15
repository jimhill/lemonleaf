# LemonLeaf

This package is designed as a quickstart environment for producing themes for [LemonStand](http://www.lemonstand.com).

## Getting started

**Step 1**: Install [gulp](http://gulpjs.com/) (assuming you already have [nodejs](http://nodejs.org/) installed):

`$ npm i gulp`

**Step 2**: Install gulp dependencies:

`$ npm i -D gulp-util gulp-notify gulp-ruby-sass@v0.5.0 gulp-jshint gulp-concat gulp-uglify gulp-rename gulp-gzip`

**Step 3**: Start watching your files (the default gulp task - see details below):

`$ gulp`

**Step 4**: Create your theme as normal in the `src` directory - not forgetting to update the `README.md` and `theme.yaml` files.

**Step 5**: When ready you can then either upload your theme files using the LemonStand backend interface (you can use the handy `$ gulp zip` task to create a zipped version of your theme. Or you use [LemonSync](https://github.com/lemonstand/lemonsync) (you can use the handy `$ gulp lemonsync-config` task to generate a `lemonsync.cfg` file).

## Configuring

You can manipulate the `gulpfile.js` file to suit your needs. Everything in there is simply a default.

## Gulp tasks

### default

`$ gulp`

By default this simply calls the *watch* task.

---

### watch

`$ gulp watch`

This default action *watches* changes in files within the `src` directory and runs the *min-styles* and/or the *min-scripts* tasks.

---

### min-styles

`$ gulp min-styles`

This triggers *min-styles-less* by default. You can configure this to suit your needs. You will see that *min-styles-sass* is available simply by uncommenting.

---

### min-styles-less

`$ gulp min-styles-less`

Compiles and compresses the [less](http://lesscss.org/) files found in `src/less/` and contatenates them into `dist/theme/css/main.css`.

---

### min-styles-sass

`$ gulp min-styles-sass`

Compiles and compresses the [Sass](http://sass-lang.com/) files found in `src/scss/` and contatenates them into `dist/theme/css/main.css`. Listens for file `.scss` file extensions by default.

---

### min-scripts

`$ gulp min-scripts`

This triggers *min-scripts-js* by default. You can configure this to suit your needs.

---

### min-scripts-js

`$ gulp min-scripts-js`

Compiles and compresses the JavaScript files found in `src/js/` and contatenates them into `dist/theme/js/main.min.js`.

---

### min-vendor-scripts-js

`$ gulp min-vendor-scripts-js`

Compiles and compresses any 3rd party vendor JavaScript files found in `src/js/vendors/` and contatenates them into `dist/theme/js/vendors.min.js`.

---

### lemonsync-config

`$ gulp lemonsync-config`

This simply places a boilerplate `lemonsync.cfg` in the root directory. If you have [LemonSync](https://github.com/lemonstand/lemonsync) installed you can configure this file, run `$ [sudo] lemonsync` and by default it will listen for changes to the `dist/theme` directory using this boilerplate.

---

### zip

`$ gulp zip`

This task simply creates `dist/theme.zip` containing the contents of the `dist/theme` directory. This can then be uploaded via the LemonStand backend interface.

---

## Support

This is not an officially supported repository and has been prepared by me to simply make life a little easier. I may or may not have time to fix issues, but please do fork/hack/whatever with it. Maybe someone with time could spin a [Grunt](http://gruntjs.com/) version?

## License

Feel free to use this however you wish. Code released under the [MIT license](http://github.com/jimhill/lemonleaf/blob/master/LICENSE).
