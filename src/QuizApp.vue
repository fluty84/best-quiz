<template>
  <div>
    <h1>This is a BEST quiz to test your knowledge</h1>
    <p class="p-3 bg-yellow-100 dark:bg-yellow-800 mt-5 outline-dashed outline-yellow-700 text-sm leading-6">
        <span class="rounded-full text-white bg-yellow-700 inline-flex items-center justify-center font-serif text-xs w-4 h-4">i</span>
        Select the answers you think are the right ones and then send them to check if you got them right.
    </p>
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
        <p
            v-if="result === 0"
            class="text-center"
        >
            You didn't guess any answers! :(
        </p>
        <p
            v-else-if="result === 1"
            class="text-center"
        >
            You guessed only {{ result }} answer!
        </p>
        <p
            v-else-if="result < questions.length"
            class="text-center"
        >
            You guessed {{ result }} answers!
        </p>
        <p
            v-else
            class="text-center"
        >
            You guessed all the answers!! you are the master of BEST Quizes!
        </p>

        <button
            class="mt-8 w-full text-3xl"
            @click="restart"
        >
            Try again
        </button>
    </h1>

    <div v-else>
        <button
            class="text-xl w-full"
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
    baseURL: "http://192.168.1.181:3000/"
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
            window.scrollTo(0, 0)
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