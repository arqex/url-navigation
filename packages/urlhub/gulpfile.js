var gulp = require('gulp'),
  webpackStream = require('webpack-stream'),
  rename = require('gulp-rename')
;

function build( filename, min ){
  var config = {output: {libraryTarget: 'umd'}};
  var stream = gulp.src( 'builder.js' );

  if( min ){
    filename += '.min';
    config = Object.assign( {optimization: {minimize: true}}, config );
  }

  return stream.pipe( webpackStream( config ) )
    .pipe( rename(filename + '.js') )
    .pipe( gulp.dest('dist/') )
  ;
}

gulp.task( 'default', function(){
  build('urlhub');
  // return build('urlhub', true);
});
