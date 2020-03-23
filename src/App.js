import React, { useState } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { toast } from 'react-toastify';
import Questions from "./components/questions";
import QuestionModal from "./components/question-modal";
import Add from './add.svg';
import 'react-toastify/dist/ReactToastify.css';
import "./App.scss";

toast.configure();
const client = new ApolloClient({
  uri: "https://api.8base.com/ck6m2ho5i000208joe6lw4bpf"
});

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header>
          <div>Witcher Quizapp</div>
        </header>
        <Questions />
        <button className="add-question" onClick={_ => setModalOpen(true)}>
          <img src={Add} alt="Click to create a new question" />
        </button>
        <QuestionModal
          isOpen={modalOpen}
          closeModal={closeModal}
        />
      </div>
    </ApolloProvider>
  );
}
export default App;