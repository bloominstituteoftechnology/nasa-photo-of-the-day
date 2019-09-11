import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoIosLink } from "react-icons/io";

export const socials = [
  {
    name: "facebook",
    Icon: IoLogoFacebook,
    iconClass: "icon-class-fb"
  },
  {
    name: "twitter",
    Icon: IoLogoTwitter,
    iconClass: "icon-class-tw"
  },
  {
    name: "mail",
    Icon: IoMdMail,
    iconClass: "icon-class-ml"
  },
  {
    name: "web",
    Icon: IoIosLink,
    iconClass: "icon-class-lk"
  }
];

export const apiData = {
  copyright: "Bray Falls",
  date: "2019-09-11",
  explanation: `What energizes the Heart Nebula? First, the large emission nebula dubbed IC 1805 looks, in whole, like a human heart.  
The nebula glows brightly in red light emitted by its most prominent element: hydrogen.  The red glow and the larger shape are all powered by a small group of stars near the nebula's center.  In the center of the Heart Nebula are young stars from the open star cluster Melotte 15 that are eroding away several picturesque dust pillars with their energetic light and winds. The open cluster of stars contains a few bright stars nearly 50 times the mass of our Sun, many dim stars only a fraction of the mass of our Sun, and an absent microquasar that was expelled millions of years ago.  The Heart Nebula is located about 7,500 light years away toward the constellation of Cassiopeia.  
Coincidentally, a small meteor was captured in the foreground during imaging  and is visible above the dust pillars. 
 At the top right is the companion Fishhead Nebula.`,
  hdurl: "https://apod.nasa.gov/apod/image/1909/HeartNebula_Falls_2378.jpg",
  media_type: "image",
  service_version: "v1",
  title: "IC 1805: The Heart Nebula",
  url: "https://apod.nasa.gov/apod/image/1909/HeartNebula_Falls_960.jpg"
};


const months = ["January", "February", "March", "April", "May", "June", "July", "Aug", "September", "October", "November", "December"];

export const formatDate = date => {
            if(typeof date === 'string') date = new Date(date)
            let formattedDate;
  
            var day =  date.getDate();
            var month = date.getMonth(); //Be careful! January is 0 not 1
            var year =  date.getFullYear();
    
            const monthInString = months[month];
    
            formattedDate = `${monthInString} ${day}, ${year}`;
    
            return formattedDate.toUpperCase();
}