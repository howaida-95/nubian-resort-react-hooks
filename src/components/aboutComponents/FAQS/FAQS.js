import React, {useState} from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Title from './../../shared/Title';
import FAQ from './FAQ/FAQ';
const FAQS = () => {
  const [FAQS, setFAQS] = useState([
    {
      open: true,
      heading: 'Does Kato Dool Nubian Resort have a restaurant on site?',
      content: <p>Kato Dool Nubian Resort has 1 restaurant: <br/>- Kato Dool</p>,
      iconOne: <FaChevronDown className = 'icon'/>,
      iconTwo: <FaChevronUp className = 'icon'/>
    },
    {
      open: false,
      heading: 'What are the check-in and check-out times at Kato Dool Nubian Resort?',
      content: <p>Check-in at Kato Dool Nubian Resort is from 3:00 PM, <br/>and check-out is until 11:00 AM.</p>,
      iconOne: <FaChevronDown className = 'icon'/>,
      iconTwo: <FaChevronUp className = 'icon'/>
    },
    {
      open: false,
      heading: 'How much does it cost to stay at Kato Dool Nubian Resort?',
      content: <p>The prices at Kato Dool Nubian Resort may vary depending on your stay (e.g. dates, hotel's policy etc.). <br/>To see prices, enter your dates.</p>,
      iconOne: <FaChevronDown className = 'icon'/>,
      iconTwo: <FaChevronUp className = 'icon'/>
    },
    {
      open: false,
      heading: 'How do I get to Kato Dool Nubian Resort from the nearest airport?',
      content: <p>From the nearest airport, you can get to Kato Dool Nubian Resort by: <br/>- Car 15min</p>,
      iconOne: <FaChevronDown className = 'icon'/>,
      iconTwo: <FaChevronUp className = 'icon'/>
    },
    {
      open: false,
      heading: 'What type of room can I book at Kato Dool Nubian Resort?',
      content: <p>Room options at Kato Dool Nubian Resort include: <br/>- Double<br/>- Triple <br/> - Suite</p>,
      iconOne: <FaChevronDown className = 'icon'/>,
      iconTwo: <FaChevronUp className = 'icon'/>
    },
    {
      open: false,
      heading: 'Can I park a car at Kato Dool Nubian Resort?',
      content: <p>yes</p>,
      iconOne: <FaChevronDown className = 'icon'/>,
      iconTwo: <FaChevronUp className = 'icon'/>
    },
    {
      open: false,
      heading: 'What kind of breakfast is served at Kato Dool Nubian Resort?',
      content: <p>Guests staying at Kato Dool Nubian Resort can enjoy a highly-rated breakfast during their stay (guest review score: 9.0). Breakfast option(s) include: <br/>- Continental<br/>- Buffet <br/> - À la carte</p>,
      iconOne: <FaChevronDown className = 'icon'/>,
      iconTwo: <FaChevronUp className = 'icon'/>
    }                       
  ]);
  const toggleHandler = (index) => {
    setFAQS(FAQS.map((item, i) => {
      if(i === index){
        item.open = !item.open
      }
      return item;
    }))
  }
  return (
    <section className = 'pd-7'>
      <div className = 'container-fluid'>
        <Title title = 'FAQs about Nubian Resort'/>
        <div className = 'row'>
          {FAQS.map((item, index) => {
            return <div className = 'col-12' key = {index} >
              <FAQ 
                item = {item} 
                index = {index}
                clicked = {toggleHandler}/>
              </div>
          })}            
        </div>
      </div>
    </section>
  );
}

export default FAQS;