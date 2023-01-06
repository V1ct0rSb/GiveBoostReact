import "../Home/style.css";

import { AiOutlineAim } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { IoMegaphoneSharp } from "react-icons/io5";
import { GrDocumentConfig } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { SiMicrostrategy } from "react-icons/si";
import { BsPaypal } from "react-icons/bs";
import { BiRocket } from "react-icons/bi";
import { FcIdea } from "react-icons/fc";

import React, { useEffect, useState, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import styled from "styled-components";

export const Bar = styled.div`
  height: 4px;
  width: ${(props) => props.width || "0px"};
  background-color: #d7047f;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: 1s;
`;

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 0 });
  }, []);

  const textRef = useRef(null);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    //função para ler as posiçoes atuais do scroll e calcular % de leitura
    function handleScroll() {
      //armazena o tamanho do componente onde a div(container-home) esta utilizando o hook de useRef
      const textHeight = textRef.current.offsetHeight;
      //armazena a posição do scroll na página
      const positionY = window.pageYOffset;
      //calcula a porcentagem do texto em que o leitor de encontra
      const pagePosition = (positionY * 120.5) / textHeight;
      //atualiza o barWidth para passar a propriedade ao componente
      setBarWidth(pagePosition);
    }
    //escuta o evento de scroll da janela e chama a função handleScroll quando isso acontece
    window.addEventListener("scroll", () => handleScroll());
  }, []);

  return (
    <div className="container-home" ref={textRef}>
      <section className="banner-section01">
        <div className="App">
          <Bar width={barWidth + "%"} />
        </div>
        <div className="info-section01">
          <h1 data-aos="fade-right">Sucess With Your Customers</h1>
          <p data-aos="fade-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            quibusdam quo fugiat illum. Cupiditate, minima? Tenetur nostrum
            magni aliquid nesciunt in saepe pariatur tempore eos, similique
            laborum autem voluptas! Ducimus.
          </p>
          <div class="button-info" data-aos="fade-right">
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

      <section id="successful">
        <div className="sucess-section02">
          <div className="intro-section02">
            <h4 data-aos="fade-up">SUCCESSFUL MARKETING</h4>
            <h2 data-aos="fade-up">
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

      <section id="socialMetrics">
        <div class="social-section03">
          <div className="intro-section03">
            <h4 data-aos="fade-right">SOCIAL METRICS</h4>
            <h2 data-aos="fade-right">
              Increase Your Website Traffic And Attract More Customers
              Organically
            </h2>
            <p data-aos="fade-right">
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

      <section id="princing">
        <div class="princing-section04">
          <div className="intro-section02">
            <h4 data-aos="fade-up">PRINCING PLANS</h4>
            <h2 data-aos="fade-up"> Our Pricing Packages</h2>
          </div>

          <div className="princing-cards" data-aos="fade-up">
            <div className="card-princing">
              <div className="icon-princing">
                <BiRocket size={50} />
              </div>
              <div className="title-pricing">
                <h3>Basic Pack</h3>
              </div>
              <div className="princing">
                <h3>
                  $49 <span>/MONTH</span>
                </h3>
              </div>

              <div className="info-princing">
                <ul>
                  <li>Strategy And Planning</li>
                  <li>24/7 Support Available</li>
                  <li>Home Consulting System</li>
                  <li>30-Day Analytics & Insights</li>
                  <li>Ultimate Features</li>
                </ul>
              </div>

              <button>
                <BsPaypal size={25} />
                <p>Pay With Paypal</p>
              </button>
            </div>

            <div className="card-princing" data-aos="fade-up">
              <div className="icon-princing">
                <FcIdea size={50} />
              </div>
              <div className="title-pricing">
                <h3>Medium Pack</h3>
              </div>
              <div className="princing">
                <h3>
                  $99 <span>/MONTH</span>
                </h3>
              </div>

              <div className="info-princing">
                <ul>
                  <li>Strategy And Planning</li>
                  <li>24/7 Support Available</li>
                  <li>Home Consulting System</li>
                  <li>30-Day Analytics & Insights</li>
                  <li>Ultimate Features</li>
                </ul>
              </div>

              <button>
                <BsPaypal size={25} />
                <p>Pay With Paypal</p>
              </button>
            </div>

            <div className="card-princing" data-aos="fade-up">
              <div className="icon-princing">
                <IoMegaphoneSharp size={50} />
              </div>
              <div className="title-pricing">
                <h3>Pro Pack</h3>
              </div>
              <div className="princing">
                <h3>
                  $129 <span>/MONTH</span>
                </h3>
              </div>

              <div className="info-princing">
                <ul>
                  <li>Strategy And Planning</li>
                  <li>24/7 Support Available</li>
                  <li>Home Consulting System</li>
                  <li>30-Day Analytics & Insights</li>
                  <li>Ultimate Features</li>
                </ul>
              </div>

              <button>
                <BsPaypal size={25} />
                <p>Pay With Paypal</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
