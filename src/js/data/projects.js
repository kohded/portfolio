import { devIcons, portfolioIcons } from 'utils/icons';
import image from 'utils/require';

export default {
  'Ricardo Beverly Hills': {
    'Warranty & Parts Management': {
      date: 'January 2017 – June 2017',
      images: {
        project: image['rbh-logo.jpg'],
        modal: {
          createClaim: {
            description: 'Create Claim',
            image: image['create-claim.png'],
          },
          createClaimEmail: {
            description: 'Create Claim Email Confirmation',
            image: image['create-claim-email.png'],
          },
          viewClaim: {
            description: 'View Claim',
            image: image['view-claim.png'],
          },
          editClaim: {
            description: 'Edit Claim',
            image: image['edit-claim.png'],
          },
          claims: {
            description: 'List of Claims',
            image: image['claims.png'],
          },
          customers: {
            description: 'List of Customers',
            image: image['customers.png'],
          },
          products: {
            description: 'List of Products',
            image: image['products.png'],
          },
          repairCenters: {
            description: 'List of Repair Centers',
            image: image['repair-centers.png'],
          },
          damageCodes: {
            description: 'List of Damage Codes',
            image: image['damage-codes.png'],
          },
          registerUser: {
            description: 'Register User',
            image: image['register-user.png'],
          },
        },
      },
      technologies: {
        Bootstrap: devIcons.Bootstrap,
        CSS3: devIcons.CSS3,
        HTML5: devIcons.HTML5,
        JavaScript: devIcons.JavaScript,
        jQuery: devIcons.jQuery,
        Laravel: devIcons.Laravel,
        MySQL: devIcons.MySQL,
        PHP: devIcons.PHP,
        Sass: devIcons.Sass,
      },
      url: 'http://ricardo-parts.com',
    },
  },
  'Green River Tech': {
    'Advising App': {
      date: 'September 2016 – January 2017',
      images: {
        project: image['grtech-logo.jpg'],
        modal: {
          filterDegrees: {
            description: 'Filter Degrees',
            image: image['filter-degrees.png'],
          },
          course: {
            description: 'Add, Delete, and Update Course with Autocomplete',
            image: image['course.gif'],
          },
          degree: {
            description: 'Add, Delete, and Update Degree with Autocomplete',
            image: image['degree.gif'],
          },
        },
      },
      technologies: {
        CSS3: devIcons.CSS3,
        Handlebars: devIcons.Handlebars,
        HTML5: devIcons.HTML5,
        JavaScript: devIcons.JavaScript,
        jQuery: devIcons.jQuery,
        Materialize: devIcons.Materialize,
        MySQL: devIcons.MySQL,
        PHP: devIcons.PHP,
      },
      url: 'http://advisingapp.greenrivertech.net',
    },
    'Schedule IT': {
      date: 'June 2016 – September 2016',
      images: {
        project: image['grtech-logo.jpg'],
        modal: {
          filterRoom: {
            description: 'Filter by Room',
            image: image['filter-room.png'],
          },
          filterInstructor: {
            description: 'Filter by Instructor',
            image: image['filter-instructor.png'],
          },
          addSchedule: {
            description: 'Add Schedule',
            image: image['add-schedule.gif'],
          },
          editSchedule: {
            description: 'Edit Schedule',
            image: image['edit-schedule.gif'],
          },
        },
      },
      technologies: {
        CSS3: devIcons.CSS3,
        FullCalendar: portfolioIcons.FullCalendar,
        HTML5: devIcons.HTML5,
        JavaScript: devIcons.JavaScript,
        jQuery: devIcons.jQuery,
        Materialize: devIcons.Materialize,
        MySQL: devIcons.MySQL,
        PHP: devIcons.PHP,
      },
      url: 'http://schedule-it.greenrivertech.net',
    },
  },
};
