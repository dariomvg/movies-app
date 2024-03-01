import SliderMovies from "@/components/SliderMovies";
import AllMovies from "@/components/AllMovies";
import "../styles/main.css";
import Footer from "@/components/Footer";

function Home() {
  return (
    <main className="section-main">
      <SliderMovies /> 
      <AllMovies />
      <Footer />
    </main>
  );
}
export default Home; 