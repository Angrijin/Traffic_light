#version 330 compatibility

out vec3      oNormal; // normal vector
out vec3      oLightDir; // vector from point to light
out vec3      oEyePosDir; // vector from point to eye
out vec2      oTexcoord;// texture coords

uniform float	uTime;		// "Time", from Animate( )
uniform float	Dx, Dy, Dz;// 
out vec2  	vST;		// texture coords

const float PI = 	3.14159265;
const float AMP = 	0.2;		// amplitude
const float W = 	1.5.;		// frequency

void
main( )
{ 

   float PI =     3.14159265;
	vec3 eyepos = vec3(0,2,5);
    vec3 lightpos = vec3( 0., 5., 15. );
    oTexcoord = gl_MultiTexCoord0.st;

	vST = gl_MultiTexCoord0.st;

	vec3 vert = gl_Vertex.xyz;
	vert.x =  Dx * vert.x + 0.5*vert.y;
	vert.y =  Dy * vert.y + + 0.3*vert.x;

	vec4 modepos = gl_ModelViewMatrix * vec4(vert, 1. );; 
    oNormal      = normalize(gl_NormalMatrix * gl_Normal);
    oLightDir    = lightpos - modepos.xyz;
    oEyePosDir   = eyepos - modepos.xyz;
	gl_Position = gl_ModelViewProjectionMatrix * vec4( vert, 1. );
}


