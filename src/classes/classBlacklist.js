export class Baraja {

    constructor(){

       this.baraja=[];

    }

    crearBaraja(){
       const letras = ["C","D","H","S"];
       const adicionales = ["J","Q","K","A"];     

            for (let i=2;i<=10;i++){
                for(let letra of letras){     
                    this.baraja.push(i+letra); 
                       }
                     }

            for(let adi of adicionales){
                for(let letra of letras){
                  this.baraja.push(adi+letra);
                    }
                     }
            return _.shuffle(this.baraja);
    }

   
    mostrarBaraja(){
        console.log(_.shuffle(this.baraja));
    }

    

    
}