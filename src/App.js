import ScholarBanner from "./component/scholarBanner/ScholarBanner";
import Header from "./component/header/Header";
import Advertise from "./component/advertise/Advertise";
import Placement from "./component/placement/Placement";
import Bootcamp from "./component/bootcamp/Bootcamp";
import Certificate from "./component/placement/certificate/Certificate";
// import Curriculam from "./component/curriculam/Curriculam";
// import Projects from "./component/projects/Projects";
import Tools from "./component/tools/Tools";
import Advantage from "./component/advantage/Advantage";
import Admission from "./component/admission/Admission";
import PricePlans from "./component/priceplans/PricePlans";
import FAQuestions from "./component/FAQuestions/FAQuestions";
import Media from "./component/media/Media";
import Question from "./component/gotAquestion/Question";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div>
      <ScholarBanner />
      <Header />
      <Advertise />
      <Placement />
      <Bootcamp />
      <Certificate />
      {/* <Curriculam /> */}
      {/* <Projects /> */}
      <Tools />
      <Advantage />
      <Admission />
      <PricePlans />
      <FAQuestions />
      <Media />
      <Question />
      <Footer />
    </div>
  );
}

export default App;
