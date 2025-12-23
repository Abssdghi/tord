async function go_loading(id='main-card') {
    const card = document.getElementById(id);

    card.innerHTML = `<div class="w-8 h-8 border-4 border-primary border-t-secondary rounded-full animate-spin mx-auto"></div>`;
    card.classList.add('text-center');
}


async function translate(text,sl='en',dl='fa') {
    const response = await axios.get(`https://corsproxy.io/?url=https://ftapi.pythonanywhere.com/translate?sl=${sl}&dl=${dl}&text=${text}`);
    const translated = response.data['destination-text'];
    return translated;    
}


async function req_to_baseurl(endpoint='dare') {
    const res = await axios.get(`https://api.truthordarebot.xyz/api/${endpoint}`);
    const question = res.data.question;
    return question;
    
}


async function handleClick() {
    const card = document.getElementById('main-card');

    card.innerHTML = `<div class="w-8 h-8 border-4 border-primary border-t-secondary rounded-full animate-spin mx-auto"></div>`;
    card.classList.add('text-center');

    try {
        const res = await axios.get('https://api.truthordarebot.xyz/api/dare');
        const question = res.data.question;

        const transres = await axios.get(`https://corsproxy.io/?url=https://ftapi.pythonanywhere.com/translate?sl=en&dl=fa&text=${question}`);
        const translated = transres.data['destination-text'];

        card.innerHTML = `
        <div class="flex flex-col gap-2">
        <p class="text-text font-Comic text-xl lg:text-2xl">${question}</p>
        </br>
        <p class="text-text font-Playpen text-xl lg:text-2xl" dir="rtl">${translated}</p>
        </div>
        `;

    } catch (error) {
        console.error('error in dare function:', error);
        card.textContent = "error";
    }
}