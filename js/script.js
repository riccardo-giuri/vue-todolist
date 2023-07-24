Vue.createApp({
    data() {
        return {
            /**
             * list of tasks objects
             * @type {object[]}
             */
            toDoList: [],

            /**
             * the text input of the new task 
             * @type {string}
             */
            newTaskText: "",

            /**
             * the ID counter of the task created 
             * @type {number}
             */
            idCounter: 0
        }
    },

    methods: {
        /**
         * Delete a task from the list
         * @param {number} itemID The item ID of the task than need to be deleted
         */
        deleteTask(itemID) {
            //find the index of the task with the input id
            const listIndex = this.toDoList.findIndex((task) => task.id === itemID);
            //delete that task from the list
            this.toDoList.splice(listIndex, 1);
        },

        /**
         * method that add a task to the list
         */
        addTask() {
            //check if the task from has a text 
            if(this.newTaskText !== ""){
                //increment the ID 
                this.idCounter++
                //create the task object
                const newTask = {
                    id: this.idCounter,
                    text: this.newTaskText,
                    done: false
                };

                //push the task to the list
                this.toDoList.push(newTask);
            }            
        },

        /**
         * activate or deactivate the Done state of the task passed 
         * @param {object} task the task where you want to perform the toggle
         */
        toggleTaskState(task) {
            //swap the value of the done attribute of the task input
            task.done = !task.done;
        }
    }
}).mount("#app"); 