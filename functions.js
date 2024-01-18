let enviar = document.getElementById('submit');

let etapa = 1;


enviar.addEventListener("click",function(){
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');

    let text1 = document.getElementById("text1");
    let text2 = document.getElementById("text2");



    if(etapa == 1 && input1.value == "momo" && input2.value == "oliamo"){
        alert("aeeee, vamos para o próximo...")

        input1.value = "";
        input2.value = "";

        text1.innerText = "Quantos meses temos juntos?"
        text2.innerText = "Quando vamos nos separar?"

        input1.placeholder = "..."
        input2.placeholder = "n.."

        etapa = 2;
    }else if(input1.value == "momo" && input2.value !== "oliamo"){
        alert("acertou a primeira momo, falta só a segunda.")
    }else if(input1.value !== "momo" && input2.value == "oliamo"){
        alert("acertou a segunda momo, falta só a primeira.")
    }


    if(etapa == 2 && input1.value == '10' && input2.value == "nunca"){
        console.log("opa")
        alert("aeeee, tchu acertou!")

        input1.value = "";
        input2.value = "";


        text1.innerText = "A momo é uma:"
        text2.innerText = "A momo fede a"

        input1.placeholder = "r... b...."
        input2.placeholder = "c.."
        
        etapa = 3;
    }else if(etapa == 2 && input1.value == '10' && input2.value !== "nunca"){
        alert("acertou a primeira momo, falta só a segunda.")
    }else if(etapa == 2 && input1.value !== '10' && input2.value == "nunca"){
        alert("acertou a segunda momo, falta só a primeira.")
    }

    if(etapa == 3 && input1.value == 'rola bortcha' && input2.value == "coco"){
        alert("aeeeee momo")

        let vidio = document.getElementById("video");
        vidio.innerHTML = '<video id="vid" src="assets/chipi.mp4" autoplay></video>';

        let video = document.getElementById('vid');
        video.play();

        input1.value = "";
        input2.value = "";

        input1.placeholder = "..."
        input2.placeholder = "..."

        let form = document.getElementById("form");
        form.style.display = 'none';
        
        etapa = 3;

        video.addEventListener('ended',function(){
            let container = document.getElementById('container');
                container.style.display = 'none'
            let end = document.getElementById("end");
                end.style.display = "block"    
        })

    }else if(etapa == 3 && input1.value == 'rola bortcha' && input2.value !== "coco"){
        alert("acertou a primeira momo, falta só a segunda.")
    }else if(etapa == 3 && input1.value !== 'rola bortcha' && input2.value == "coco"){
        alert("acertou a segunda momo, falta só a primeira.")
    }
    

})
