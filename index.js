'use strict';

var gulp = require('gulp');
var elixir = require('laravel-elixir');
var gcmq = require('gulp-group-css-media-queries');

var Task = elixir.Task;

elixir.extend('gcmq', function (input, output, options) {
    new Task('gcmq', function () {
        return gulp.src(input)
            .pipe(gcmq(options))
            .pipe(gulp.dest(output))
    });
});
