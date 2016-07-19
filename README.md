# Packlink Angular FrontEnd Test

In order to run the app the first thing that must be done is a global installation of npm and bower. After that, with the execution of *npm install* and *bower install*, all the dependencies of the project will be installed.

Once all the dependencies are correctly installed, the default gulp script (*gulp* or *gulp default*) is enough to run the app. This script contains **browserify** for the js files, **minify** for the html, **serve** for the project running in *localhost:8000* and **watch** for dev purposes.

>**Note:**
>Due to the lack of knowledge of gulp, the minification is not fully complete. All js files are minified in the dist folder, along with the index.html, but the rest of the html templates and the assets are not minified. I am sure that all that it takes is a little time of research.