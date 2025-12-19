async function handleClick() {
    const card = document.getElementById('main-card');
    card.innerHTML = `<div class="w-8 h-8 border-4 border-primary border-t-secondary rounded-full animate-spin"></div>`;

    axios.get('https://api.truthordarebot.xyz/api/dare')
    .then(response => {
        result = response.data.question;
        card.textContent = response.data.question;
    })
    .catch(error => {
        console.error('error in dare function:', error);
        card.textContent = error;
    });
    
}