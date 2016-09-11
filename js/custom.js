(function makeDiv(){
    var divsize = ((Math.random()*100) + 50).toFixed();
    var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
    $newdiv = $('<div/>').css({
        'width':divsize+'px',
        'height':divsize+'px',
        'background-color': color
    });
    
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
    
    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( 'body' ).fadeIn(100).delay(300).fadeOut(200, function(){
       $(this).remove();
       makeDiv(); 
    }); 
});

const images = [
	'Npm-logo.svg',
	'bower-logo.svg',
	'DUO-logo.svg',
	'JSPM-logo.svg',
	'yeoman.svg',
	'jslint.png',
	'jshint.png',
	'eslint.svg',
	'traceur-compiler.svg',
	'babel.svg',
	'sass.svg',
	'less.svg',
	'stylus.svg',
	'postcss.svg',
	'mimosa-logo.png',
	'brunch.svg',
	'grunt.svg',
	'gulp.svg',
	'broccoli.svg',
	'flyjs.svg',
	'require.svg',
	'browserify-icon.svg',
	'webpack.svg',
	'rollupjs.svg'
];

var imageIndex = 0;

// (function insertImageAtRandomPosition(){
// 	var imageSource = 'images/' + images[imageIndex];
//     $image = $('<img>').attr('src', imageSource);
    
//     var posx = (Math.random() * ($(document).width() - 100)).toFixed();
//     var posy = (Math.random() * ($(document).height() - 100)).toFixed();
	    
//     $image.css({
//         'position':'absolute',
//         'left':posx+'px',
//         'top':posy+'px',
//         'display':'none'
//     }).appendTo( 'body' ).fadeIn(300, function(){
//        if (images.length > ++imageIndex) {
// 		   insertImageAtRandomPosition();
// 	   }
//     });
// 	// imageIndex = (imageIndex + 1) % images.length;
// });

function randomlyPositionImage(event) {
	const $image = $(event.fragment);
	const edgeBuffer = 150;

	var posx = (Math.random() * ($(document).width() - (edgeBuffer * 2)) + edgeBuffer).toFixed();
    var posy = (Math.random() * ($(document).height() - (edgeBuffer * 2)) + edgeBuffer).toFixed();
	
	console.log(`width: ${$(document).width()} height: ${$(document).height()}`);
	console.log(`posx: ${posx} posy: ${posy}`);

    $image.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px'
    });
}

Reveal.addEventListener( 'ready', function( event ) {
	Reveal.addEventListener( 'logos', function(event) {
		Reveal.addEventListener( 'fragmentshown', randomlyPositionImage, false );

		// Reveal.addEventListener('slidechanged', function() {
		// 	console.log('removing fragment listener');
		// 	// Remove fragment listener
		// 	Reveal.removeEventListener('fragmentshown', randomlyPositionImage);
		// });
	});
} );
