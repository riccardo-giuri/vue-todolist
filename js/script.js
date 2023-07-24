Vue.createApp({
    data() {
        return {
            toDoList: [{
                id: 1,
                text: "Ciao Sono il testo della Task",
                done: false
            },
            {
                id: 2,
                text: "Ciao Sono il testo della Task",
                done: true
            },
            {
                id: 3,
                text: "Ciao Sono il testo della Task",
                done: false
            },
            {
                id: 4,
                text: "Ciao Sono il testo della Task",
                done: false
            },]
        }
    },

    methods: {
        deleteTask(itemID) {
            const listIndex = this.toDoList.findIndex((task) => task.id === itemID);
            this.toDoList.splice(listIndex, 1);
            console.log(this.toDoList);
        }
    }
}).mount("#app"); 