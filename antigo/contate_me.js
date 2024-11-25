document.addEventListener("DOMContentLoaded", () => {
    const formularioContato = document.querySelector("#contate_me .content-form");
    const submitButton = document.querySelector("#contate_me .content-form button");

    const inputText = document.querySelector("#contate_me .content-form #name");
    const inputEmail = document.querySelector("#contate_me .content-form #email");
    const inputSubject = document.querySelector("#contate_me .content-form #subject");
    const inputMessage = document.querySelector("#contate_me .content-form #message");
`
    document.querySelector('form').onsubmit = () => {
        console.log(inputText.value, inputEmail.value, inputSubject.value, inputMessage.value)

        if (inputText.value == "" || inputEmail.value == "" || inputSubject.value == "" || inputMessage.value == "") return false

        fetch("https://formsubmit.co/ajax/87c82e86ac9d4698e6f3f6a32bb6a0ea", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: inputText.value,
                email: inputEmail.value,
                subject: inputSubject.value,
                message: inputMessage.value,
                _captcha: "true",
                _autoresponse: "Recebemos seu email, obrigado pelo contato e logo responderemos! :)",
                _template: "table",
            })
        })
        .then(response => response.json())
        .then(data => {
            let message = document.querySelector("#contate_me .mensagem");
            message.style.display = 'block';
            console.log(data)
            if (data.success != 'true') return console.log("deu erro")
            if (data.message != 'Server Error') return message.innerHTML = "Erro no servidor."

            //formularioContato.style.opacity = '0';
            message.innerHTML = "Recebemos seu email, obrigado pelo contato e logo responderemos! :)"
        })
        .catch(error => console.log(error))

        return false;
    }
`
});

// action="https://formsubmit.co/87c82e86ac9d4698e6f3f6a32bb6a0ea" 
// method="POST"
