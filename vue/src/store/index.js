import { createStore } from "vuex";
import axiosClient from "../axios";
const tmpSurveys = [
    {
        id:100,
        title: "Laravel Vue Tailwind demo",
        slug: "Laravel-Vue-Tailwind-demo",
        status: "draft",
        image: "https://picsum.photos/200",
        description:
        "My name is Raimonds. Currently I am learning about PHP and Laravel.",
        crated_at: "last week",
        updated_at:"ever day",
        expire_date: "probably never",
        questions: [
            {
                id: 1,
                type: "select",
                question: "From which country are you?",
                description:null,
                data: {
                    options: [
                        {
                            uuid: "bb45dd9d-cd2b-4990-a299-92244c7b7d24",
                            text: "USA"
                        },
                        {
                            uuid: "6c00383a-dd96-4421-9865-5912b28a91aa",
                            text: "Latvia"
                        },
                        {
                            uuid: "4683f471-c01a-4c04-8324-ae1e994d296a",
                            text: "Germany"
                        },
                        {
                            uuid: "c8e6a459-b2e5-491e-ad43-8fe6d6d251f3",
                            text: "India"
                        },
                        {
                            uuid: "6aa21e58-33c1-4428-8d75-5078622c92ec",
                            text: "Poland"
                        },
                    ],
                },
                
            },

            {
                id: 2,
                type: "checkbox",
                question: "Which programming language do you prefer?",
                description:null,
                data: {
                    options: [
                        {
                            uuid: "baa49bde-a1b7-49c3-adb2-661a296b8f4f",
                            text: "Javasript"
                        },
                        {
                            uuid: "6639bf22-04ff-476c-9be4-0ff277ddcb93",
                            text: "PHP"
                        },
                        {
                            uuid: "698a62ed-e181-4ceb-93fb-0d9cb9fd4ee6",
                            text: "Python"
                        },
                        {
                            uuid: "54f1110d-d7ee-44c8-ad39-84d5770c704f",
                            text: "Java"
                        },
                        {
                            uuid: "c98e015c-902f-4c33-be9a-ea1335198ba5",
                            text: "None from given"
                        },
                    ],
                },
                
            },
            {
                id: 3,
                type: "checkbox",
                question: "Which PHP framework do you prefer?",
                description:null,
                data: {
                    options: [
                        {
                            uuid: "92fa0ac3-2813-4dbc-90bc-61d688c7a838",
                            text: "Laravel"
                        },
                        {
                            uuid: "b8f01c24-6230-4eb5-9249-fdb89eb93c1e",
                            text: "Yii2"
                        },
                        {
                            uuid: "22f9dcb2-ace0-4db0-98e2-12fc9ea538f1",
                            text: "Symfony"
                        },
                        {
                            uuid: "7c7f6afd-358a-4b71-b61f-6b808ffe92ee",
                            text: "Codeigniter"
                        },
                       
                    ],
                },
                
            },
            {
                id: 4,
                type: "radio",
                question: "What do you eat after hard coding?",
                description:null,
                data: {
                    options: [
                        {
                            uuid: "6a6dbf5c-a880-4132-8c4f-f0057a19081d",
                            text: "Taco"
                        },
                        {
                            uuid: "c64dc7db-d2ae-4bb2-97be-a1d55e8a708e",
                            text: "Burger"
                        },
                        {
                            uuid: "88be7012-8bf7-4f77-afb8-956e1d40fb7c",
                            text: "Sushi"
                        },
                        {
                            uuid: "eaf5a0f0-94ec-4a94-8b6a-4fb0b3cc70d3",
                            text: "Chicken nuggets"
                        },
                       
                    ],
                },
                
            },

            {
                id: 5,
                type: "checkbox",
                question: "How much time you spend on YOUTUBE?",
                description:null,
                data: {
                    options: [
                        {
                            uuid: "a74ff339-2ba5-417e-8b4f-24161750d4dd",
                            text: "<1h"
                        },
                        {
                            uuid: "0915475b-4235-482d-8d0f-c44d5eb04748",
                            text: "2-3h"
                        },
                        {
                            uuid: "197b165b-6590-48a7-b131-7fa989307fe6",
                            text: "4-6h"
                        },
                        {
                            uuid: "be7fa021-ca26-4737-b64a-238629fd626c",
                            text: "all day"
                        },
                       
                    ],
                },
                
            },
            {
                id:6,
                type:"text",
                question: "What is your favourite YouTube channel?",
                description:null,
                data: {},

            },
            {
                id:7,
                type:"textarea",
                question: "In a few words describe this app",
                description:null,
                data: {},

            },
        ],
    },

    {
        id:200,
        title: "Laravel 8",
        slug: "Laravel-8",
        status: "active",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
        description:
        "Laravel for the win",
        crated_at: "last week",
        updated_at:"ever day",
        expire_date: "probably never",
        questions: [],
    },
    {
        id:300,
        title: "Vue 3",
        slug: "Vue -3",
        status: "active",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
        description:
        "Vue for the win",
        crated_at: "last week",
        updated_at:"ever day",
        expire_date: "probably never",
        questions: [],
    },
    {
        id:400,
        title: "Tailwind 3",
        slug: "Tailwind-3",
        status: "active",
        image: "https://www.whitelabeldevelopers.tech/upload/glossary/492/headimg.png",
        description:
        "Tailwind for the win",
        crated_at: "last week",
        updated_at:"ever day",
        expire_date: "probably never",
        questions: [],
    }
]

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        surveys:[...tmpSurveys],
        questionTypes:["text", "select", "radio", "checkbox", "textarea"],
    },
    getters: {},
    actions: {
        saveSurvey({commit}, survey){
            delete survey.image_url;
            let response;
            if (survey.id) {
                response = axiosClient
                .put(`/survey/${survey.id}`, survey)
                .then((res)=> {
                    commit("updateSurvey", res.data);
                    return res;

                });
            } else{

                response = axiosClient.post("/survey", survey).then((res)=> {
                    commit("saveSurvey", res.data);
                    return res;

                });
            }
            return response;
        },
        register({ commit }, user) {
            return axiosClient.post('/register', user)
                .then(({ data }) => {
                    commit('setUser', data)
                    commit('setToken', data.token)
                    return data;
                })
        },

        login({ commit }, user) {
            return axiosClient.post('/login', user)
                .then(({ data }) => {
                    commit('setUser', data);
                    commit('setToken', data.token)
                    return data;
                })
        },

        logout({ commit }) {
            return axiosClient.post('/logout')
                .then(response => {
                    commit('logout')
                    return response;
                })
        },
        getUser({ commit }) {
            return axiosClient.get('/user')
                .then(res => {
                    console.log(res);
                    commit('setUser', res.data)
                })
        }, 

    },
    mutations: {
        saveSurvey: (state, survey) => {
            state.surveys = [...state.surveys, survey.data];
        },
        updateSurvey: (state, survey) => {
            state.surveys = state.surveys.map((s)=> {
                if (s.id == survey.data.id) {
                    return survey.data;
                }
                return s;
            });
        },

        logout: (state) => {
            state.user.token = null;
            state.user.data = {};
            sessionStorage.removeItem("TOKEN");
          },
        setUser: (state, user) => {
            state.user.data = user;
          },

          setToken: (state, token) => {
            state.user.token = token;
            sessionStorage.setItem('TOKEN', token);
          },
    },
    modules: {},

})

export default store;