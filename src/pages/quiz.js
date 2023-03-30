import { useState, useEffect } from "react";
import { Navbar } from "../components/navbar";
import { Question } from "../components/question";
import { getQuestions } from "../api";

export function Quiz() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState([]);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const data = await getQuestions();
      const questions = Array.from(data.results);
      setQuestions(questions);
      const question = questions[0];
      setQuestion(question);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [question.incorrect_answer]);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-[90vh]">
        <Question question={question} />
      </div>
    </>
  );
}
