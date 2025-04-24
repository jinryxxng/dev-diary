import './App.css';
import ProfileCard from './components/ProfileCard';
import profileImg from './assets/images/opps.jpg';

function App() {
  return (
    <div className="main-container">
      <h1 className="title">🫠 김진령의 리액트 🫠</h1>

      <ProfileCard
        image={profileImg}
        name="김진령"
        description="따라가기 힘들ㄷr💦"
      />

      <div className="link-area">
        <a
          className="link-button"
          href="https://mike-lemon.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          🎤마이크
        </a>
        <a
          className="link-button"
          href="https://trend-mu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔥트렌드
        </a>
        <a
          className="link-button"
          href="https://bear-jinryxxngs-projects.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          🧸곰돌이
        </a>
        <a
          className="link-button"
          href="https://travel-two-jade-39.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          ✈️여행행
        </a>
        <a
          className="link-button"
          href="https://apple-beta-sepia.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          🍎 사과
        </a>
        <a
          className="link-button"
          href="https://0423-smfd-nj21288zx-jinryxxngs-projects.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          📄 프론드엔드개발자지원서
        </a>
      </div>
    </div>
  );
}

export default App;
