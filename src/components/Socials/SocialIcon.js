import React from 'react';

function SocialIcon({Icon,iconClass,name}) {
    console.log({Icon,iconClass,name})
   return <Icon className={iconClass} /> 
}

export default SocialIcon;