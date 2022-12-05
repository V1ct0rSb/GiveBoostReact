import "../Home/style.css";

export default function Home() {
  return (
    <div className="container-home">
      <section className="banner-section01">
        <div className="info-section01">
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

        <div class="img-section01">
          <img
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="banner-img"
          />
        </div>
      </section>
    </div>
  );
}
