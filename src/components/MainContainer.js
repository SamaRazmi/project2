import React from 'react';

const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="right">
        <h2>Explore Different Types of Phones</h2>
        <p>
          The phone landscape has undergone a remarkable transformation,
          evolving from basic communication tools to versatile gadgets that play
          pivotal roles in our daily lives. A variety of phone types cater to
          diverse preferences, reflecting the dynamic nature of the industry.
        </p>
        <ul className="phone-list">
          <li>
            <strong>Smartphones:</strong> These pocket-sized wonders go beyond
            communication, integrating high-speed internet, advanced processors,
            and intuitive interfaces for multifunctional use.
          </li>
          <li>
            <strong>Foldable Phones:</strong> Breaking design barriers, these
            phones feature flexible displays that unfold to provide a larger
            screen, offering a unique blend of compactness and versatility.
          </li>
          <li>
            <strong>Candy Bar Phones:</strong> The classic rectangular design
            remains a staple, known for its simplicity and user-friendly
            features.
          </li>
          <li>
            <strong>Slider Phones:</strong> Featuring a sliding mechanism, these
            phones combine a compact form factor with an interactive sliding
            action.
          </li>
          <li>
            <strong>Clamshell Phones:</strong> Characterized by a folding
            design, these phones are compact when closed and open up to reveal
            the screen and keypad.
          </li>
          <li>
            <strong>World Phones:</strong> Engineered for global connectivity,
            these phones support multiple cellular technologies, ensuring
            seamless operation across different regions and networks.
          </li>
          <li>
            <strong>Feature Phones:</strong> Balancing functionality and
            simplicity, feature phones focus on core communication features
            without the complexities of smartphones.
          </li>
          <li>
            <strong>Camera Phones:</strong> Designed for photography
            enthusiasts, these phones boast high-resolution sensors, multiple
            lenses, and advanced image processing.
          </li>
          <li>
            <strong>Business Phones:</strong> Tailored for productivity,
            business phones often come with enhanced security features,
            productivity apps, and seamless integration with business software.
          </li>
          <li>
            <strong>Gaming Phones:</strong> Catering to gaming enthusiasts,
            these phones feature powerful processors, high-refresh-rate
            displays, and dedicated gaming features for an immersive gaming
            experience.
          </li>
        </ul>
        <p>
          This diverse array of phones showcases the industry's commitment to
          innovation, providing options that cater to a wide spectrum of user
          needs.
        </p>
      </div>
      <div className="left">
        <img
          src="https://www.iab.com/wp-content/uploads/2016/10/expected_new_trends_at_mobile_world_congress_2012_ynie2.jpg"
          alt="mobile-world"
        />
      </div>
    </div>
  );
};

export default MainContainer;
