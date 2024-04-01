const form = document.getElementById('ab-form')

form.addEventListener('submit', function(calc) {
    calc.preventDefault();
    verify();
});

function verify() {
    const valA = document.getElementById('valA');
    const vA = Number(vala.value);
    const valB = document.getElementById('valB');
    const vB = Number(valb.value);
    const successmessage = document.getElementById('success-message')

    if (vA >= vB) {
        successmessage.innerHTML = `Valor INVALIDADO`
        
        vala.value = '';
        valb.value = '';

    } else {
        successmessage.innerHTML = `Valor VALIDADO`

        vala.value = '';
        valb.value = '';
    }

}