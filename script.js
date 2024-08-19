
function run()
{
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("out-code");

    output.contentDocument.body.innerHTML = htmlCode + "<style>" +cssCode+ "</style>";
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
    
    // Get the textarea element
    var textarea = document.getElementById("html-code");

    // Select the text inside the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand("copy");
 
}

function copy_css() {

    var textarea = document.getElementById("css-code");
    textarea.select();
    textarea.setSelectionRange(0, 99999);  
    document.execCommand("copy");

}

function copy_js() {

    var textarea = document.getElementById("js-code");
    textarea.select();
    textarea.setSelectionRange(0, 99999);  
    document.execCommand("copy");
 
}










