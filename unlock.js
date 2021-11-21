

var loader = setInterval(function () {
    if(document.readyState !== "complete") return;
    clearInterval(loader);

    if(document.getElementById("viewer-wrapper").childNodes.length === 4){
        document.getElementById("viewer-wrapper").lastChild.style.display="none";
        let pages=document.getElementById("page-container").childNodes.length;
        myVar = setInterval(function(){
            let input= document.getElementById("page-container").childNodes;
            let inputList = Array.prototype.slice.call(input);
            inputList.forEach(changeaction);
            function changeaction(value, index, ar) {
                let e = document.getElementById("page-container").childNodes[index];
                if(e.childNodes.length > 0 && e.classList.length ===3){
                    e.firstChild.style.display="block";
                    let d = document.createElement('p');
                    d.id=e.id;
                    d.classList.add("pf");
                    d.classList.add("w0");
                    d.classList.add("h0");
                    d.classList.add("test");
                    d.innerHTML = e.innerHTML;
                    document.getElementById("page-container").replaceChild(d,e);
                    pages=pages-1;
                }
                if(pages <=0){
                    clearInterval(myVar);
                }
            }

        }, 1000);
    }
   
 }, 300);
