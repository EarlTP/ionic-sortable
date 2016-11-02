module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-karma');

	grunt.initConfig({
		uglify: {
			target: {
				files: {
					'src/ionic-sortable.min.js': ['src/ionic-sortable.js']
				}
			},
			options: {
				banner: '/*\n\tCopyright Kamil Pękala http://github.com/kamilkp\n' +
						'\tangular-sortable-view v0.0.13 2015/01/13\n*/\n'
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