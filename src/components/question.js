export function Question(props) {
  const { question } = props;
  const count = 0;

  return (
    <div className="w-175 h-96 bg-periwinkle-crayola rounded-lg overflow-hidden p-3">
      <div className="bg-lavender-floral p-3 rounded-lg mb-5">
        <h2 className="text-lotion text-xl font-bold">
          {count + 1}. {question.question}
        </h2>
      </div>
      <div className="w-auto bg-lotion mb-3 p-4 rounded-lg font-bold text-cool-black hover:bg-blue-crayola hover:text-lotion hover:cursor-pointer">
        {console.log(question.incorrect_answers)}
      </div>
      <div className="w-auto bg-lotion mb-3 p-4 rounded-lg font-bold text-cool-black hover:bg-blue-crayola hover:text-lotion hover:cursor-pointer"></div>
      <div className="w-auto bg-lotion mb-3 p-4 rounded-lg font-bold text-cool-black hover:bg-blue-crayola hover:text-lotion hover:cursor-pointer"></div>
      <div className="w-auto bg-lotion mb-3 p-4 rounded-lg font-bold text-cool-black hover:bg-blue-crayola hover:text-lotion hover:cursor-pointer"></div>
    </div>
  );
}
