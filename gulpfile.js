/**
 * Created by webcoder on 13/4/17.
 */
// Gulp.js configuracion

// incluir gulp y plugins

var
    gulp = require('gulp'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin'),
    del = require('del');

// Ubicacion de los archivos

var
    source = 'source/',
    dest = 'build/',

    images = {
        in: source + 'images/*.*',
        out: dest + 'images/'
    };

// limpiar la carpeta build
gulp.task('clean', function () {
    del([
       dest + '*'
    ]);
});

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