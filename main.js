
let cardsWrapper = document.querySelector('#cardsWrapper');

let mostraRubricaBtn = document.querySelector('#mostraRubricaBtn');

let aggiungiContattiBtn = document.querySelector('#aggiungiContattiBtn');

let rimuoviContattiBtn = document.querySelector('#rimuoviContattiBtn');

// input

let nameInput = document.querySelector('#nameInput');
let numberInput = document.querySelector('#numberInput');

const RUBRICA = {
    contacts : [
        {nome : 'Melania', numero : 3213214571 },
        {nome : 'Gertrude', numero : 333214571 },
        {nome : 'Olivia', numero : 333214571 },
        {nome : 'Lella', numero : 33389571 },
    ],
    showContacts : function(){
        cardsWrapper.innerHTML = '';
        this.contacts.forEach((contact)=>{
            let div = document.createElement('div');
            div.classList.add('col-12','col-lg-8','my-3');
            div.innerHTML = `
                
            <div class="card-custom">
            <p class="m-0">${contact.nome}</p>
            <p class="m-0">${contact.numero}</p>
            <i class="fa-solid fa-trash-can fa-2x trashIcon"></i>
        </div>
    `;
            cardsWrapper.appendChild(div);
        })
    let trashIcons = document.querySelectorAll('.trashIcon');
    trashIcons.forEach((icon, i)=>{
        icon.addEventListener('click',()=>{
            let nomeTrovato = this.contacts[i].nome;

            this.removeContact(nomeTrovato);
        });
      });
    },

     addContact : function(newName, newNumber){
        this.contacts.push({nome : newName, numero : newNumber});
        this.showContacts();
    },
     removeContact : function(removedName){
        let names = this.contacts.map((contact)=>{
            return contact.nome.toLowerCase();
        });

        let index = names.indexOf(removedName.toLowerCase());

                 if(index > -1){
            this.contacts.splice(index,1);
            this.showContacts();
            showContactsBtn.innerHtml = "Nascondi Rubrica"
            }   else{
            alert('Contatto non presente in rubrica');
            }
        }

    }

    let confirm = false;

    showContactsBtn.addEventListener('click', ()=>{

       if(confirm == false){
            RUBRICA.showContacts();
            confirm = true;
            showContactsBtn.innerHTML ="Nascondi Rubrica";
        } else {
       
            cardsWrapper.innerHTML = '';
            confirm = false;
            showContactsBtn.innerHTML ="Mostra Rubrica";
            
            nameInput.value = '';
            numberInput.value = '';
        }
    });
    removedContactBtn.addEventListener('click', ()=>{
        confirm = true;
        RUBRICA.removeContact(nameInput.value);
        nameInput.value = '';
    });
        
        
    
    });
    