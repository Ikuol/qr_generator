let btn=document.querySelector(".button");

/*addEventListener() utilisé ici pour pour ajouter un évènement
sur un bouton, ici l'évènement "click*, c'est à dire ce qui se
produira lorsqu'on cliquera sur le bouton*/

btn.addEventListener("click",() =>{
    let user_input=document.querySelector("#input_text");
        if(user_input.value != ""){

            /*Element.childElementCount désigne en effet le nombre d'éléments
            enfants de l'Elément en question. Ici, on faire référence au div
            ayant pour class ".qr-code"*/
            
            if(document.querySelector(".qr-code").childElementCount==0){
                generate(user_input);
            } else{
                document.querySelector(".qr-code").innerHTML="";
                generate(user_input);
            }
        } else{
            document.querySelector(".qr-code").style="display:none";
            alert("Entr\u00e9e invalide");
        }
        
});

function generate(user_input){
    document.querySelector(".qr-code").style="";
    
    /*Ici on a la création d'un objet "qrcode" de type QRCode
    avec tous les attributs lui correspondant. Etant donné qu'à
    chaque fois qu'on écrit quelque chose dans le input , il 
    sera généré à chaque fois un code_qr(en quelque sorte un objet)
    qui est créé à chaque fois et qui aura tous ces différents 
    attributs*/ 

        var qrcode= new QRCode(document.querySelector(".qr-code"),{
            text: `${user_input.value}`,
            width:180,
            height:180,
            colorDark:"#000000",
            colorLignt:"#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

    console.log(qrcode);
    
    /*Ici on crée un élément de type bouton et on l'associe au code qr 
    généré en utilisant "appendChild" */

            let download=document.createElement("button");
            document.querySelector(".qr-code").appendChild(download);

    /*Ici on crée un élément de type lien et on l'associe au bouton 
    généré en utilisant "appendChild" */       
                
                let download_link=document.createElement("a");
    
                /*la méthode setAttribute() est utilisé pour définir la
                valeur d'un attribut sur un élément spécifié, dans notre
                cas, il s'agit l'élément "download_link". Elle a pour
                syntaxe setAttribute("nom_attribut","valeur_attribut") */
                   
                    download_link.setAttribute("download","qr_code_link.png");
                         download_link.innerText="Download";
                             download.appendChild(download_link);

                             /*getAttribute("src") renvoie une url absolue et
                             le contenu de l'objet passé en paramètre. Et src 
                             est utlisé pour spécifier L'URL (chemin) du fichier
                             ou du lien.*/

                if(document.querySelector(".qr-code img").getAttribute("src")==null){
                    setTimeout(()=>{
                        download_link.setAttribute(
                            "href",
                            `${document.querySelector("canvas").toDataURL()}`
                        );
                    },300); //la fonction s'exécutera après 300ms
                }else{
                    setTimeout(()=>{
                        download_link.setAttribute(
                            "href",
                            `${document.querySelector(".qr-code img").getAttribute("src")}`
                        );
                    },300);
                }
}

function switch_mode(){
    
    let bod=document.body;
        let contain=document.querySelector('.container');
            let light=document.querySelector('.clear');
            bod.classList.toggle('dark');
                contain.classList.toggle('container-bi');
                    light.classList.toggle('clear-bi');
            
        
}
