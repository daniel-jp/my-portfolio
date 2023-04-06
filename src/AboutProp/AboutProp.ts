import { Cake, Code, GlobeHemisphereEast, MapPinLine, RedditLogo } from 'phosphor-react';


export default function AboutProp(){
  
  const aboutProps =[
    { id: 1,
      title: 'Freelancer Avalabbel',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
      icon: Code ,
    },
    { id: 2,
      title: 'BirthDay',
      text: '10 / September...',
      icon: Cake,
    }
    ,
    { id: 3,
      title: 'Native country',
      text: 'Angola',
      icon:GlobeHemisphereEast,
    }, 
    { id: 4,
      title: 'BirthDay City',
      text: 'Zaire-Soyo',
      icon:RedditLogo,
    },
    { id: 5,
      title: 'Country of Residence',
      text: 'Morroco-Rabat',
      icon:MapPinLine,
    }

  ]
  return aboutProps;
}