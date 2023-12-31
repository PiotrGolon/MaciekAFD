import MaciekAFD from "../assets/MaciekAFD.jpg";
import lista from "../assets/lista.png";
import Osiągi from "../assets/Osiągi.png";

export default function HomePage() {
  return (
    <main id="home-page">
      <h2>Moja misja: Twój sukces!</h2>
      <section>
        <img src={MaciekAFD} alt="MaciekAFD" />
        <div>
          <h3>Jak działam?</h3>
          <p>
          Oferuję specjalistyczne plany treningowe skoncentrowane na 
          konkretnych dyscyplinach sportów walki takich jak boks,
          judo, zapasy, MMA, taekwon-do i BJJ.
          </p>
        </div>
      </section>

      <section>
        <img src={lista} alt="A list of sessions" />
        <div>
          <h3>Co mogę zaoferować?</h3>
          <p>
          Oferuję specjalistyczne plany treningowe skoncentrowane na 
          konkretnych dyscyplinach sportów walki takich jak boks, 
          judo, zapasy, MMA, taekwon-do i BJJ.
          </p>
        </div>
      </section>
      <section>
        <img src={Osiągi} alt="A certificate" />
        <div>
          <h3>Co dostajesz w zamian?</h3>
          <p>
          Gwarantuję, że moje programy treningowe przyniosą Ci realne efekty,
           co sprawi, że każda zainwestowana w nie chwila i środki 
           okażą się wartościową inwestycją w Twoją sportową przyszłość.
          </p>
        </div>
      </section>
    </main>
  );
}
