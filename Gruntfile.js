/**
* Created with TallerArte.
* User: jhta
* Date: 2014-07-09
* Time: 12:06 AM
* To change this template use Tools | Templates.
*/
module.exports= function(grunt){
    
    var libs= [
        'bower_components/bootstrap/dist/css/boostrap.min.css',
        'bower_components/bootstrap/dist/css/boostrap-theme.min.css'
    ];
    grunt.initConfig({
       stylus: {
           
           compile: {
					options:{},
                    files: {
                        'build.min.css':'stylus/prueba.styl',
                        'build2.min.css':'stylus/prueba2.styl',
                    }
              
  		   }
		},
        cssmin: {
          
          minify: {
              'combine': {
                'files': { 'dist/libs.min.css': libs }
            }
            
          }
        },
        uglify: {
            build: {
                files: [{
                    src: ['bower_components/bootstrap/dist/js/boostrap.min.js',
                          'bower_components/jquery/dist/jquery.min.js',
                          'node_modules/angular/lib/angular.min.js',
                          'controladores/controllerTareas.js'],
                    dest: 'dist/libs.min.js'
                }]
                
            }
        },
        watch:{
            files:['stylus/*.styl','bower_components'],
        	task:['stylus','uglify'] 
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin'); 
    grunt.loadNpmTasks('grunt-contrib-watch'); //Cargamos las tareas de watch
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['uglify','stylus']);
     // cssmin task
  grunt.registerTask('buildcss', ['cssmin']);
      
}