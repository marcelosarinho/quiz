export async function getQuestions() {
  try {
    const data = await fetch(
      "https://opentdb.com/api.php?amount=8&category=15&type=multiple"
    );
    return await data.json();
  } catch (error) {
    console.log("Erro: ", error);
  }
}
