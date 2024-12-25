import eileens from "./assets/comp/eileen.png";
import TabButton from "./assets/comp/TabButtons";
import { useState } from "react";
import { TEXT } from "./assets/comp/text";
import buy from "./assets/comp/buy.png";
import kick from "./assets/comp/kick.png";
import sunShine from "./assets/comp/sunShine1.png";
import stupid from "./assets/comp/boysStupid1.png";

function App() {
  const [selectedTopic, setSelectedButton] = useState();
  function handleSelect(selectedButton) {
    setSelectedButton(selectedButton);
  }
  return (
    <>
      <div className="contain">
        <img src={eileens} alt="" />
        <h2 className="h">Things she loves</h2>
        <div className="list-container">
          <TabButton
            onSelect={() => handleSelect("Color")}
            addClass={selectedTopic === "Color" ? "active" : undefined}
          >
            {"Color"}
          </TabButton>
          <TabButton
            onSelect={() => handleSelect("Game")}
            addClass={selectedTopic === "Game" ? "active" : undefined}
          >
            {"Game"}
          </TabButton>
          <TabButton
            onSelect={() => handleSelect("Food")}
            addClass={selectedTopic === "Food" ? "active" : undefined}
          >
            {"Food"}
          </TabButton>
          <TabButton
            onSelect={() => handleSelect("Drink")}
            addClass={selectedTopic === "Drink" ? "active" : undefined}
          >
            {"Drink"}
          </TabButton>
          <TabButton
            onSelect={() => handleSelect("Character")}
            addClass={selectedTopic === "Character" ? "active" : undefined}
          >
            {"Character"}
          </TabButton>
          <TabButton
            onSelect={() => handleSelect("Conclution")}
            addClass={selectedTopic === "Conclution" ? "active" : undefined}
          >
            {"Conclution"}
          </TabButton>
          <TabButton
            onSelect={() => handleSelect("Eva")}
            addClass={selectedTopic === "Eva" ? "active" : undefined}
          >
            {"Eva"}
          </TabButton>
        </div>
        <div className="topic">
          {!selectedTopic ? (
            <p>
              Click on any button you want no one can command you &lt;3
              &diams;click on the first one wla bf83 wjhk&diams;
            </p>
          ) : null}
          <p>{selectedTopic ? TEXT[selectedTopic].text : null}</p>
        </div>
        <h2>Things will make her happier</h2>
        <div className="love">
          <p className="p1">Normalizing hitting boys as a fun thing to do</p>
          <img className="img1" src={kick} alt="" />
        </div>
        <div className="love">
          <p className="p1">
            Buy her a brand new porche, why? just because she deserves it
          </p>
          <img className="img1" src={buy} alt="" />
        </div>
        <div className="love">
          <p className="p1">
            Normalizing burying boys or sending them to another planet 'i had to
            but it twice'
          </p>
          <img className="img1" src={stupid} alt="" />
        </div>
        <h2>Quick reminder</h2>
        <div className="love">
          <p className="p1">
            Go easy on your self, you are the reason the sun shines and the most
            beautiful girl on the world, you are so so so so cute&lt;3
          </p>
          <img className="img1" src={sunShine} alt="" />
        </div>
        <h2 className="h">The end</h2>
        <h2 className="h22">
          i know every beautiful thing must have an end but if there any thing
          that i wish for in this life is that you never have an end and that
          you stay in my life for ever, there is no one in this life like you,
          you are one of a kind, i wish you nothing but happiness and i promise
          that i will do any thing to see you smile and to hear your most
          precious and lovely laugh, there so much more that i want to tell you
          but we both know that i cant, remember at any time you feel down that
          im always hugging you and holding your hands.
        </h2>
        <h2 className="h2222">Quick note</h2>
        <h2 className="h222">
          i love your lovely voice so so so much, and i miss you
          mmmaaarrrrraaaaaahhh
        </h2>
      </div>
    </>
  );
}

export default App;
