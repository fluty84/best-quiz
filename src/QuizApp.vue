<template>
  <div>
    <h1>This is a BEST quiz to test your knowledge</h1>
    <quiz-question
        v-for="question of questions"
        :key="question.id"
        :id="question.id"
        :statement="question.statement"
        :options="question.options"
        :answer="getAnswer(question.id)"
        @answer="text => setAnswer(question.id, text)"
    />
    <h1 v-if="result">
        You guessed {{ result }} answers!
    </h1>
    <div v-else>
        <button @click="submit">
            Send answers
        </button>
    </div>
  </div>
</template>

<script>
import QuizQuestion from "./components/QuizQuestion.vue"
import axios from "axios"
const api = axios.create({
    baseURL: "http://localhost:3000/"
})
export default {
    components: {
        QuizQuestion,
    },

    data() {
        return {
            questions: [],
            answers: [],
            result: null,
        }
    },

    async created() {
        const { data } = await api.get("/questions")
        this.questions = data;
    },

    methods: {
        getAnswer(id) {
            return this.answers.find(an => an.id === id)?.text
        },

        setAnswer(id, text) {
            const index = this.answers.findIndex(an => an.id === id)
            if (index === -1) {
                this.answers.push({ id, text })
            } else {
                this.answers[index].text = text
            }
        },

        async submit() {
            const { data } = await api.post("/questions", this.answers)
            this.result = data
        }
    }
}
</script>

<style>

</style>