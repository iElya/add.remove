var elements = document.getElementsByClassName("child");
for(var i = 0 ; i < elements.length; i++)
{
    elements[i].onclick = function(){
        
        var el = elements[0];
        while(el)
        {
            if(el.tagName === "DIV"){

                el.classList.remove("bak");
            }
            el = el.nextSibling;
        }



        this.classList.add("bak");
    };
}