#version 330 compatibility

//lighting
uniform vec3 uColor; // object color
uniform float Ds, Dt;
uniform float uSize;

uniform float uT0, uS0;

uniform float	uTime;		// "Time", from Animate( )
in vec2  	vST;		// texture coords

void
main( )
{
	float a = 1+sin(90*uTime)/6;
	float b = 1-sin(90*uTime)/6;
    vec3 myColor = vec3(0.5, 0.5 , 1);
	if(vST.s <= 0.33 && vST.t <= 0.33){
		myColor =  vec3(0.1, 0.5 , 0.7);
	}else if( 0.33 <= vST.s && vST.s <= 0.66*b && vST.t <= 0.33*a){
		myColor =  vec3(0.1, 0.5 , 0.3);
	}else if( 0.66 <= vST.s && vST.s <= 0.99 && vST.t <= 0.33*a){
		myColor =  vec3(0.6, 0.5 , 1);
	}else if( 0.33*a <= vST.s && vST.s <= 0.66*b && vST.t <= 0.33*a){
		myColor =  vec3(0.1, 0.5 , 0.1);
	}else if( 0.33*a <= vST.s && vST.s <= 0.66*b && 0.33*a <=vST.t && vST.t <= 0.66*b){
		myColor =  vec3(0.2, 0.5 , 0.1);
	}else if( 0.33*a <= vST.s && vST.s <= 0.66*b && 0.66*a <=vST.t && vST.t <= 0.99*b){
		myColor =  vec3(0.3, 0.6 , 0.3);
	}else if( 0.66*a <= vST.s && vST.s <= 0.99*b && vST.t <= 0.33){
		myColor =  vec3(0.6, 0.5 , 0.4);
	}else if( 0.66*a <= vST.s && vST.s <= 0.99*b &&  0.33*a <=vST.t && vST.t <= 0.66*b){
		myColor =  vec3(0.4, 0.5 , 1);
	}else if( 0.66*a <= vST.s && vST.s <= 0.99*b &&  0.66 <=vST.t && vST.t <= 0.99*b){
		myColor =  vec3(0.2, 0.5 , 0.2);
	}

	gl_FragColor = vec4( myColor,  1. );


}


