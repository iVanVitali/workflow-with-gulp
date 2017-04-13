/**
 * Created by webcoder on 13/4/17.
 */
// Gulp.js configuracion

// incluir gulp y plugins

var
    gulp = require('gulp'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin');

// Ubicacion de los archivos

var
    source = 'source/',
    dest = 'build/',

    images = {
        in: source + 'images/*.*',
        out: dest + 'images/'
    };

// procesar imagenes
gulp.task('images', function () {
    return gulp.src(images.in)
        .pipe(newer(images.out))
        .pipe(imagemin())
        .pipe(gulp.dest(images.out));
});

// tarea por defecto
gulp.task('default', function () {

});