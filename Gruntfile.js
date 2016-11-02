module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
		uglify: {
			target: {
				files: {
					'src/ionic-sortable.min.js': ['src/ionic-sortable.js']
				}
			},
			options: {
				banner: '/*\n\tCopyright Luca Chiavelli https://github.com/EarlTP\n' +
						'\tionic-sortable v0.0.01 2016/11/01\n*/\n'
			}
		},
		jshint: {
			all: [
				'src/ionic-sortable.js',
				'Gruntfile.js'
			]
		}
	});

	grunt.registerTask('min', 'Minify javascript source code', 'uglify');
};