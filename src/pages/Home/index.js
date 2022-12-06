import "../Home/style.css";

import { AiOutlineAim } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { IoMegaphoneSharp } from "react-icons/io5";
import { GrDocumentConfig } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { SiMicrostrategy } from "react-icons/si";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container-home">
      <section className="banner-section01">
        <div data-aos="fade-right" className="info-section01">
          <h1>Sucess With Your Customers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            quibusdam quo fugiat illum. Cupiditate, minima? Tenetur nostrum
            magni aliquid nesciunt in saepe pariatur tempore eos, similique
            laborum autem voluptas! Ducimus.
          </p>
          <div class="button-info">
            <button>Get Started</button>
          </div>
        </div>

        <div data-aos="fade-left" class="img-section01">
          <img
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="banner-img"
          />
        </div>
      </section>

      <section>
        <div className="sucess-section02" id="successful">
          <div data-aos="fade-up" className="intro-section02">
            <h4>SUCCESSFUL MARKETING</h4>
            <h2>
              Solid Content Marketing & Content Strategy Is What Sets You Ahead
              Of Your Competitors
            </h2>
          </div>

          <div class="container-section02">
            <div className="cards-section02">
              <div data-aos="fade-up" class="card-section02">
                <div className="icon-card">
                  <AiOutlineAim size={50} />
                </div>
                <div className="tittle-card">Pay Per Click Management</div>
                <div className="contents-card">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
                </div>
                <div class="button-card">
                  <a href="/">Read More</a>
                </div>
              </div>

              <div data-aos="fade-up" class="card-section02">
                <div className="icon-card">
                  <AiFillClockCircle size={50} />
                </div>
                <div className="tittle-card">Search Engine Optimization</div>
                <div className="contents-card">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
                </div>
                <div class="button-card">
                  <a href="/">Read More</a>
                </div>
              </div>

              <div data-aos="fade-up" class="card-section02">
                <div className="icon-card">
                  <IoMegaphoneSharp size={50} />
                </div>
                <div className="tittle-card">Social Media Strategy</div>
                <div className="contents-card">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
                </div>
                <div class="button-card">
                  <a href="/">Read More</a>
                </div>
              </div>

              <div data-aos="fade-up" class="card-section02">
                <div className="icon-card">
                  <GrDocumentConfig size={50} />
                </div>
                <div className="tittle-card">Inbound Marketing</div>
                <div className="contents-card">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
                </div>
                <div class="button-card">
                  <a href="/">Read More</a>
                </div>
              </div>

              <div data-aos="fade-up" class="card-section02">
                <div className="icon-card">
                  <HiOutlineMail size={50} />
                </div>
                <div className="tittle-card">Email Marketing</div>
                <div className="contents-card">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
                </div>
                <div class="button-card">
                  <a href="/">Read More</a>
                </div>
              </div>

              <div data-aos="fade-up" class="card-section02">
                <div className="icon-card">
                  <SiMicrostrategy size={50} />
                </div>
                <div className="tittle-card">Seo Strategy</div>
                <div className="contents-card">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
                </div>
                <div class="button-card">
                  <a href="/">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bar-info">
          <div className="info" data-aos="fade-up">
            <h3>8X</h3>
            <p>INCREASE IN SEARCH TRAFFIC</p>
          </div>
          <div className="info" data-aos="fade-up">
            <h3>385%</h3>
            <p>INCREASE IN MOBILE VISITS</p>
          </div>
          <div className="info" data-aos="fade-up">
            <h3>78%</h3>
            <p>INCREASE IN PAGEVIEWS</p>
          </div>
          <div className="info" data-aos="fade-up">
            <h3>10</h3>
            <p>YEARS OF EXPERIENCE</p>
          </div>
        </div>
      </section>

      <section>
        <div class="social-section03" id="socialMetrics">
          <div className="intro-section03" data-aos="fade-right">
            <h4>SOCIAL METRICS</h4>
            <h2>
              Increase Your Website Traffic And Attract More Customers
              Organically
            </h2>
            <p>
              Facilisis leo vel fringilla est ullamcorper. Posuere urna nec
              tincidunt praesent semper feugiat nibh sed. Non pulvinar neque
              laoreet suspendisse interdum consectetur libero id. Ac turpis
              egestas maecenas pharetra convallis posuere morbi. Auctor urna
              nunc id cursus metus aliquam eleifend. Etiam tempor orci eu
              lobortis. Justo laoreet sit amet cursus sit. Quisque non tellu
              orci ac auctor augue mauris augue neque.
            </p>
          </div>

          <div className="img-section03" data-aos="fade-up">
            <img
              src="https://images.pexels.com/photos/7947707/pexels-photo-7947707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img-metrics"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
