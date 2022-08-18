let plus1=false
let plus2=false
let plus3=false




document.getElementById('bigdiv').addEventListener("click",show)


function show(Event){
    let id = Event.target.getAttribute("id");
    console.log(id)
    if(id=="plus1"){
        console.log(plus1)
        if(plus1){
            plus1=false
            document.getElementById("plus1").innerHTML="+"

            document.getElementById("a1").classList.add("hide")
            return
        }
        if(!plus1){
            plus1=true
            document.getElementById("plus1").innerHTML="-"
            

            document.getElementById("a1").classList.remove("hide")
            return
        }
        
       
    }
    if(id=="plus2"){
        if(plus2){
            plus2=false
            document.getElementById("plus2").innerHTML="+"
            document.getElementById("a2").classList.add("hide")
            return
        }
        if(!plus2){
            plus2=true
            document.getElementById("plus2").innerHTML="-"
           

        document.getElementById("a2").classList.remove("hide")
        return
        }
        
        
    }
    if(id=="plus3"){
        if(plus3){
            plus3=false
            document.getElementById("plus3").innerHTML="+"
            document.getElementById("a3").classList.add("hide")
            return

        }
        if(!plus3){
            plus3=true
            document.getElementById("plus3").innerHTML="-"
            


        document.getElementById("a3").classList.remove("hide")
        return
        }
        
        
    }

    
}


