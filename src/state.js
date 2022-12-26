import {rerenderEntireTree} from './render'

let store = {
    userInfo: {
        Name: "Ученик",
        SurName: "Ученик",
        YourPost: "Ученик",
        DoneTask: 0,
        Progress: 0,
        DoneTheme: 0
    },

    kvadrTrainQuest: {
        questions: [
            {id: 0, question: '6𝑥+7=0', answer: 'No', btnColorY: 'white', btnColorN: 'white'},
            {id: 1, question: '25−16𝑥^2 =0', answer: 'Yes', btnColorY: 'white', btnColorN: 'white'},
            {id: 2, question: '7𝑥=80+11', answer: 'No', btnColorY: 'white', btnColorN: 'white'},
            {id: 3, question: '−𝑥−3𝑥+15=0', answer: 'No', btnColorY: 'white', btnColorN: 'white'},
            {id: 4, question: '3𝑥^2 + 7𝑥 − 10 = 0', answer: 'Yes', btnColorY: 'white', btnColorN: 'white'},
            {id: 5, question: '4(𝑥−5)=12', answer: 'No', btnColorY: 'white', btnColorN: 'white'},
            {id: 6, question: '𝑥^2 − 4 = 0', answer: 'Yes', btnColorY: 'white', btnColorN: 'white'}
        ],
        results:{
            trainKvadTest: 0
        }
    },
}


export let addName = (newName) => {
    store.userInfo.Name = newName;
    rerenderEntireTree(store);
}

export let addSurName = (newSurName) => {
    store.userInfo.SurName = newSurName;
    rerenderEntireTree(store);
}

export let addPost = (newPost) => {
    store.userInfo.YourPost = newPost;
    rerenderEntireTree(store);
}

export let colorReplace = (id, newColor, btn, newResults) => {
    if(btn==='Yes'){
        store.kvadrTrainQuest.results.trainKvadTest += newResults;
        store.kvadrTrainQuest.questions[id].btnColorY = newColor;
    }
    else{
        store.kvadrTrainQuest.results.trainKvadTest += newResults;
        store.kvadrTrainQuest.questions[id].btnColorN = newColor;
    }
    rerenderEntireTree(store);
}

export default store;