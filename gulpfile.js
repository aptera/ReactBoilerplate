/// <binding BeforeBuild='default' ProjectOpened='watch' />
var gulp = require('gulp');
var run = require('gulp-run');

gulp.task('start', function(){
    run('npm run start', {}).exec();
    run('echo Started Dev Environment', {}).exec();
});

gulp.task('test', function () {
    run('npm run test', {}).exec();
    run('echo Started Jest', {}).exec();
});

gulp.task('json', function () {
    run('npm run json', {}).exec();
    run('echo Started JSON Server', {}).exec();
});

gulp.task('build', function () {
    run('npm run build', {}).exec();
    run('echo Running Production Build', {}).exec();
});

gulp.task('analyze', function () {
    run('npm run analyze', {}).exec(null, null);
    run('echo Analysis Complete', {}).exec(null, null);
});


gulp.task('default', ['start']);
gulp.task('dev', ['json', 'test', 'start']);
gulp.task('prop', ['build', 'analyze']);
