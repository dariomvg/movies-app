import SliderMovies from "@/components/SliderMovies";
import AllMovies from "@/components/AllMovies";
import "./main.css";

function Home() {
  return (
    <main className="section-main">
      <SliderMovies /> 
      <AllMovies />
    </main>
  );
}
export default Home; 