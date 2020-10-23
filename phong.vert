#version 330 core

uniform mat4 M;
uniform mat4 V;
uniform mat4 MVP;
uniform vec3 LightPos_WS; 
uniform bool useAmbient;
uniform bool useDiffuse;
uniform bool useSpecular;

layout (location = 0) in vec3 vPos;
layout (location = 1) in vec3 vNormal;

out vec3 outColor;
out vec3 Position_WS;
out vec3 Normal_CS;
out vec3 EyeDirection_CS;
out vec3 LightDirection_CS;

vec3 ambient = vec3(.1f, .1f, .5f);

void main()
{
	gl_Position = MVP * vec4(vPos, 1.0f); // set camera space position for frag shader
	outColor = ambient; // the 'base' color should just be ambient (prior to diffuse + specular), if useAmbient is true
	Position_WS = (M*vec4(vPos,1)).xyz; // get worldspace position for lighting calculations 
	vec3 vPos_CS = (V * M *vec4(vPos,1)).xyz; // intermediate calculation
	EyeDirection_CS = vec3(0,0,0)-vPos_CS; // eye direction is the negative of the camera space position 
	vec3 LightPos_CS = (V * vec4(LightPos_WS,1)).xyz; // view * worldspace vector = cameraspace vector 
	LightDirection_CS = LightPos_CS + EyeDirection_CS; // direction of light relative to where camera is looking 
	Normal_CS = (V * M * vec4(vNormal,0)).xyz; // use vnormal to calculate normal for specular lighting
}