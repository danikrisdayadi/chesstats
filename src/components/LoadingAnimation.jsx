import "./LoadingAnimation.scss";

function LoadingAnimation() {
  return (
    <div class="animation-container">
      <h2>Calculating results...</h2>
      <div class="loading-logo">
        <div className="square-1"></div>
        <div className="square-2"> </div>
        <div className="square-3"></div>
      </div>
    </div>
  );
}

export default LoadingAnimation;
