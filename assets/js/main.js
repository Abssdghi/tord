async function handleClick() {
    const card = document.getElementById('main-card');

    card.innerHTML = `<div class="w-8 h-8 border-4 border-primary border-t-secondary rounded-full animate-spin mx-auto"></div>`;
    card.classList.add('text-center');

    try {
        card.classList.add('rtl', 'font-arabic', 'text-lg', 'font-medium');
        const res = await axios.get('https://api.truthordarebot.xyz/api/dare');
        const question = res.data.question;

        const transres = await axios.get(`https://corsproxy.io/?url=https://ftapi.pythonanywhere.com/translate?sl=en&dl=fa&text=${question}`);
        const translated = transres.data['destination-text'];

        card.innerHTML = `
        <div class="flex flex-col gap-2">
        <p class="text-text font-display text-lg">${question}</p>
        </br>
        <p class="rtl font-arabic font-medium text-lg">${translated}</p>
        </div>
        `;

    } catch (error) {
        console.error('error in dare function:', error);
        card.textContent = "error";
    }
}