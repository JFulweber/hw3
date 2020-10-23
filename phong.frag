#version 330 core

in vec3 outColor;
in vec3 Position_WS;
in vec3 Normal_CS;
in vec3 EyeDirection_CS;
in vec3 LightDirection_CS;

out vec3 finalColor;

uniform mat4 MV;
uniform vec3 LightPos_WS;
uniform bool useAmbient;
uniform bool useDiffuse;
uniform bool useSpecular;
uniform int p;

void main(){
	vec3 lightColor = vec3(1,1,1); // set light color (unchanging - we can leave it here)
	float Brightness = 5.0f; // brightness 
	vec3 materialDiffuseColor = vec3(.1f,.1f,1f); // static diffuse color 
	vec3 materialAmbientColor = outColor; // static ambient color
	vec3 materialSpecularColor = vec3(0.1, 0.1, 0.1);
	// calculations
	float dist = length(LightPos_WS - Position_WS);
	vec3 n = normalize(Normal_CS);
	vec3 l = normalize(LightDirection_CS);
	float cosTheta = clamp(dot(n,l),0,1);
	vec3 E = normalize(EyeDirection_CS);
	vec3 R = reflect(-l, n);
	float cosAlpha = clamp(dot(E,R),0,1);
	// result accounting for the different states of shading 
	finalColor = (useAmbient?materialAmbientColor:vec3(0,0,0)) 
				+ (useDiffuse?(materialDiffuseColor * lightColor * Brightness * cosTheta/(dist*dist)):vec3(0,0,0)) 
				+ (useSpecular?materialSpecularColor * lightColor * Brightness * pow(cosAlpha,p):vec3(0,0,0)) // allow for variable p's
				;
}