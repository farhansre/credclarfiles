import SearchBar from './SearchBar';
import CreditCard from './CreditCard';
import React, { useState } from 'react';
import "./App.css";
import logo from "./images/venture.jpeg"
import VentureOne from "./images/VentureOne.jpeg"
import platinum from "./images/platinum.jpeg"
import savor from "./images/savor.jpeg"
import quickSilver from "./images/quickSilver.jpeg"

const MainComponent = () => {
    // Create instances of CreditCard with different attributes
    const creditCards = [
        new CreditCard("Venture X", "Earn unlimited 10X miles on hotels and rental cars booked through Capital One Travel and 5X miles on flights booked through Capital One Travel, plus unlimited 2X miles on all other purchases", "$395", "19.99% - 29.99% variable APR", "19.99% - 29.99% variable APR; Balance transfer fee applies.", logo,"https://www.capitalone.com/credit-cards/lp/venture-x/lp1/?external_id=WWW_XXXXX_ZZZ_ONL-SE_ZZZZZ_T_SEM2_ZZZZ_c_Zg_0b0b30b0-beb1-40a3-8765-06796368daad_687052895475_779581&target_id=kwd-1430848566710&oC=CO5ed2SUs1&gad_source=1&gclid=Cj0KCQjw3ZayBhDRARIsAPWzx8qukKk_CKeuwBtWhiiwrJLGr5PLWrjJYsTG1YOdGDuwoJb71uW7v78aAtkZEALw_wcB" ),
        new CreditCard("Quicksilver", "1.5% cashback on every purchase", "$0", "0% APR for 15 months 20-30% variable APR after that", "0% intro APR for 15 months; 19.99% - 29.99% variable APR after that; Balance transfer fee applies.", quickSilver,"https://www.capitalone.com/credit-cards/cash-back/quicksilver/?external_id=WWW_XXXXX_ZZZ_ONL-SE_ZZZZZ_T_SEM2_ZZZZ_c_Zg_0b0b30b0-beb1-40a3-8765-06796368daad_672112729130_666946&target_id=kwd-55608482232&oC=CO5ed2SUs1&gad_source=1&gclid=Cj0KCQjw3ZayBhDRARIsAPWzx8rMe00zsA31V_GnQqmvetteW412QeRH_QjJXBBE_w8XHDaIbErrfJ4aAnYlEALw_wcB"),
        new CreditCard("Savor", "4% cashback on dining,entertainment,streaming, 3% at grocery stores, 1% others", "$95", "29.99% variable APR, balance transfer fee applies", "19.99% - 29.99% variable APR; Balance transfer fee applies.", savor,"https://www.capitalone.com/credit-cards/savor-dining-rewards/?slflag=sitelink&external_id=WWW_XXXXX_ZZZ_ONL-SE_ZZZZZ_T_SEM2_ZZZZ_c_Zg_00557029-c4f6-4b64-a488-3cd2166ff479_687052912458_777686&target_id=aud-374367914346:kwd-387008138590&oC=CO5ed2SUs1&gad_source=1&gclid=Cj0KCQjw3ZayBhDRARIsAPWzx8pb-7dqx1W0JaHt-NgiYkYfNikJ7YCtqm6GZgJiYgebaJJ5z6ze6uAaAlWSEALw_wcB"),
        new CreditCard("Venture One Reward", "Earn unlimited 1.25 miles per dollar on every purchase. Earn unlimited 5 miles per dollar on hotels and rental cars booked through Capital One Travel", "$0","0% intro APR for 15 months; 19.99% - 29.99% variable APR after that","29.99% variable APR; Balance transfer fee applies.", VentureOne,"https://www.capitalone.com/credit-cards/ventureone/"),
        // Add more credit cards as needed
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCards, setFilteredCards] = useState(creditCards);

    // Handle search logic
    const handleSearch = (term) => {
        setSearchTerm(term);
        const filteredResults = creditCards.filter(card => {
            // Perform search based on card names
            return card.getcardName().toLowerCase().includes(term.toLowerCase());
        });
        setFilteredCards(filteredResults);
    };

    return (
      <div>
        {/* HEADER */}
        <div className="header">
            <p>Credit Clarity</p>
        </div>
        {/* Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* SearchBar component */}
          <div style={{ marginBottom: '20px', marginTop: '2%' }}>
              <SearchBar handleSearch={handleSearch} />
          </div>

          {/* Display filtered credit cards */}
          <ul>
              {filteredCards.map((card, index) => (
                  <div key={index}>
                      <div className="card">
                      <img src={card.getimageURL()} className="card-img-top" alt="Card image" />

                          <div className="card-body">
                              <h5 className="card-title">{card.getcardName()}</h5>
                              <p className="card-text">CARD NAME: {card.getcardName()}</p>
                              <p className="card-text">REWARDS: {card.getRewards()}</p>
                              <p className="card-text">ANNUAL FEE: {card.getannualFee()}</p>
                              <p className="card-text">PURCHASE RATE: {card.getPurchaseRate()}</p>
                              <p className="card-text">TRANSFER INFO: {card.getTransferInfo()}</p>
                              <a href={card.website} target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Go to Website</button>
                             </a>
                          </div>
                      </div>
                  </div>
              ))}
          </ul>
        </div>
      </div>
    );
};

export default MainComponent;
