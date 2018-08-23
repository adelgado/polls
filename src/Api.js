const API_URL = 'https://polls.apiblueprint.org';

export default {
  async getQuestions() {
    const response = await fetch(API_URL + '/questions');
    if (response.ok) {
      return await response.json();
    } else {
      return [];
    }
  },

  // These still need to be implemented

  async createQuestion() {},

  async vote(questionId, choiceId) {}
};
