const customerImage = document.querySelector('#customer-img');
const customerName = document.querySelector('#customer-name');
const customertext = document.querySelector('#customer-text');

const btn = document.querySelectorAll('.btn');
let index = 0;
const customers = [];

class Customer {
  constructor(img,name,text){
    this.img=img;
    this.name=name;
    this.text=text;
  }
}

function createCustomer(img, name, text){
    let Img = `/resimage/${img}.jpg`;
    let customer = new Customer( Img, name, text);


    customers.push(customer);
}


createCustomer(0, 'john', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, reprehenderit provident? Ea obcaecati in asperiores non soluta nemo, quo a voluptatibus esse nesciunt. Ipsa consequuntur quae quas tempora a sapiente.');
createCustomer(1, 'sandy', 'abc ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, reprehenderit provident? Ea obcaecati in asperiores non soluta nemo, quo a voluptatibus esse nesciunt. Ipsa consequuntur quae quas tempora a sapiente.');
createCustomer(2, 'amy', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, reprehenderit provident? Ea obcaecati in asperiores non soluta nemo, quo a voluptatibus esse nesciunt. Ipsa consequuntur quae quas tempora a sapiente.');
createCustomer(3, 'tyrell', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, reprehenderit provident? Ea obcaecati in asperiores non soluta nemo, quo a voluptatibus esse nesciunt. Ipsa consequuntur quae quas tempora a sapiente.');
createCustomer(4, 'Wanda', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, reprehenderit provident? Ea obcaecati in asperiores non soluta nemo, quo a voluptatibus esse nesciunt. Ipsa consequuntur quae quas tempora a sapiente.');
console.log(customers);
btn.forEach(function(button) {
    button.addEventListener('click', function(e){
         if (e.target.parentElement.classList.contains('prevBtn')){
          if(index === 0){
            index = customers.length;
          }
          index--;
          customerImage.src = customers[index].img;
          customerName.innerHTML = customers[index].name;
          console.log(customers[index].name);
          customertext.innerHTML = customers[index].text;
         }
         if (e.target.parentElement.classList.contains('nextBtn')){
          index++;
          if(index === customers.length){
            index = 0;
          }

          customerImage.src = customers[index].img
          customerName.innerHTML = customers[index].name
          customertext.innerHTML = customers[index].text
         }
    })
})