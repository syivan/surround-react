import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <section className="about-main-header">
        <h2>The Custom Background Mixer For You</h2>
      </section>
      <section className="purpose-declaration">
        <section className="statement">
          <p>
            I put together the Sound Ambience for those who enjoy their day and
            routine with the presence of ambient music. It was initially a
            single purpose project, but I have come across family and friends
            who also listen to background ambience to focus and drown out
            distraction. This is for me, for them, to design their environmental
            ambience how they want it.
          </p>
        </section>
        <section className="profile-image">
          <img
            src={require(`./..//static/img/i.png`)}
            className="circular"
          ></img>
        </section>
      </section>

      <p>
        Credits to the following people who granted me licensed use of their
        images and recorded audio:
      </p>
      <ul></ul>
    </React.Fragment>
  );
};

export default About;
