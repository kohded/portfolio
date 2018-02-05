const requireIcons = (required) => {
  const icons = {};
  required.keys().forEach((item) => {
    icons[item.replace('./', '')] = required(item);
  });

  return icons;
};
const account = requireIcons(require.context('images/icons/account', false, /\.(svg)$/));
const dev = requireIcons(require.context('images/icons/dev', false, /\.(svg)$/));

const accountIcons = {
  GitHub: {
    link: 'https://github.com/kohded',
    svg: account['github.svg'],
  },
  LinkedIn: {
    link: 'https://www.linkedin.com/in/kohded',
    svg: account['linkedin.svg'],
  },
  Medium: {
    link: 'https://medium.com/@kohded',
    svg: account['medium.svg'],
  },
};

const skillIcons = {
  AWS: dev['amazonwebservices.svg'],
  Bootstrap: dev['bootstrap.svg'],
  CSM: dev['csm.svg'],
  CSS3: dev['css3.svg'],
  Foundation: dev['foundation.svg'],
  Git: dev['git.svg'],
  Handlebars: dev['handlebars.svg'],
  HTML5: dev['html5.svg'],
  Java: dev['java.svg'],
  JavaScript: dev['javascript.svg'],
  JQuery: dev['jquery.svg'],
  Laravel: dev['laravel.svg'],
  Linux: dev['linux.svg'],
  Materialize: dev['materialize.svg'],
  Meteor: dev['meteor.svg'],
  MongoDB: dev['mongodb.svg'],
  MySQL: dev['mysql.svg'],
  Nginx: dev['nginx.svg'],
  PHP: dev['php.svg'],
  React: dev['react.svg'],
  Sass: dev['sass.svg'],
  Webpack: dev['webpack.svg'],
};

export {
  accountIcons,
  skillIcons,
};
