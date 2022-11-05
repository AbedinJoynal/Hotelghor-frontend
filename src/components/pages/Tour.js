import React from 'react';
import '../../styles/Tour.scss';
import BookWidget from '../booking/BookWidget';
const Tour = () => {
    return (
        <div className="Tour">
            <header
                className="header-main"
                style={{
                    background:
                        ' no-repeat center/cover url("/img/tours/tour_header.jpg")',
                }}
            >
                <div className="header-content">
                    <h2 className="alt-font">Tours & Activities</h2>
                    <p>Explore all of our tours and activities here</p>
                </div>

                <BookWidget />
            </header>
            <section className="desc">
                <h1 className="alt-font">View all of our tours</h1>
                <p>
                    Explore evrything Chittagong has to offer while staying at
                    our resort. From it's pristine nature, breathtaking nature,
                    uniquie cuisine, and friendly locals, Chittagong has someone
                    special for everybody.
                </p>
            </section>
            <section className="desc_main">
                <article className="descLeft">
                    <div className="bg-light"></div>
                    <h1 className="alt-font">ICONIC SCENARY</h1>
                    <p>
                        This monument is one of the most beautiful that
                        Chittagong has to offer.Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Sed quam earum modi
                        expedita soluta ratione iste dolorem itaque hic ad
                        reprehenderit quae optio, explicabo cupiditate ipsa
                        obcaecati rerum quibusdam repudiandae.
                    </p>
                    <h2>DAILY VISITS</h2>
                </article>
                <div className="descRight">
                    <img src="/img/tours/tour_main.jpg" alt="tour_main" />
                </div>
            </section>
            <section className="desc_sec">
                <div className="img-container">
                    <img src="/img/tours/tour_market.jpg" alt="markets" />
                </div>
                <article>
                    <span></span>
                    <div>
                        <h1 className="alt-font">Explore the local markets</h1>
                        <p>
                            From epic Table Mountain hikes and awe-inspiring
                            adventures at sea, to enticing lands, Chittagong
                            offers an array of immersive experiences and
                            activities.
                        </p>
                    </div>
                    <span></span>
                </article>
            </section>
            <section className="desc_gallery">
                <div className="descLeft">
                    <h2 className="alt-font">Northern Side</h2>
                    <div className="img-container">
                        <img
                            className="lg-img"
                            src="/img/tours/tour_island.jpg"
                            alt="island_tour"
                        />
                    </div>
                </div>
                <div className="descRight">
                    <img
                        src="/img/tours/tour_island_01.jpg"
                        alt="island_tour_01"
                    />
                    <article>
                        <h2 className="alt-font">
                            Pristine Beaches and Waters
                        </h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Fuga aperiam minima rerum dolorem mollitia
                            hic, voluptates, veniam quis nemo eveniet ut modi
                            perferendis harum architecto soluta quo quam
                            provident corporis!
                        </p>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Tour;
