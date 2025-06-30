"use client"
import CountUp from 'react-countup';

export default function Funfact() {
    return (
        // funfact-style-two
        <section className="funfact-style-two">
            <div className="auto-container">
                <div className="title-box">
                    <h6>Numbers&nbsp;speak&nbsp;for&nbsp;themselves</h6>
                    <div className="line"></div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-two">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <img src="/assets/images/icons/icon-21.png" alt="Client Assets Icon" />
                                </div>
                                <div className="count-outer count-box counted">
                                    <CountUp end={840} duration={1.5} separator="," className="count-text" />
                                    <span className="text">Billion</span>
                                </div>
                                <p>Client assets under advisement.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-two">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <img src="/assets/images/icons/icon-22.png" alt="Locations Icon" />
                                </div>
                                <div className="count-outer count-box counted">
                                    <CountUp end={93} duration={1.5} className="count-text" />
                                    <span className="text">Locations</span>
                                </div>
                                <p>Service with professional firm</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-two">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <img src="/assets/images/icons/icon-23.png" alt="Experience Icon" />
                                </div>
                                <div className="count-outer count-box counted">
                                    <CountUp end={40} duration={1.5} className="count-text" />
                                    <span className="text">Years</span>
                                </div>
                                <p>Experience in consulting field</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // funfact-style-two end
    );
}
