var elixir = require('laravel-elixir');

require('elixir-jshint');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {

    /*
     * BrowserSync setup
     */
    mix.browserSync({
        proxy: 'localhost'
    });

    /*
     * Front assets
     */
    mix.sass('app.scss');

    mix.scripts([
        '../bower_components/bootstrap/dist/js/bootstrap.min.js',
    ], 'public/js/vendor.js');

    mix.browserify('app.js');

    mix.jshint(['resources/assets/js/**/*.js'], {
        esversion: 6
    });
    
    /*
     * Admin assets
     */
    mix.sass('../admin/sass/admin.scss', 'public/css/admin.css');

    mix.scripts([
        '../bower_components/bootstrap/dist/js/bootstrap.min.js',
        '../admin/js/admin.js'
    ], 'public/js/admin.js');

    /*
     * Copy required fonts and images
     */
    //mix.copy('', '');

    /*
     * Assets versioning
     */
    mix.version(['public/css/app.css', 'public/css/admin.css', 'public/js/vendor.js', 'public/js/app.js', 'public/js/admin.js']);
});
