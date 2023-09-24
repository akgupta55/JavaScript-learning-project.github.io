// console.log("Ajay");
const form = document.querySelector('form');

form.addEventListener( 'submit', (e) =>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    // console.log(height);
    // console.log(weight);
    const result  = document.querySelector('#results')
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `your input for Height is Invalid! , ${height}` 
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `your input for Height is Invalid! , ${weight}` 
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        if(bmi < 18.6){
            result.innerHTML = `<span>The Person Is Under Weight ${bmi}</span>`;
        }else if(bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = `<span>The Person Is Under Weight ${bmi}</span>`;
        }else{
            result.innerHTML = `<span>The Person Is Under Weight ${bmi}</span>`;
        }
        
    }
} )

