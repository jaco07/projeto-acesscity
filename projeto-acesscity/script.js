const btn = document.getElementById('btn')
    btn.addEventListener('click', ()=>{
   
    let lugar =document.getElementById('inLugar')
    const outLugar = document.getElementById('outLugar')
    lg = lugar.value

    console.log(lg)
    
    if(lg == 1){
        outLugar.textContent =`Parque Municipal, Praia de Ponta Verde e Pajuçara e Teatro Marechal Deodoro.` 
    }else if(lg == 2){
        outLugar.textContent = `Biblioteca Mário de Andrade, Praça das Artes e Teatro Municipal.`
    }else if(lg == 3){
        outLugar.textContent = `Jardim Botânico, Pão de Açúcar e Cristo Redentor.`
    } else {
        alert('O número digitado não se refere às localidades disponíveis, por favor informe um número válido.')
    }
})