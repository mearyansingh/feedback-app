import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import { Container } from "react-bootstrap";
import "./index.css";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./Pages/AboutPage";
import AboutIconLink from "./Components/AboutIconLink";
import { FeedbackProvider } from "./Context/FeedbackContext";
import FeedbackStats from "./Components/Feedbackstats";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <div className="bg-light">
          <Header />
          <Container>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList
                    //  feedback={feedback}
                    //  handleDelete={(id) => deleteFeedback(id)}
                    />
                  </>
                }
              ></Route>
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Container>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
