/**
* Created with TallerArte.
* User: jhta
* Date: 2014-07-09
* Time: 12:06 AM
* To change this template use Tools | Templates.
*/
module.exports= function(grunt){
    grunt.initConfig({
       stylus: {
          compile: {

                    files: {
                        'build.min.css':'**/prueba.styl',
                        'build2.min.css':'**/prueba2.styl',
                    }
              
  		   }
		},
        uglify: {
            build: {
                files: [{
                    src: ['bower_components/bootstrap/dist/js/boostrap.min.js','bower_components/jquery/dist/jquery.min.js'],
                    dest: 'dist/libs.min.js'
                }]
                
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');    
    grunt.loadNpmTasks('grunt-contrib-watch'); //Cargamos las tareas de watch
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('build', ['uglify','stylus']);
      
}