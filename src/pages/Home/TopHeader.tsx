import { Facebook, Instagram, Linkedin, Mail, Phone, TimerIcon, Twitter } from 'lucide-react'


const TopHeader = () => {
  return (
    <div className='flex h-8 border-b py-6 items-center justify-between pl-8 pr-8'>
      <ul className='flex'>
        {
            ['facebook', 'twitter', 'instagram', 'linkedin'].map((item) => (
                <li key={item} className='p-2  text-sm border-r  border-l'>
                    {item === 'facebook' && <Facebook  className='size-4'/>}
                    {item === 'twitter' && <Twitter className='size-4'/>}
                    {item === 'instagram' && <Instagram className='size-4'/>}
                    {item === 'linkedin' && <Linkedin className='size-4'/>}
                </li>
            ))
        }
   
      </ul>
      <ul className='flex'>
   
                <li  className='p-2 text-sm border-r flex gap-2 justify-center items-center  border-l'>
                  <a
  href="https://wa.me/917983896882?text=Hello, I am interested in your interior design services. Please contact me.
"
  target="_blank"
  rel="noopener noreferrer"
  className="flex gap-2 justify-center items-center"
>
                    <Phone className='size-4'/> +91 798-389-6882
                    </a>
                </li>
<li  className='p-2 text-sm border-r flex gap-2 justify-center items-center    border-l'>
                    <TimerIcon className='size-4'/> Averable : 9:00am - 10:00pm
                </li>
                <li  className='p-2 text-sm border-r flex gap-2 justify-center items-center    border-l'>
                    <Mail className='size-4'/> irshad20ali26@gmail.com
                </li>
   
      </ul>
    </div>
  )
}

export default TopHeader
