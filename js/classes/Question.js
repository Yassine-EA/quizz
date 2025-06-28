class Question {

  constructor(question, answers, correctAnswer, level, category, icon) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.level = level;
    this.category = category;
    this.icon = icon;
  }

  getQuestion() {
    return this.question;
  }

  setQuestion(question) {
    this.question = question;
  }

  getAnswers() {
    return this.answers;
  }

  setAnswers(answers) {
    this.answers = answers;
  }

  getCorrectAnswer() {
    return this.correctAnswer;
  }

  setCorrectAnswer(correctAnswer) {
    this.correctAnswer = correctAnswer;
  }

  getLevel() {
    return this.level;
  }

  setLevel(level) {
    this.level = level;
  }

  getCategory() {
    return this.category;
  }

  setCategory(category) {
    this.category = category;
  }

  getIcon() {
    return this.icon;
  }

  setIcon(icon) {
    this.icon = icon;
  }

}

export default Question;