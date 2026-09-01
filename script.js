const phoneNumber = '6285358316708';
const message = 'Halo, saya tertarik membeli domain ini. Apakah masih tersedia?';
const currentDomain = window.location.hostname;

const domainName = document.getElementById('domainName');
const whatsappLink = document.getElementById('whatsappLink');

if (currentDomain) {
  domainName.textContent = currentDomain;
}

const encodedMessage = encodeURIComponent(message);
whatsappLink.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
