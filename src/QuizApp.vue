<template>
  <div>
    <h1>This is a BEST quiz to test your knowledge</h1>
    <section class="flex flex-col gap-4 mb-8">
        <quiz-question
            v-for="question of questions"
            :key="question.id"
            :id="question.id"
            :statement="question.statement"
            :options="question.options"
            :answer="getAnswer(question.id)"
            @answer="text => setAnswer(question.id, text)"
        />
    </section>

    <h1 v-if="result !== null">
        <span v-if="result === 0">You didn't guess any answers! :(</span>
        <span v-else-if="result === 1">You guessed only {{ result }} answer!</span>
        <span v-else-if="result < questions.length">You guessed {{ result }} answers!</span>
        <span v-else>You guessed all the answers!! you are the master of BEST Quizes!</span>

        <button
            class="mt-8 w-full text-3xl"
            @click="restart"
        >
            Try again
        </button>
    </h1>

    <div v-else>
        <button
            class="text-3xl w-full"
            @click="submit"
        >
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

    created() {
        this.getAnswers()
    },

    methods: {
        async getAnswers() {
            const { data } = await api.get("/questions")
            this.questions = data
        },

        getAnswer(id) {
            return this.answers.find(an => an.id === id)?.text
        },

        restart() {
            this.result = null
            this.answers = []
            this.getAnswers()
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