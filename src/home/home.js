
import './home.css'
import image from '../Assets/card.avif'
import profile from '../Assets/girl.avif'

export function Home() {
    const GridData = [
        {
          GridDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
          GridImg: { profile },
          GridName: "Gladis Lennon",
          GridPos: "Head of SEO",
        },
        {
          GridDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.",
          GridImg: { profile },
          GridName: "Gladis Lennon",
          GridPos: "Head of SEO",
        },
        {
          GridDesc:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.",
          GridImg: { profile },
          GridName: "Gladis Lennon",
          GridPos: "Head of SEO",
        },
        {
          GridDesc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.",
          GridImg: { profile },
          GridName: "Gladis Lennon",
          GridPos: "Head of SEO",
        },
        {
          GridDesc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.",
          GridImg: { profile },
          GridName: "Gladis Lennon",
          GridPos: "Head of SEO",
        },
        {
          GridDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
          GridImg: { profile },
          GridName: "Gladis Lennon",
          GridPos: "Head of SEO",
        },
      ];
    return (<>
        <section className="hero_img">

            <div className="info_sec">
                <h1>Let us find your <h1 className='h_red'>Forever Food.</h1></h1>
                <p style={{ color: '#FFF' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                <div className="button_sec">
                    <button
                        style={{ borderRadius: '4px', backgroundColor: '#e11d48', color: '#FFF', padding: '15px 3rem', border: 'none' }} className='for-btn'>Search Now</button>

                    <button style={{ borderRadius: '4px', backgroundColor: 'rgba(2, 27, 107, 0.723)', color: '#fff', padding: '15px 3rem', border: '1px' }} className='for-btn'>Know More</button>
                </div>
            </div>
        </section>

        <div className='second-part'>
            <img src={image} alt="" id="home-img" />
            <div className='positioning'>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1><br />
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p><br />
                <button id='get-in-touch-btn'>Get in Touch</button>
            </div>
        </div>

        <div className="Grid_Card_sec">
          <div className="Grid_all_card">
            {GridData.map((elem, index) => {
              return (
                <div className="Grid_sec" key={index}>
                  <div className="Grid_para">
                    <p>{elem.GridDesc}</p>
                  </div>
                  <div className="down">
                    <span className="Grid_girl">
                      <img src={elem.GridImg.profile} alt="#" />
                    </span>
                    <div className="down_text">
                      <p>{elem.GridName}</p>
                      <p className="second_para">{elem.GridPos}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </>
    )
    }