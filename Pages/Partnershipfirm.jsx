import React, { useEffect, useState } from "react";
import "../CSS/Privatelimitedcompany.css";

function Partnershipfirm() {


  const [activeTab, setActiveTab] = useState('tabs-1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };


  const testimonials = [
    { name: 'John Doe', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', pic: "https://www.bizpole.in/images/navy.png" },
    { name: 'Jane Smith', review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', pic: "https://www.bizpole.in/images/Nilesh-Kadam-Delpick-Photo.png" },
    { name: 'Alice Johnson', review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', pic: "https://www.bizpole.in/images/Nilesh-Kadam-Delpick-Photo.png" },
    { name: 'Bob Williams', review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', pic: "https://www.bizpole.in/images/navy.png" },
    { name: 'Emily Brown', review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', pic: "https://www.bizpole.in/images/Nilesh-Kadam-Delpick-Photo.png" },
    { name: 'Michael Wilson', review: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.', pic: "https://www.bizpole.in/images/navy.png" },
    { name: 'Sarah Martinez', review: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.', pic: "https://www.bizpole.in/images/Nilesh-Kadam-Delpick-Photo.png" },
    { name: 'David Jones', review: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?', pic: "https://www.bizpole.in/images/navy.png" }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        const currentIndex = Number(carousel.querySelector('.carousel-item.active').getAttribute('data-bs-slide-to'));
        const nextIndex = (currentIndex + 1) % testimonials.length;
        carousel.querySelector(`[data-bs-slide-to="${nextIndex}"]`).click();
      }
    }, 2000); //Clients Review - Change interval time as needed (5000 milliseconds = 5 seconds)

    return () => clearInterval(intervalId);
  }, [testimonials.length]);



  return (
    <div>
      <main>
        <div className="herocontainer">

          {/* Form */}
          <section className="contact-form">
            

            <form className="actualform">
            <h2 className="formplctitle text-center">Partnership Firm</h2>
              <input className="forminput" type="text" name="name" placeholder=" Name" />

              <input className="forminput" type="email" name="email" placeholder=" Email" />

              <input className="forminput" type="number" name="phone" placeholder=" Contact Number" />

              <input className="forminput" type="text" name="organization" placeholder="Organization Name" />

              <select className="form-control forminput" name="state" aria-required="true" aria-invalid="false">
                <option value="" disabled selected>Select your state</option>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CH">Chandigarh</option>
                <option value="CT">Chhattisgarh</option>
                <option value="DN">Dadra and Nagar Haveli</option>
                <option value="DD">Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="LA">Ladakh</option>
                <option value="LD">Lakshadweep</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PY">Puducherry</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UT">Uttarakhand</option>
                <option value="WB">West Bengal</option>
              </select>

              <select className="form-control forminput" name="city" aria-required="true" aria-invalid="false">
                <option value="" disabled selected> Select City</option>
                <option value="Adilabad">Adilabad</option>
                <option value="Agra">Agra</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Ahmednagar">Ahmednagar</option>
                <option value="Aizawl">Aizawl</option>
                <option value="Ajitgarh (Mohali)">Ajitgarh (Mohali)</option>
                <option value="Ajmer">Ajmer</option>
                <option value="Akola">Akola</option>
                <option value="Alappuzha">Alappuzha</option>
                <option value="Aligarh">Aligarh</option>
                <option value="Alirajpur">Alirajpur</option>
                <option value="Allahabad">Allahabad</option>
                <option value="Almora">Almora</option>
                <option value="Alwar">Alwar</option>
                <option value="Ambala">Ambala</option>
                <option value="Ambedkar Nagar">Ambedkar Nagar</option>
                <option value="Amravati">Amravati</option>
                <option value="Amreli district">Amreli district</option>
                <option value="Amritsar">Amritsar</option>
                <option value="Anand">Anand</option>
                <option value="Anantapur">Anantapur</option>
                <option value="Anantnag">Anantnag</option>
                <option value="Angul">Angul</option>
                <option value="Anjaw">Anjaw</option>
                <option value="Anuppur">Anuppur</option>
                <option value="Araria">Araria</option>
                <option value="Ariyalur">Ariyalur</option>
                <option value="Arwal">Arwal</option>
                <option value="Ashok Nagar">Ashok Nagar</option>
                <option value="Auraiya">Auraiya</option>
                <option value="Aurangabad">Aurangabad</option>
                <option value="Aurangabad">Aurangabad</option>
                <option value="Azamgarh">Azamgarh</option>
                <option value="Badgam">Badgam</option>
                <option value="Bagalkot">Bagalkot</option>
                <option value="Bageshwar">Bageshwar</option>
                <option value="Bagpat">Bagpat</option>
                <option value="Bahraich">Bahraich</option>
                <option value="Baksa">Baksa</option>
                <option value="Balaghat">Balaghat</option>
                <option value="Balangir">Balangir</option>
                <option value="Balasore">Balasore</option>
                <option value="Ballia">Ballia</option>
                <option value="Balrampur">Balrampur</option>
                <option value="Banaskantha">Banaskantha</option>
                <option value="Banda">Banda</option>
                <option value="Bandipora">Bandipora</option>
                <option value="Bangalore Rural">Bangalore Rural</option>
                <option value="Bangalore Urban">Bangalore Urban</option>
                <option value="Banka">Banka</option>
                <option value="Bankura">Bankura</option>
                <option value="Banswara">Banswara</option>
                <option value="Barabanki">Barabanki</option>
                <option value="Baramulla">Baramulla</option>
                <option value="Baran">Baran</option>
                <option value="Bardhaman">Bardhaman</option>
                <option value="Bareilly">Bareilly</option>
                <option value="Bargarh (Baragarh)">Bargarh (Baragarh)</option>
                <option value="Barmer">Barmer</option>
                <option value="Barnala">Barnala</option>
                <option value="Barpeta">Barpeta</option>
                <option value="Barwani">Barwani</option>
                <option value="Bastar">Bastar</option>
                <option value="Basti">Basti</option>
                <option value="Bathinda">Bathinda</option>
                <option value="Beed">Beed</option>
                <option value="Begusarai">Begusarai</option>
                <option value="Belgaum">Belgaum</option>
                <option value="Bellary">Bellary</option>
                <option value="Betul">Betul</option>
                <option value="Bhadrak">Bhadrak</option>
                <option value="Bhagalpur">Bhagalpur</option>
                <option value="Bhandara">Bhandara</option>
                <option value="Bharatpur">Bharatpur</option>
                <option value="Bharuch">Bharuch</option>
                <option value="Bhavnagar">Bhavnagar</option>
                <option value="Bhilwara">Bhilwara</option>
                <option value="Bhind">Bhind</option>
                <option value="Bhiwani">Bhiwani</option>
                <option value="Bhojpur">Bhojpur</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Bidar">Bidar</option>
                <option value="Bijapur">Bijapur</option>
                <option value="Bijapur">Bijapur</option>
                <option value="Bijnor">Bijnor</option>
                <option value="Bikaner">Bikaner</option>
                <option value="Bilaspur">Bilaspur</option>
                <option value="Bilaspur">Bilaspur</option>
                <option value="Birbhum">Birbhum</option>
                <option value="Bishnupur">Bishnupur</option>
                <option value="Bokaro">Bokaro</option>
                <option value="Bongaigaon">Bongaigaon</option>
                <option value="Boudh (Bauda)">Boudh (Bauda)</option>
                <option value="Budaun">Budaun</option>
                <option value="Bulandshahr">Bulandshahr</option>
                <option value="Buldhana">Buldhana</option>
                <option value="Bundi">Bundi</option>
                <option value="Burhanpur">Burhanpur</option>
                <option value="Buxar">Buxar</option>
                <option value="Cachar">Cachar</option>
                <option value="Central Delhi">Central Delhi</option>
                <option value="Chamarajnagar">Chamarajnagar</option>
                <option value="Chamba">Chamba</option>
                <option value="Chamoli">Chamoli</option>
                <option value="Champawat">Champawat</option>
                <option value="Champhai">Champhai</option>
                <option value="Chandauli">Chandauli</option>
                <option value="Chandel">Chandel</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chandrapur">Chandrapur</option>
                <option value="Changlang">Changlang</option>
                <option value="Chatra">Chatra</option>
                <option value="Chennai">Chennai</option>
                <option value="Chhatarpur">Chhatarpur</option>
                <option value="Chhatrapati Shahuji Maharaj Nagar">Chhatrapati Shahuji Maharaj Nagar</option>
                <option value="Chhindwara">Chhindwara</option>
                <option value="Chikkaballapur">Chikkaballapur</option>
                <option value="Chikkamagaluru">Chikkamagaluru</option>
                <option value="Chirang">Chirang</option>
                <option value="Chitradurga">Chitradurga</option>
                <option value="Chitrakoot">Chitrakoot</option>
                <option value="Chittoor">Chittoor</option>
                <option value="Chittorgarh">Chittorgarh</option>
                <option value="Churachandpur">Churachandpur</option>
                <option value="Churu">Churu</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Cooch Behar">Cooch Behar</option>
                <option value="Cuddalore">Cuddalore</option>
                <option value="Cuttack">Cuttack</option>
                <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                <option value="Dahod">Dahod</option>
                <option value="Dakshin Dinajpur">Dakshin Dinajpur</option>
                <option value="Dakshina Kannada">Dakshina Kannada</option>
                <option value="Daman">Daman</option>
                <option value="Damoh">Damoh</option>
                <option value="Dantewada">Dantewada</option>
                <option value="Darbhanga">Darbhanga</option>
                <option value="Darjeeling">Darjeeling</option>
                <option value="Darrang">Darrang</option>
                <option value="Datia">Datia</option>
                <option value="Dausa">Dausa</option>
                <option value="Davanagere">Davanagere</option>
                <option value="Debagarh (Deogarh)">Debagarh (Deogarh)</option>
                <option value="Dehradun">Dehradun</option>
                <option value="Deoghar">Deoghar</option>
                <option value="Deoria">Deoria</option>
                <option value="Dewas">Dewas</option>
                <option value="Dhalai">Dhalai</option>
                <option value="Dhamtari">Dhamtari</option>
                <option value="Dhanbad">Dhanbad</option>
                <option value="Dhar">Dhar</option>
                <option value="Dharmapuri">Dharmapuri</option>
                <option value="Dharwad">Dharwad</option>
                <option value="Dhemaji">Dhemaji</option>
                <option value="Dhenkanal">Dhenkanal</option>
                <option value="Dholpur">Dholpur</option>
                <option value="Dhubri">Dhubri</option>
                <option value="Dhule">Dhule</option>
                <option value="Dibang Valley">Dibang Valley</option>
                <option value="Dibrugarh">Dibrugarh</option>
                <option value="Dima Hasao">Dima Hasao</option>
                <option value="Dimapur">Dimapur</option>
                <option value="Dindigul">Dindigul</option>
                <option value="Dindori">Dindori</option>
                <option value="Diu">Diu</option>
                <option value="Doda">Doda</option>
                <option value="Dumka">Dumka</option>
                <option value="Dungapur">Dungapur</option>
                <option value="Durg">Durg</option>
                <option value="East Champaran">East Champaran</option>
                <option value="East Delhi">East Delhi</option>
                <option value="East Garo Hills">East Garo Hills</option>
                <option value="East Khasi Hills">East Khasi Hills</option>
                <option value="East Siang">East Siang</option>
                <option value="East Sikkim">East Sikkim</option>
                <option value="East Singhbhum">East Singhbhum</option>
                <option value="Eluru">Eluru</option>
                <option value="Ernakulam">Ernakulam</option>
                <option value="Erode">Erode</option>
                <option value="Etah">Etah</option>
                <option value="Etawah">Etawah</option>
                <option value="Faizabad">Faizabad</option>
                <option value="Faridabad">Faridabad</option>
                <option value="Faridkot">Faridkot</option>
                <option value="Farrukhabad">Farrukhabad</option>
                <option value="Fatehabad">Fatehabad</option>
                <option value="Fatehgarh Sahib">Fatehgarh Sahib</option>
                <option value="Fatehpur">Fatehpur</option>
                <option value="Fazilka">Fazilka</option>
                <option value="Firozabad">Firozabad</option>
                <option value="Firozpur">Firozpur</option>
                <option value="Gadag">Gadag</option>
                <option value="Gadchiroli">Gadchiroli</option>
                <option value="Gajapati">Gajapati</option>
                <option value="Ganderbal">Ganderbal</option>
                <option value="Gandhinagar">Gandhinagar</option>
                <option value="Ganganagar">Ganganagar</option>
                <option value="Ganjam">Ganjam</option>
                <option value="Garhwa">Garhwa</option>
                <option value="Gautam Buddh Nagar">Gautam Buddh Nagar</option>
                <option value="Gaya">Gaya</option>
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Ghazipur">Ghazipur</option>
                <option value="Giridih">Giridih</option>
                <option value="Goalpara">Goalpara</option>
                <option value="Godda">Godda</option>
                <option value="Golaghat">Golaghat</option>
                <option value="Gonda">Gonda</option>
                <option value="Gondia">Gondia</option>
                <option value="Gopalganj">Gopalganj</option>
                <option value="Gorakhpur">Gorakhpur</option>
                <option value="Gulbarga">Gulbarga</option>
                <option value="Gumla">Gumla</option>
                <option value="Guna">Guna</option>
                <option value="Guntur">Guntur</option>
                <option value="Gurdaspur">Gurdaspur</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Gwalior">Gwalior</option>
                <option value="Hailakandi">Hailakandi</option>
                <option value="Hamirpur">Hamirpur</option>
                <option value="Hamirpur">Hamirpur</option>
                <option value="Hanumangarh">Hanumangarh</option>
                <option value="Harda">Harda</option>
                <option value="Hardoi">Hardoi</option>
                <option value="Haridwar">Haridwar</option>
                <option value="Hassan">Hassan</option>
                <option value="Haveri district">Haveri district</option>
                <option value="Hazaribag">Hazaribag</option>
                <option value="Hingoli">Hingoli</option>
                <option value="Hissar">Hissar</option>
                <option value="Hooghly">Hooghly</option>
                <option value="Hoshangabad">Hoshangabad</option>
                <option value="Hoshiarpur">Hoshiarpur</option>
                <option value="Howrah">Howrah</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Idukki">Idukki</option>
                <option value="Imphal East">Imphal East</option>
                <option value="Imphal West">Imphal West</option>
                <option value="Indore">Indore</option>
                <option value="Jabalpur">Jabalpur</option>
                <option value="Jagatsinghpur">Jagatsinghpur</option>
                <option value="Jaintia Hills">Jaintia Hills</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Jaisalmer">Jaisalmer</option>
                <option value="Jajpur">Jajpur</option>
                <option value="Jalandhar">Jalandhar</option>
                <option value="Jalaun">Jalaun</option>
                <option value="Jalgaon">Jalgaon</option>
                <option value="Jalna">Jalna</option>
                <option value="Jalore">Jalore</option>
                <option value="Jalpaiguri">Jalpaiguri</option>
                <option value="Jammu">Jammu</option>
                <option value="Jamnagar">Jamnagar</option>
                <option value="Jamtara">Jamtara</option>
                <option value="Jamui">Jamui</option>
                <option value="Janjgir-Champa">Janjgir-Champa</option>
                <option value="Jashpur">Jashpur</option>
                <option value="Jaunpur district">Jaunpur district</option>
                <option value="Jehanabad">Jehanabad</option>
                <option value="Jhabua">Jhabua</option>
                <option value="Jhajjar">Jhajjar</option>
                <option value="Jhalawar">Jhalawar</option>
                <option value="Jhansi">Jhansi</option>
                <option value="Jharsuguda">Jharsuguda</option>
                <option value="Jhunjhunu">Jhunjhunu</option>
                <option value="Jind">Jind</option>
                <option value="Jodhpur">Jodhpur</option>
                <option value="Jorhat">Jorhat</option>
                <option value="Junagadh">Junagadh</option>
                <option value="Jyotiba Phule Nagar">Jyotiba Phule Nagar</option>
                <option value="Kabirdham (formerly Kawardha)">Kabirdham (formerly Kawardha)</option>
                <option value="Kadapa">Kadapa</option>
                <option value="Kaimur">Kaimur</option>
                <option value="Kaithal">Kaithal</option>
                <option value="Kakinada">Kakinada</option>
                <option value="Kalahandi">Kalahandi</option>
                <option value="Kamrup">Kamrup</option>
                <option value="Kamrup Metropolitan">Kamrup Metropolitan</option>
                <option value="Kanchipuram">Kanchipuram</option>
                <option value="Kandhamal">Kandhamal</option>
                <option value="Kangra">Kangra</option>
                <option value="Kanker">Kanker</option>
                <option value="Kannauj">Kannauj</option>
                <option value="Kannur">Kannur</option>
                <option value="Kanpur">Kanpur</option>
                <option value="Kanshi Ram Nagar">Kanshi Ram Nagar</option>
                <option value="Kanyakumari">Kanyakumari</option>
                <option value="Kapurthala">Kapurthala</option>
                <option value="Karaikal">Karaikal</option>
                <option value="Karauli">Karauli</option>
                <option value="Karbi Anglong">Karbi Anglong</option>
                <option value="Kargil">Kargil</option>
                <option value="Karimganj">Karimganj</option>
                <option value="Karimnagar">Karimnagar</option>
                <option value="Karnal">Karnal</option>
                <option value="Karur">Karur</option>
                <option value="Kasaragod">Kasaragod</option>
                <option value="Kathua">Kathua</option>
                <option value="Katihar">Katihar</option>
                <option value="Katni">Katni</option>
                <option value="Kaushambi">Kaushambi</option>
                <option value="Kendrapara">Kendrapara</option>
                <option value="Kendujhar (Keonjhar)">Kendujhar (Keonjhar)</option>
                <option value="Khagaria">Khagaria</option>
                <option value="Khammam">Khammam</option>
                <option value="Khandwa (East Nimar)">Khandwa (East Nimar)</option>
                <option value="Khargone (West Nimar)">Khargone (West Nimar)</option>
                <option value="Kheda">Kheda</option>
                <option value="Khordha">Khordha</option>
                <option value="Khowai">Khowai</option>
                <option value="Khunti">Khunti</option>
                <option value="Kinnaur">Kinnaur</option>
                <option value="Kishanganj">Kishanganj</option>
                <option value="Kishtwar">Kishtwar</option>
                <option value="Kodagu">Kodagu</option>
                <option value="Koderma">Koderma</option>
                <option value="Kohima">Kohima</option>
                <option value="Kokrajhar">Kokrajhar</option>
                <option value="Kolar">Kolar</option>
                <option value="Kolasib">Kolasib</option>
                <option value="Kolhapur">Kolhapur</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Kollam">Kollam</option>
                <option value="Koppal">Koppal</option>
                <option value="Koraput">Koraput</option>
                <option value="Korba">Korba</option>
                <option value="Koriya">Koriya</option>
                <option value="Kota">Kota</option>
                <option value="Kottayam">Kottayam</option>
                <option value="Kozhikode">Kozhikode</option>
                <option value="Krishna">Krishna</option>
                <option value="Kulgam">Kulgam</option>
                <option value="Kullu">Kullu</option>
                <option value="Kupwara">Kupwara</option>
                <option value="Kurnool">Kurnool</option>
                <option value="Kurukshetra">Kurukshetra</option>
                <option value="Kurung Kumey">Kurung Kumey</option>
                <option value="Kushinagar">Kushinagar</option>
                <option value="Kutch">Kutch</option>
                <option value="Lahaul and Spiti">Lahaul and Spiti</option>
                <option value="Lakhimpur">Lakhimpur</option>
                <option value="Lakhimpur Kheri">Lakhimpur Kheri</option>
                <option value="Lakhisarai">Lakhisarai</option>
                <option value="Lalitpur">Lalitpur</option>
                <option value="Latehar">Latehar</option>
                <option value="Latur">Latur</option>
                <option value="Lawngtlai">Lawngtlai</option>
                <option value="Leh">Leh</option>
                <option value="Lohardaga">Lohardaga</option>
                <option value="Lohit">Lohit</option>
                <option value="Lower Dibang Valley">Lower Dibang Valley</option>
                <option value="Lower Subansiri">Lower Subansiri</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Ludhiana">Ludhiana</option>
                <option value="Lunglei">Lunglei</option>
                <option value="Madhepura">Madhepura</option>
                <option value="Madhubani">Madhubani</option>
                <option value="Madurai">Madurai</option>
                <option value="Mahamaya Nagar">Mahamaya Nagar</option>
                <option value="Maharajganj">Maharajganj</option>
                <option value="Mahasamund">Mahasamund</option>
                <option value="Mahbubnagar">Mahbubnagar</option>
                <option value="Mahe">Mahe</option>
                <option value="Mahendragarh">Mahendragarh</option>
                <option value="Mahoba">Mahoba</option>
                <option value="Mainpuri">Mainpuri</option>
                <option value="Malappuram">Malappuram</option>
                <option value="Maldah">Maldah</option>
                <option value="Malkangiri">Malkangiri</option>
                <option value="Mamit">Mamit</option>
                <option value="Mandi">Mandi</option>
                <option value="Mandla">Mandla</option>
                <option value="Mandsaur">Mandsaur</option>
                <option value="Mandya">Mandya</option>
                <option value="Mansa">Mansa</option>
                <option value="Marigaon">Marigaon</option>
                <option value="Mathura">Mathura</option>
                <option value="Mau">Mau</option>
                <option value="Mayurbhanj">Mayurbhanj</option>
                <option value="Medak">Medak</option>
                <option value="Meerut">Meerut</option>
                <option value="Mehsana">Mehsana</option>
                <option value="Mewat">Mewat</option>
                <option value="Mirzapur">Mirzapur</option>
                <option value="Moga">Moga</option>
                <option value="Mokokchung">Mokokchung</option>
                <option value="Mon">Mon</option>
                <option value="Moradabad">Moradabad</option>
                <option value="Morena">Morena</option>
                <option value="Mumbai City">Mumbai City</option>
                <option value="Mumbai suburban">Mumbai suburban</option>
                <option value="Munger">Munger</option>
                <option value="Murshidabad">Murshidabad</option>
                <option value="Muzaffarnagar">Muzaffarnagar</option>
                <option value="Muzaffarpur">Muzaffarpur</option>
                <option value="Mysore">Mysore</option>
                <option value="Nabarangpur">Nabarangpur</option>
                <option value="Nadia">Nadia</option>
                <option value="Nagaon">Nagaon</option>
                <option value="Nagapattinam">Nagapattinam</option>
                <option value="Nagaur">Nagaur</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Nainital">Nainital</option>
                <option value="Nalanda">Nalanda</option>
                <option value="Nalbari">Nalbari</option>
                <option value="Nalgonda">Nalgonda</option>
                <option value="Namakkal">Namakkal</option>
                <option value="Nanded">Nanded</option>
                <option value="Nandurbar">Nandurbar</option>
                <option value="Narayanpur">Narayanpur</option>
                <option value="Narmada">Narmada</option>
                <option value="Narsinghpur">Narsinghpur</option>
                <option value="Nashik">Nashik</option>
                <option value="Navsari">Navsari</option>
                <option value="Nawada">Nawada</option>
                <option value="Nawanshahr">Nawanshahr</option>
                <option value="Nayagarh">Nayagarh</option>
                <option value="Neemuch">Neemuch</option>
                <option value="Nellore">Nellore</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Nilgiris">Nilgiris</option>
                <option value="Nizamabad">Nizamabad</option>
                <option value="North 24 Parganas">North 24 Parganas</option>
                <option value="North Delhi">North Delhi</option>
                <option value="North East Delhi">North East Delhi</option>
                <option value="North Goa">North Goa</option>
                <option value="North Sikkim">North Sikkim</option>
                <option value="North Tripura">North Tripura</option>
                <option value="North West Delhi">North West Delhi</option>
                <option value="Nuapada">Nuapada</option>
                <option value="Ongole">Ongole</option>
                <option value="Osmanabad">Osmanabad</option>
                <option value="Pakur">Pakur</option>
                <option value="Palakkad">Palakkad</option>
                <option value="Palamu">Palamu</option>
                <option value="Pali">Pali</option>
                <option value="Palwal">Palwal</option>
                <option value="Panchkula">Panchkula</option>
                <option value="Panchmahal">Panchmahal</option>
                <option value="Panchsheel Nagar district (Hapur)">Panchsheel Nagar district (Hapur)</option>
                <option value="Panipat">Panipat</option>
                <option value="Panna">Panna</option>
                <option value="Papum Pare">Papum Pare</option>
                <option value="Parbhani">Parbhani</option>
                <option value="Paschim Medinipur">Paschim Medinipur</option>
                <option value="Patan">Patan</option>
                <option value="Pathanamthitta">Pathanamthitta</option>
                <option value="Pathankot">Pathankot</option>
                <option value="Patiala">Patiala</option>
                <option value="Patna">Patna</option>
                <option value="Pauri Garhwal">Pauri Garhwal</option>
                <option value="Perambalur">Perambalur</option>
                <option value="Phek">Phek</option>
                <option value="Pilibhit">Pilibhit</option>
                <option value="Pithoragarh">Pithoragarh</option>
                <option value="Pondicherry">Pondicherry</option>
                <option value="Poonch">Poonch</option>
                <option value="Porbandar">Porbandar</option>
                <option value="Pratapgarh">Pratapgarh</option>
                <option value="Pratapgarh">Pratapgarh</option>
                <option value="Pudukkottai">Pudukkottai</option>
                <option value="Pulwama">Pulwama</option>
                <option value="Pune">Pune</option>
                <option value="Purba Medinipur">Purba Medinipur</option>
                <option value="Puri">Puri</option>
                <option value="Purnia">Purnia</option>
                <option value="Purulia">Purulia</option>
                <option value="Raebareli">Raebareli</option>
                <option value="Raichur">Raichur</option>
                <option value="Raigad">Raigad</option>
                <option value="Raigarh">Raigarh</option>
                <option value="Raipur">Raipur</option>
                <option value="Raisen">Raisen</option>
                <option value="Rajauri">Rajauri</option>
                <option value="Rajgarh">Rajgarh</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Rajnandgaon">Rajnandgaon</option>
                <option value="Rajsamand">Rajsamand</option>
                <option value="Ramabai Nagar (Kanpur Dehat)">Ramabai Nagar (Kanpur Dehat)</option>
                <option value="Ramanagara">Ramanagara</option>
                <option value="Ramanathapuram">Ramanathapuram</option>
                <option value="Ramban">Ramban</option>
                <option value="Ramgarh">Ramgarh</option>
                <option value="Rampur">Rampur</option>
                <option value="Ranchi">Ranchi</option>
                <option value="Ratlam">Ratlam</option>
                <option value="Ratnagiri">Ratnagiri</option>
                <option value="Rayagada">Rayagada</option>
                <option value="Reasi">Reasi</option>
                <option value="Rewa">Rewa</option>
                <option value="Rewari">Rewari</option>
                <option value="Ri Bhoi">Ri Bhoi</option>
                <option value="Rohtak">Rohtak</option>
                <option value="Rohtas">Rohtas</option>
                <option value="Rudraprayag">Rudraprayag</option>
                <option value="Rupnagar">Rupnagar</option>
                <option value="Sabarkantha">Sabarkantha</option>
                <option value="Sagar">Sagar</option>
                <option value="Saharanpur">Saharanpur</option>
                <option value="Saharsa">Saharsa</option>
                <option value="Sahibganj">Sahibganj</option>
                <option value="Saiha">Saiha</option>
                <option value="Salem">Salem</option>
                <option value="Samastipur">Samastipur</option>
                <option value="Samba">Samba</option>
                <option value="Sambalpur">Sambalpur</option>
                <option value="Sangli">Sangli</option>
                <option value="Sangrur">Sangrur</option>
                <option value="Sant Kabir Nagar">Sant Kabir Nagar</option>
                <option value="Sant Ravidas Nagar">Sant Ravidas Nagar</option>
                <option value="Saran">Saran</option>
                <option value="Satara">Satara</option>
                <option value="Satna">Satna</option>
                <option value="Sawai Madhopur">Sawai Madhopur</option>
                <option value="Sehore">Sehore</option>
                <option value="Senapati">Senapati</option>
                <option value="Seoni">Seoni</option>
                <option value="Seraikela Kharsawan">Seraikela Kharsawan</option>
                <option value="Serchhip">Serchhip</option>
                <option value="Shahdol">Shahdol</option>
                <option value="Shahjahanpur">Shahjahanpur</option>
                <option value="Shajapur">Shajapur</option>
                <option value="Shamli">Shamli</option>
                <option value="Sheikhpura">Sheikhpura</option>
                <option value="Sheohar">Sheohar</option>
                <option value="Sheopur">Sheopur</option>
                <option value="Shimla">Shimla</option>
                <option value="Shimoga">Shimoga</option>
                <option value="Shivpuri">Shivpuri</option>
                <option value="Shopian">Shopian</option>
                <option value="Shravasti">Shravasti</option>
                <option value="Sibsagar">Sibsagar</option>
                <option value="Siddharthnagar">Siddharthnagar</option>
                <option value="Sidhi">Sidhi</option>
                <option value="Sikar">Sikar</option>
                <option value="Simdega">Simdega</option>
                <option value="Sindhudurg">Sindhudurg</option>
                <option value="Singrauli">Singrauli</option>
                <option value="Sirmaur">Sirmaur</option>
                <option value="Sirohi">Sirohi</option>
                <option value="Sirsa">Sirsa</option>
                <option value="Sitamarhi">Sitamarhi</option>
                <option value="Sitapur">Sitapur</option>
                <option value="Sivaganga">Sivaganga</option>
                <option value="Siwan">Siwan</option>
                <option value="Solan">Solan</option>
                <option value="Solapur">Solapur</option>
                <option value="Sonbhadra">Sonbhadra</option>
                <option value="Sonipat">Sonipat</option>
                <option value="Sonitpur">Sonitpur</option>
                <option value="South 24 Parganas">South 24 Parganas</option>
                <option value="South Delhi">South Delhi</option>
                <option value="South Garo Hills">South Garo Hills</option>
                <option value="South Goa">South Goa</option>
                <option value="South Sikkim">South Sikkim</option>
                <option value="South Tripura">South Tripura</option>
                <option value="South West Delhi">South West Delhi</option>
                <option value="Sri Muktsar Sahib">Sri Muktsar Sahib</option>
                <option value="Srikakulam">Srikakulam</option>
                <option value="Srinagar">Srinagar</option>
                <option value="Subarnapur (Sonepur)">Subarnapur (Sonepur)</option>
                <option value="Sultanpur">Sultanpur</option>
                <option value="Sundergarh">Sundergarh</option>
                <option value="Supaul">Supaul</option>
                <option value="Surat">Surat</option>
                <option value="Surendranagar">Surendranagar</option>
                <option value="Surguja">Surguja</option>
                <option value="Tamenglong">Tamenglong</option>
                <option value="Tarn Taran">Tarn Taran</option>
                <option value="Tawang">Tawang</option>
                <option value="Tehri Garhwal">Tehri Garhwal</option>
                <option value="Thane">Thane</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="The Dangs">The Dangs</option>
                <option value="Theni">Theni</option>
                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                <option value="Thoothukudi">Thoothukudi</option>
                <option value="Thoubal">Thoubal</option>
                <option value="Thrissur">Thrissur</option>
                <option value="Tikamgarh">Tikamgarh</option>
                <option value="Tinsukia">Tinsukia</option>
                <option value="Tirap">Tirap</option>
                <option value="Tiruchirappalli">Tiruchirappalli</option>
                <option value="Tirunelveli">Tirunelveli</option>
                <option value="Tirupur">Tirupur</option>
                <option value="Tiruvallur">Tiruvallur</option>
                <option value="Tiruvannamalai">Tiruvannamalai</option>
                <option value="Tiruvarur">Tiruvarur</option>
                <option value="Tonk">Tonk</option>
                <option value="Tuensang">Tuensang</option>
                <option value="Tumkur">Tumkur</option>
                <option value="Udaipur">Udaipur</option>
                <option value="Udalguri">Udalguri</option>
                <option value="Udham Singh Nagar">Udham Singh Nagar</option>
                <option value="Udhampur">Udhampur</option>
                <option value="Udupi">Udupi</option>
                <option value="Ujjain">Ujjain</option>
                <option value="Ukhrul">Ukhrul</option>
                <option value="Umaria">Umaria</option>
                <option value="Una">Una</option>
                <option value="Unnao">Unnao</option>
                <option value="Upper Siang">Upper Siang</option>
                <option value="Upper Subansiri">Upper Subansiri</option>
                <option value="Uttar Dinajpur">Uttar Dinajpur</option>
                <option value="Uttara Kannada">Uttara Kannada</option>
                <option value="Uttarkashi">Uttarkashi</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Vaishali">Vaishali</option>
                <option value="Valsad">Valsad</option>
                <option value="Varanasi">Varanasi</option>
                <option value="Vellore">Vellore</option>
                <option value="Vidisha">Vidisha</option>
                <option value="Viluppuram">Viluppuram</option>
                <option value="Virudhunagar">Virudhunagar</option>
                <option value="Visakhapatnam">Visakhapatnam</option>
                <option value="Vizianagaram">Vizianagaram</option>
                <option value="Vyara">Vyara</option>
                <option value="Warangal">Warangal</option>
                <option value="Wardha">Wardha</option>
                <option value="Washim">Washim</option>
                <option value="Wayanad">Wayanad</option>
                <option value="West Champaran">West Champaran</option>
                <option value="West Delhi">West Delhi</option>
                <option value="West Garo Hills">West Garo Hills</option>
                <option value="West Kameng">West Kameng</option>
                <option value="West Khasi Hills">West Khasi Hills</option>
                <option value="West Siang">West Siang</option>
                <option value="West Sikkim">West Sikkim</option>
                <option value="West Singhbhum">West Singhbhum</option>
                <option value="West Tripura">West Tripura</option>
                <option value="Wokha">Wokha</option>
                <option value="Yadgir">Yadgir</option>
                <option value="Yamuna Nagar">Yamuna Nagar</option>
                <option value="Yanam">Yanam</option>
                <option value="Yavatmal">Yavatmal</option>
                <option value="Zunheboto">Zunheboto</option>
              </select>

              {/* <div className="row">
                                <div className="col-md-6">
                                <label>
                                        <input type="checkbox" className="checkbox" name="authorize" value="1" required aria-required="true" data-gtm-form-interact-field-id="0" />
                                    </label>
                                   
                                </div>
                                <div className="col-md-6 text-right">
                                <p>I authorize Bizpole and its representative to contact me with updates and notifications via Email, SMS, WhatsApp, and Call. This will override the registry on DND/NDNC.</p>
                                </div>
                            </div> */}
              <div className="checkpara">
                <input type="checkbox" className="checkbox" id="" />
                <p>I authorize Kalpa Tag and its representative to contact me with updates and notifications via Email, SMS, WhatsApp, and Call. This will override the registry on DND/NDNC.</p>
              </div>

              <button className="send_email btn  btn btn_yellow_" type="submit" data-loading-text="Sending...">Send</button>
            </form>
          </section>
          <div className="hero-text herocontent">
            <h1 className="herotitle">Partnership Firm Registration in India</h1>
            <p className="heropara">A Partnership Firm is a popular form of business where an association of people join hands to carry out a business for profit. With least regulations to follow, it is relatively easy to start and is a desirable option amongst small and medium sized businesses in the unorganized sectors where there is no/less requirement of external funds and low risk of bad debts like consultancy firms.</p>
          </div>
        </div>
      </main>

      {/* Banner 2 Start */}
      <div className="banner2plc">
        <div className="container innerplc">
          <div className="row align-items-center bg_white_box">
            <div className="col-lg-6 col-sm-12 col-12">
              <div className="help_txt">
                <h2 className="color_white banner2title" style={{ marginBottom: '0px', textAlign: 'left' }}>
                Start a partnership firm
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-12">
              <div className="help_txt">
                <p className="text-left color_white mt-3 banner2para">
                Partnership firms are created with the help of a registered deed in India. It is necessary to register the partnership firm in order to claim any benefits or file a case against partners/ third parties. Bizpole provides reliable services to start a partnership firm in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner 2 End */}

      {/* 6 reasons Start */}

      <div className="sixreasons">
        <section className="section-layout353 pd_100 wow fadeInUp" data-wow-delay="0.3s" style={{ paddingBottom: '0px', visibility: 'visible', animationDelay: '0.3s' }}>
          <div className="page-padding">
            <div className="container sixreasonscontainer">
              <div className="padding-vertical padding-xhuge">
                <div className="row">
                  <div className="col-md-6 layout353_content-left">
                    <div>
                      <h2 className="heading-xxlarge sixreasonstitle">6 reasons to choose Partnership Firm</h2>
                      <p className="text-size-large sixreasonspara">Here are the major reasons why people prefer Partnership Firm:</p>
                      <div className="core-values-graphic-wrapper">
                        <img className="core-values-image imglayout353" src="https://www.bizpole.in/images/step/thump.png" alt="Clipart bizpole" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  layout353_content-right">
                    <div className="layout353_content-item content-item-1 sticky">
                      <div className="text-size-large sixreasonsnum text-weight-bold text-color-accent">01</div>
                      <div>
                        <h5>Minimum Compliance</h5>
                      </div>
                    </div>
                    <div className="layout353_content-item content-item-2 sticky">
                      <div className="text-size-large sixreasonsnum text-weight-bold text-color-accent">02</div>
                      <div>
                        <h5>Simple To Begin</h5>
                      </div>
                    </div>
                    <div className="layout353_content-item content-item-3 sticky">
                      <div className="text-size-large sixreasonsnum text-weight-bold text-color-accent">03</div>
                      <div>
                        <h5>Comparatively Economical</h5>
                      </div>
                    </div>
                    <div className="layout353_content-item content-item-4 sticky">
                      <div className="text-size-large sixreasonsnum text-weight-bold text-color-accent">04</div>
                      <div>
                        <h5>Shared Decision Making</h5>
                      </div>
                    </div>
                    <div className="layout353_content-item content-item-5 sticky">
                      <div className="text-size-large sixreasonsnum text-weight-bold text-color-accent">05</div>
                      <div>
                        <h5>Various Financial Returns to the Partners</h5>
                      </div>
                    </div>
                    <div className="layout353_content-item content-item-6 sticky">
                      <div className="text-size-large sixreasonsnum text-weight-bold text-color-accent">06</div>
                      <div>
                        <h5>Audit Not Required (if total turnover is below ₹1 Crore as per guidelines)</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 6 reasons End */}

      {/* Criteria Start */}
      <div className="criteria">
        <div className="container criteriacontainer">
          <div className="head_sec ">
            <div className="row align-items-center">
              <div className="col-lg-10 col-sm-12 ">
                <h2 className="criteriatitle">Partnership Firm Registration<br /> made easy!</h2>
                <li className="criteriapara">Here’s everything you need to know:</li>
              </div>
            </div>
          </div>

          <ul className="nav  nav-tabs criteriatabs me-auto" role="tablist">
            <li className="nav-item">
              <button className={`nav-link criteriabtn ${activeTab === 'tabs-1' ? 'active' : ''}`} onClick={() => handleTabClick('tabs-1')} role="tab">Eligibility Criteria</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link criteriabtn ${activeTab === 'tabs-2' ? 'active' : ''}`} onClick={() => handleTabClick('tabs-2')} role="tab">Documents Required</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link criteriabtn ${activeTab === 'tabs-3' ? 'active' : ''}`} onClick={() => handleTabClick('tabs-3')} role="tab">Process</button>
            </li>
          </ul>

          <div className="tab-content">
            <div className={`tab-pane ${activeTab === 'tabs-1' ? 'active' : ''}`} id="tabs-1" role="tabpanel">
              <div className="round_box criteriabox ms-auto bg-white">
              <li className="p_rel">✔ Maximum partners is 20</li>
                <li className="p_rel">✔ Address Proof for Registered office of the Partnership Firm in India</li>
                <li className="p_rel">✔ Original Deed signed by all Partners</li>
              </div>
            </div>
            <div className={`tab-pane ${activeTab === 'tabs-2' ? 'active' : ''}`} id="tabs-2" role="tabpanel">
              <div className="bg-white criteriabox">
              <li><b>You would need scanned copies of:</b></li>
                <li className="p_rel">✔ Application for registration of partnership</li>
                <li className="p_rel">✔ Certified original copy of partnership deed</li>
                <li className="p_rel">✔ Specimen of an affidavit certifying that all the details mentioned in the partnership deed and documents are correct</li>
                <li className="p_rel">✔ PAN card and address proof of the partners</li>
                <li className="p_rel">✔ Proof of principal place of business of the firm</li>
              </div>
            </div>
            <div className={`tab-pane ${activeTab === 'tabs-3' ? 'active' : ''}`} id="tabs-3" role="tabpanel">
              <div className="steps criteriabox bg-white">
                <div className="step ">
                  <div >
                    <li><b>Step 1:</b> Collection of Partners and reg office docs</li>
                    <li><b>Step 2:</b> Draft Partnership Deed</li>
                    <li><b>Step 3:</b> Registering deed with Government</li>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Criteria End */}

      {/* Clients Reviews Start */}

      <div className="clientsreviewouterdiv">
        <div className="clientheadingplc container">
          <h1 className="clientheadingplcinneplc mb-5">Trusted by startups, small businesses,
            and Fortune 1000 companies</h1>
        </div>

        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card mb-3" id="tcardplc">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={testimonial.pic} className="testimonialimgplc card-img" alt={testimonial.name} />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body" id="tcardplcbodyplc">
                              <h5 className="card-title">{testimonial.name}</h5>
                              <p className="card-text">{testimonial.review}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {index + 1 < testimonials.length && (
                      <div className="col-md-6">
                        <div className="card mb-3" id="tcardplc">
                          <div className="row g-0">
                            <div className="col-md-4">
                              <img src={testimonials[index + 1].pic} className="testimonialimgplc card-img" alt={testimonials[index + 1].name} />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body" id="tcardplcbodyplc">
                                <h5 className="card-title">{testimonials[index + 1].name}</h5>
                                <p className="card-text">{testimonials[index + 1].review}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon black-carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Clients Reviews End */}

      {/* Company regn banner start*/}
      <div className="regn_company">
  <div className="container company_reg">
    <section className="trust_reg_location ">
      <div className="row location-row">
        <div className="col-md-4">
          <ul className="list-unstyled ">
            
            <li> <a className="btn btn-link trust_reg_locationplca text-center" href="">Partnership Firm Registration</a></li>
          </ul>
        </div>
          </div>
        </section>
      </div>
    </div>
      {/* Company regn banner end*/}
      
      {/* Get in touch start */}
            <div className="touch">
              <div className="contents">
                <h1>Let our expert assist you right now</h1>
                <p>Get immediate answers by chatting with one of our incorporation agents</p>
                <a><button className="intouchbtn">Get in touch</button></a>
              </div>
            </div>

      {/* Get in touch end */}

    </div>
  )
}

export default Partnershipfirm;