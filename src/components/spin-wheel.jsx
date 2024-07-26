export default function SpinWheel() {
  return (
    <div id="wrapper">
      <div id="wheel">
        <div id="inner-wheel">
          <div className="sec">
            <span className="fa fa-bell-o"></span>
          </div>
          <div className="sec">
            <span className="fa fa-comment-o"></span>
          </div>
          <div className="sec">
            <span className="fa">
              <img src="/home.svg" className="w-[50px] h-[50px]" alt="home" />
            </span>
          </div>
          <div className="sec">
            <span className="fa fa-heart-o"></span>
          </div>
          <div className="sec">
            <span className="fa fa-star-o"></span>
          </div>
          <div className="sec">
            <span className="fa fa-lightbulb-o"></span>
          </div>
        </div>

        <div id="spin">
          <div id="inner-spin"></div>
        </div>
      </div>

      <div id="txt"></div>
    </div>
  );
}
