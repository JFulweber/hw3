# Homework 3 / COSC4370

## Objective
The objective of this assignment is to show/render the 3 different terms in the Blinn-Phong reflection model on a cube with a single light source. I added a few things onto it that serve the purpose but are not explicitly required:
* Ability to toggle the ambient, diffuse and specular terms, using the keys 1, 2, 3 for each of the respective terms.
* Ability to change how strong the specular term is (the p value) using the scroll wheel.
## Environment
Compiled on Windows using MS's C++ Compiler in Visual Studio. The program requires GLM, GLFW, and GLEW in their 32-bit variants all included as according to the guide in the PDF in the Visual Studio settings. 
## Project Detials
I chose a color of (.1,.1,.5) to somewhat match the color of the picture in the homework's pdf. I struggled a bit with trial and error in learning the OpenGL required to do this assignment but ultimately the "opengl lecture" and some online resources helped quite a bit. I added many of my own uniform variables into the shaders to be used in calculations which can be changed during runtime using the aforementioned keys and scrollwheel. The view matrix is handled by the camera, using the vector of (0,0,3) as the position of the camera. The projection matrix is a bit arbitrary, but I chose it to be created with `glm::perspective(45.0f, (GLfloat) WIDTH/(GLfloat) HEIGHT,.1f, 100.0f)`. The model matrix is a 4x4 identity matrix. The lighting position is also arbitray of `(1.2f,1.0f,1.0f)`. The light color is completely white with a 'brightness' of 5.0f, used in the calculation of the specular and diffuse terms. 
## Result
You can see the pictures attatched. I included 2 pictures that showcase purely the specular term at two different angles so that you may see the reflection in different ways. The pictures taken were with the default p-value of 5.
## Reference
The opengl slides, the blinn-phong reflection slides
http://www.opengl-tutorial.org/beginners-tutorials/tutorial-8-basic-shading/ as some form of guidance
