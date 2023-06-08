import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

console.log(AlexaImage);
function App() {
    return (
        <div>
            <div>Personal Digital Assistants</div>

            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage}/>
            <ProfileCard title="Cortana" handle="@cortana12" image={CortanaImage}/>
            <ProfileCard title="Siri" handle="@siri32" image={SiriImage}/>
        </div>
    )
}

export default App;