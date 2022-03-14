export const items = [
  {
    url: '/',
    text: 'Yritys'
  },
  {
    url: '/training',
    text: 'Palvelut'
  },
  {
    url: '/careers',
    text: 'Toimintatapamme'
  },
  {
    url: '/blog',
    text: 'Blogi'
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
  }
];
