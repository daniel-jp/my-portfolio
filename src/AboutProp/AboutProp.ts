import { Cake, Code, GlobeHemisphereEast, MapPinLine, RedditLogo } from 'phosphor-react';


export default function AboutProp(){
  
  const aboutProps =[
    { 
      title: 'Freelancer Avalabbel',
      text: 'Techs: SpringBoot, React  & Angular',
      icon: Code ,
    },
    { 
      title: 'BirthDay',
      text: '10 / September...',
      icon: Cake,
    }
    ,
    { 
      title: 'Native country',
      text: 'Angola',
      icon: GlobeHemisphereEast,
    },  
    { 
      title: 'BirthDay City',
      text: 'Zaire-Soyo',
      icon: RedditLogo,
    },
    { 
      title: 'Country of Residence',
      text: 'Morroco-Rabat',
      icon: MapPinLine,
    }

  ]
  return aboutProps;
}