const NewsGrid = (): JSX.Element => (
  <div className="section__news__grid">
    <div className="section__news__grid__tweet">
      <img
        className="section__news__grid__tweet__img"
        src="/assets/img/tweet-conference-image.jpg"
        alt="Play! Summit conference"
      />
      <div className="section__news__grid__tweet__content">
        <div className="section__news__grid__tweet__content__profile">
          <img
            className="section__news__grid__tweet__content__profile__pic"
            src="/assets/img/tweet-profile-pic.jpg"
            alt="Profile pic"
          />
          <div className="section__news__grid__tweet__content__profile__content">
            <p>John Doe - @jdoe</p>
            <p>2h ago</p>
          </div>
        </div>
        <p className="section__news__grid__tweet__content__tweet">
          Hyped for this year&apos;s edition of Play! Summit
        </p>
        <p className="section__news__grid__tweet__content__link">#play! #sports</p>
        <p className="section__news__grid__tweet__content__comments">View all 50 comments</p>
      </div>
    </div>
    <div className="section__news__grid__news">
      <div className="grid grid-cols-2 gap-2.5 h-full">
        <a className="section__news__grid__news__item" href="#">
          PLAY! Summit Goes Live
        </a>
        <a className="section__news__grid__news__item" href="#">
          Momentum to premiere new fitness app at PLAY! Summit
        </a>
        <a className="section__news__grid__news__item" href="#">
          Jacob Gonzalez announced as latest speaker at PLAY! Summit
        </a>
        <a className="section__news__grid__news__item" href="#">
          Organizers expect record attendance at PLAY! Summit
        </a>
      </div>
    </div>
  </div>
);

export default NewsGrid;
