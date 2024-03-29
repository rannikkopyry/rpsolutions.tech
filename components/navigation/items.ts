export const items = [
  {
    url: '/',
    text: 'Yritys'
  },
  {
    url: '#palvelumme',
    text: 'Palvelumme',
    onClick: (event?: React.MouseEvent) => {
      const palvelumme = document.getElementById('palvelumme');

      if (palvelumme && event) {
        event.preventDefault();
        palvelumme.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  {
    text: 'Ota yhteyttä',
    url: '#contact',
    onClick: (event?: React.MouseEvent) => {
      const contact = document.getElementById('contact');

      if (contact && event) {
        event.preventDefault();
        contact.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  {
    text: 'Leasing',
    url: '/leasing'
  }
];
