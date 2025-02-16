 
function run() {
    // Get the user input from the HTML, CSS, and JavaScript textareas
    let htmlCode = document.getElementById("html-code").value;  // Fetches the HTML code input
    let cssCode = document.getElementById("css-code").value;    // Fetches the CSS code input
    let jsCode = document.getElementById("js-code").value;      // Fetches the JavaScript code input
    
    // Get the output iframe where the code will be displayed
    let output = document.getElementById("out-code");

    // Inject HTML and CSS into the iframe's body
    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";

    // eval function Execute the JavaScript code inside the iframe
    output.contentWindow.eval(jsCode);
}


//-------------------Navbar-Onclick------------------->

function done_html()
{ 

    document.getElementById("html").style.paddingTop = "46px";
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "none";
    document.getElementById("javascript").style.display = "none";
    document.getElementById("output").style.display = "none";

}

function done_css()
{
    document.getElementById("css").style.display = "block";
    document.getElementById("html").style.display = "none";
    document.getElementById("javascript").style.display = "none";
    document.getElementById("output").style.display = "none";

}

function done_js()
{ 
   
    document.getElementById("javascript").style.display = "block";
    document.getElementById("html").style.display = "none";
    document.getElementById("css").style.display = "none";
    document.getElementById("output").style.display = "none";

}

function done_out()
{

    document.getElementById("output").style.display = "block";
    document.getElementById("html").style.display = "none";
    document.getElementById("css").style.display = "none";
    document.getElementById("javascript").style.display = "none";

}


 
//--------------------Clear-Textarea------------------->


function clear_html()
{
    let htmlCode = document.getElementById("html-code").value=" "; 
}

function clear_css()
{
    let htmlCode = document.getElementById("css-code").value=" ";  
}


function clear_js()
{
    let htmlCode = document.getElementById("js-code").value=" ";
}



//---------------------Copy-Textarea------------------>


 

function copy_html() {

    // Get the textarea element by its ID
    var textarea = document.getElementById("html-code").value;

    // Use the Clipboard API to copy the text inside the textarea
    navigator.clipboard.writeText(textarea)

        .then(() => {
            // Show an alert when copying is successful
            alert("Copied to clipboard!");
        })
        
        .catch(err => {
            // Log an error message if copying fails
            alert("Failed to copy:", err);
            
        });
}


function copy_css() {

    var textarea = document.getElementById("css-code").value;

    // Use the Clipboard API to copy the text inside the textarea
    navigator.clipboard.writeText(textarea)

        .then(() => {
            // Show an alert when copying is successful
            alert("Copied to clipboard!");
        })

        .catch(err => {
            // Log an error message if copying fails
             alert("Failed to copy:", err);
        });

}

function copy_js() {
    
    var textarea = document.getElementById("js-code").value;

    // Use the Clipboard API to copy the text inside the textarea
    navigator.clipboard.writeText(textarea)

        .then(() => {
            // Show an alert when copying is successful
            alert("Copied to clipboard!");
        })

        .catch(err => {
            // Log an error message if copying fails
            alert("Failed to copy:", err);
        });
 
}










