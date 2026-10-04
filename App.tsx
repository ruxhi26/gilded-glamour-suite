// TypeScript + React (TSX)
import { useState } from "react";
import { ArrowRight, CalendarDays, HeartPulse, Menu, ShieldCheck, Stethoscope, X } from "lucide-react";

const doctors = [
  ["Dr. Aarav Mehta","Cardiology","MBBS, MD, DM (Cardiology)","14 yrs experience","Mon–Fri, 10 AM – 2 PM","₹900"],
  ["Dr. Ananya Rao","Neurology","MBBS, MD, DM (Neurology)","12 yrs experience","Wed–Sun, 9 AM – 3 PM","₹1000"],
  ["Dr. Imran Khan","Gynecology","MBBS, MS (OBG)","13 yrs experience","Mon–Fri, 11 AM – 5 PM","₹750"],
  ["Dr. Kabir Singh","Orthopedics","MBBS, MS (Ortho)","16 yrs experience","Mon, Thu, Sat, 12 – 6 PM","₹850"]
];

const services = [
  ["General Consultation","Everyday health concerns, checkups and follow-ups with experienced physicians."],
  ["Dental Care","From routine checkups to restorative care, a healthier smile starts here."],
  ["Cardiology","Heart health screening, ECG, echo and specialist cardiac consultation."],
  ["Dermatology","Expert attention for your skin, hair and nails, at every stage of life."],
  ["Pediatrics","Thoughtful care for little ones, from newborn health to growing milestones."],
  ["Laboratory Tests","Blood tests, home sample collection and convenient digital reports."]
];

export default function App() {
  const [menu, setMenu] = useState(false);
  const [booked, setBooked] = useState(false);

  const scroll = (id:string) => {
    document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
    setMenu(false);
  };

  return <div className="app">
    <header className="nav">
      <div className="brand" onClick={()=>scroll("home")}>MediCare</div>
      <button className="mobile" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
      <nav className={menu?"open":""}>
        <button onClick={()=>scroll("home")}>Home</button>
        <button onClick={()=>scroll("services")}>Our services</button>
        <button onClick={()=>scroll("doctors")}>Our doctors</button>
        <button onClick={()=>scroll("about")}>About us</button>
        <button className="login" onClick={()=>alert("Login page placeholder")}>Log in</button>
        <button className="primary small" onClick={()=>setBooked(true)}>Book appointment</button>
      </nav>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Trusted care, close to you</p>
          <h1>MediCare.<br/><span>Your health,<br/>our priority.</span></h1>
          <p className="lead">Exceptional expertise. Genuine compassion.<br/>Discover a more personal approach to healthcare, with care that puts you first.</p>
          <div className="actions">
            <button className="primary" onClick={()=>setBooked(true)}>Book an appointment <ArrowRight size={18}/></button>
            <button className="secondary" onClick={()=>scroll("doctors")}>Find your doctor</button>
          </div>
        </div>
        <div className="hero-art"><div className="doctor-card"><HeartPulse size={28}/><b>Care that puts you first</b><small>Compassionate healthcare</small></div></div>
      </section>

      <section className="stats">
        <div><b>8+</b><span>Experienced doctors</span></div>
        <div><b>7</b><span>Specialist departments</span></div>
        <div><b>24/7</b><span>Emergency care</span></div>
      </section>

      <section id="services" className="section">
        <p className="eyebrow">Care for every chapter</p>
        <h2>A world of care. <i>All for you.</i></h2>
        <p className="section-intro">Everyday wellness to specialist attention, thoughtfully brought together.</p>
        <div className="service-grid">{services.map(([name,desc])=><article className="service" key={name}>
          <Stethoscope/><h3>{name}</h3><p>{desc}</p><button onClick={()=>setBooked(true)}>Explore <ArrowRight size={16}/></button>
        </article>)}</div>
      </section>

      <section className="benefits">
        <div><HeartPulse/><h3>Specialist expertise</h3><p>Experienced doctors, personal attention.</p></div>
        <div><CalendarDays/><h3>Care on your terms</h3><p>Online consultations or clinic visits.</p></div>
        <div><ShieldCheck/><h3>Private by design</h3><p>Your profile and visits stay yours.</p></div>
      </section>

      <section id="doctors" className="section">
        <p className="eyebrow">The people behind your care</p>
        <h2>Expert hands. <i>Human hearts.</i></h2>
        <p className="section-intro">Meet specialists who make your wellbeing their priority.</p>
        <div className="doctor-grid">{doctors.map(([name,specialty,qual,exp,time,price],i)=><article className="doctor" key={name}>
          <div className={"portrait p"+i}><span>{name.split(" ").slice(-1)[0][0]}</span></div>
          <p className="specialty">{specialty}</p><h3>{name}</h3>
          <p>{qual} · {exp}</p><p>{time}</p>
          <div className="doctor-bottom"><b>{price} / visit</b><button onClick={()=>setBooked(true)}>Book visit <ArrowRight size={15}/></button></div>
        </article>)}</div>
      </section>

      <section id="about" className="about">
        <div><p className="eyebrow">The MediCare experience</p><h2>More than treatment.<br/><i>Care that feels personal.</i></h2></div>
        <div><p>Healthcare should feel reassuring, not overwhelming. MediCare brings doctors, appointments, medical services and medicine information into one simple place — so getting care never feels complicated.</p><div className="tags"><span>Easy appointments</span><span>Private visit history</span></div></div>
      </section>

      <section className="cta">
        <p className="eyebrow">Your next chapter of care starts here.</p>
        <h2>Find your doctor. Choose your visit.<br/>Take the first step.</h2>
        <button className="primary" onClick={()=>setBooked(true)}>Book appointment <ArrowRight size={18}/></button>
      </section>
    </main>

    <footer><div className="brand">MediCare</div><p>Thoughtful healthcare. Wherever life takes you.</p><div><button onClick={()=>scroll("services")}>Our services</button><button onClick={()=>scroll("doctors")}>Our doctors</button><button onClick={()=>scroll("about")}>Contact us</button></div><small>© 2026 MediCare. All rights reserved. Images are illustrative. Medicine information is not a substitute for medical advice.</small></footer>

    {booked && <div className="modal-backdrop" onClick={()=>setBooked(false)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setBooked(false)}><X/></button><p className="eyebrow">Appointment</p><h2>Book your visit</h2><input placeholder="Your name"/><input placeholder="Email address"/><select><option>Choose department</option>{services.map(s=><option key={s[0]}>{s[0]}</option>)}</select><input type="date"/><button className="primary" onClick={()=>{alert("Appointment request submitted");setBooked(false)}}>Confirm appointment</button></div></div>}
  </div>;
}