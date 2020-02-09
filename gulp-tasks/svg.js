"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";

import debug from "gulp-debug";
import browsersync from "browser-sync";

gulp.task("svg", () => {
    return gulp.src(paths.svg.src)
        .pipe(gulp.dest(paths.svg.dist))
        .pipe(debug({
            "title": "Svg"
        }))
        .on("end", browsersync.reload);
});