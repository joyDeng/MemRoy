main();

function main(){
	const canvas = document.querySelector("#glCanvas");
	// Initialize the GL context
	const gl = canvas.getContext("webgl");

	if(!gl){
		alert("Unable to Initialize webgl. Browser")
		return;
	}

	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
}