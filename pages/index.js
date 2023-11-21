
import AnalysysTextView from "../Components/AnalysysTextView";
import AnalysysView from "../Components/AnalysysView";
import VisionView from "../Components/visionView";

function Home() {
  
  
  return (
    <section className='mainBody'> 
        <div className="ImageView">
          <VisionView />
        </div>
        <div className="AnalysysView">
          <AnalysysView />
          <AnalysysTextView />
        </div>
    </section>
  );
}

export default Home;
