<template>
  <div class="header">
    <div class="hearts">
      <img
        v-for="index in 3"
        :key="index"
        src="../assets/dinosaur.svg"
        alt="Сердце"
      />
    </div>
    <div class="logo">
      <img src="../assets/logo.svg" alt="Логотип" />
    </div>
    <div class="hints">
      <img
        v-for="index in 3"
        :key="index"
        src="../assets/dinosaur.svg"
        alt="Значок подсказки"
        @click="showHint = true"
      />
    </div>
    <div class="hint-message" v-show="showHint">
      <p>{{ hintMessage }}</p>
      <button @click="hideHint">OK</button>
    </div>
  </div>
  <div class="container">
    <div class="left">
      <h3 class="description">{{ task.description }}</h3>
      <img class="gif" :src="task.gif" :alt="task.description" />
    </div>
    <div class="right">
      <form>
        <label for="field1">Поле 1</label>
        <input id="field1" type="text" />
        <label for="field2">Поле 2</label>
        <input id="field2" type="text" />
        <label for="field3">Поле 3</label>
        <input id="field3" type="text" />
        <button>Проверить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskGame",
  props: {
    obj: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      task: null,
      columns: [
        [
          {
            level: 1,
            description: "Описание задания 1",
            gif: require("@/assets/info1.gif"),
            options: [2, 3, 4],
          },
          {
            level: 4,
            description: "Описание задания 4",
            gif: "ссылка на gif 1",
            options: [2, 3, 4],
          },
          {
            level: 7,
            description: "Описание задания 7",
            gif: "ссылка на gif 1",
            options: [2, 3, 4],
          },
        ],
        [
          {
            level: 2,
            description: "Описание задания 2",
            gif: "ссылка на gif 1",
            options: [2, 3, 4],
          },
          {
            level: 5,
            description: "Описание задания 5",
            gif: "ссылка на gif 1",
            options: [2, 3, 4],
          },
          {
            level: 8,
            description: "Описание задания 8",
            gif: "ссылка на gif 1",
            options: [2, 3, 4],
          },
        ],
        [
          {
            level: 3,
            description: "Описание задания 3",
            gif: "ссылка на gif 1",
            options: [2, 3, 4],
          },
          {
            level: 6,
            description: "Описание задания 6",
            gif: "ссылка на gif 1",
            options: [2, 3, 4],
          },
          {
            level: 9,
            description: "Описание задания 9",
            gif: "ссылка на gif 1",
            options: [2, 3, 4],
          },
        ],
      ],
    };
  },
  created() {
    const level = parseInt(this.$route.params.id);
    const foundObject = this.columns.flat().find((obj) => obj.level === level);
    if (foundObject) {
      this.task = { ...foundObject };
    } else {
      console.error(`Object with level ${level} not found.`);
    }
  },
};
</script>

<style>
.header {
  background-color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.3);
}

.logo {
  margin-right: 100px;
  margin-left: 100px;
}

.hearts {
  margin-right: 10px;
}

.hint-icon-wrapper {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.hint-message {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border: 1px solid gray;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  margin-top: 10px;
  border-radius: 10px;
}

.hint-message p {
  margin-bottom: 10px;
}

.hint-message button {
  padding: 5px 10px;
  background-color: lightgray;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}
.container {
  display: flex;
}

.left {
  width: 70%;
  background-color: black;
  color: white;
  padding: 20px;
}

.description {
  font-size: 24px;
}

.gif {
  width: 70%;
  max-width: 300px;
  margin: 20px 0;
}

.right {
  width: 30%;
  padding: 20px;
}

form {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 10px;
}

input {
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
