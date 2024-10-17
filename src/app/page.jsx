import SectionLanding from "@/components/SectionLanding";
import SectionMovies from "@/components/SectionMovies";
import "./main.css";

function Home() {
  return (
    <main className="section-main">
      <SectionLanding /> 
      <SectionMovies />
    </main>
  );
}
export default Home; 