#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

//-------------------------------------------Making a square-------------------------------------------\\

// void main() {
//     vec2 st = gl_FragCoord.xy/u_resolution.xy;
//     vec3 color = vec3(0.0);

//     // Each result will return 1.0 (white) or 0.0 (black).
//     // The multiplication of left*bottom will be similar to the logical AND.
//     float left = step(0.1,st.x);   // Similar to ( X greater than 0.1 )
//     float bottom = step(0.1,st.y); // Similar to ( Y greater than 0.1 )
    
//     // We can make the borders even simpler than above
//     vec2 leftAndBottom = vec2(step(.1, st));
//     float bl = leftAndBottom.y * leftAndBottom.x;

//     // To get the top right borders we subtract the x and y coordinates from 1
//     vec2 rightAndTop = vec2(step(.1, 1.0 - st));
//     float tl = rightAndTop.y * rightAndTop.x;

    
//     // // use smoothstep to blur the edges a bit
//     // vec2 leftAndBottom = vec2(smoothstep(.1, .11, st));
//     // float bl = leftAndBottom.y * leftAndBottom.x;

//     // vec2 rightAndTop = vec2(smoothstep(.1, .11,1.0 - st));
//     // float tl = rightAndTop.y * rightAndTop.x;

//     color = vec3( bl * tl);

//     gl_FragColor = vec4(color,1.0);
// }

// //-------------------------------------------Making a rectangle-------------------------------------------\\

// void main() {
//     vec2 st = gl_FragCoord.xy/u_resolution.xy;
//     vec3 color = vec3(0.0);

//     // Each result will return 1.0 (white) or 0.0 (black).
//     // The multiplication of left*bottom will be similar to the logical AND.
//     float left = step(0.1,st.x);   // Similar to ( X greater than 0.1 )
//     float bottom = step(0.3,st.y); // Similar to ( Y greater than 0.1 )
//     float right = step(.1, 1.0 - st.x);
//     float top = step(.3, 1.0 - st.y);

//     color = vec3( left * bottom * top * right);

//     gl_FragColor = vec4(color,1.0);
// }

//-------------------------------------------Making a circle 2 ways-------------------------------------------\\

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    float time = u_time;

    // 1. Whats the distance from the center of the canvas' x and y coord in every direction
    // center out
    float distanceFromTheCenter = distance(st, vec2(0.5));

    // 2. The LENGTH of the vector from the pixel to the center
    // out center
    vec2 distanceToTheMiddle = vec2(0.5)-st;
    float pixelDistanceFromTheMiddle = (1.0 - step(.4 ,length(distanceToTheMiddle))); 

    vec3 color = vec3(pixelDistanceFromTheMiddle);

    gl_FragColor = vec4(color,1.0);
}