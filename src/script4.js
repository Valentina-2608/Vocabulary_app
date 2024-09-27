
/* Game 1 */

let active_inputs=document.querySelectorAll('.active_input');
    for(let i=0; i < active_inputs.length; i++){
        active_inputs[i].addEventListener('input', addLetter);
    }

    let mistakes = 0;
    function addLetter(event){
        let active_input = event.target;
        let active_input_parent=active_input.parentElement;
        let word_letter = active_input_parent.children[2].value;
        if (word_letter === active_input.placeholder){
            active_input.readOnly=true;
            active_input.style.color="black";
            alert('Correct');
        }
         else {
            active_input.readOnly=false;
            active_input.style.color="red"; 
            mistakes++; 
        }

        if (mistakes == 6){
            alert('This word was added to your vocabulary list');
            active_input.value=active_input.placeholder;
            active_input.style.color="black"; 
            active_input.readOnly=true;
        }

       
           
    }