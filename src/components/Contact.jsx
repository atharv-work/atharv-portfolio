import React from "react";
import ContactUs from '../assets/contactUs.jpg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReactWhatsapp from "react-whatsapp";
const Contact = (props) => {
  const iconsSize={
    height:'40px',
    width:'40px'
  }
  return (
    <div>
      <div className="flex flex-col ">
        <div className="text-center text-5xl">Contact</div>
        <div className="flex flex-row flex-wrap mt-10">
          <div className='w-1/2 flex flex-row'>
            <img src={ContactUs} alt='contact us'/>
          </div>
          <div className='w-1/2 flex flex-col items-center justify-center'>
              <p className="text-xl md:text-2xl lg:text-3xl mb-10">You can connect with me instantly via:</p>
              <div className="flex flex-row gap-4">
              <ReactWhatsapp number="+917756043805" message="Hi Atharv!" ><WhatsAppIcon className='transition ease-in-out delay-100 hover:scale-125 duration-100 cursor-pointer ...' sx={{...iconsSize, color:'rgb(37, 211, 102)'}}/></ReactWhatsapp>
              
              <LinkedInIcon className='transition ease-in-out delay-100 hover:scale-125 duration-100 cursor-pointer ...' sx={{...iconsSize, color:'rgb(0, 119, 181)'}} onClick={()=>{window.open('https://www.linkedin.com/in/atharv-kulkarni-11886b159/')}}/>
              <TwitterIcon className='transition ease-in-out delay-100 hover:scale-125 duration-100 cursor-pointer ...' sx={{...iconsSize, color:'rgb(0, 172, 238)'}} onClick={()=>{window.open('https://twitter.com/atharvcoool')}}/>
              <FacebookIcon className='transition ease-in-out delay-100 hover:scale-125 duration-100 cursor-pointer ...' sx={{...iconsSize, color:'rgb(66, 103, 178)'}} onClick={()=>{window.open('https://www.facebook.com/atharv.kulkarni.9/')}}/>
              <GitHubIcon className='transition ease-in-out delay-100 hover:scale-125 duration-100 cursor-pointer ...' sx={{...iconsSize, color:'#171515'}} onClick={()=>{window.open('https://github.com/atharv-work')}}/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
