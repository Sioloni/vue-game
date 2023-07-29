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
  <div class="card-container">
    <div
      class="column"
      v-for="(column, columnIndex) in columns"
      :key="columnIndex"
    >
      <div class="card" v-for="(card, index) in column" :key="index">
        <router-link
          :to="{ name: 'Task', params: { id: card.level } }"
          class="card-text"
        >
          Level {{ card.level }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      showHint: false,
      hintMessage: "Это подсказка",
      columns: [
        [
          {
            level: 1,
            description: "Описание задания 1",
            gif: "../assets/info1.gif",
            options: [2, 3, 4],
          },
          {
            level: 4,
            description: "Описание задания 1",
            gif: "ссылка на gif 1",
            options: [2, 3, 4],
          },
          {
            level: 7,
            description: "Описание задания 1",
            gif: "ссылка на gif 1",
            options: [2, 3, 4],
          },
        ],
        [
          {
            level: 2,
            description: "Описание задания 1",
            gif: "ссылка на gif 1",
            options: [2, 3, 4],
          },
          {
            level: 5,
            description: "Описание задания 1",
            gif: "ссылка на gif 1",
            options: [2, 3, 4],
          },
          {
            level: 8,
            description: "Описание задания 1",
            gif: "ссылка на gif 1",
            options: [2, 3, 4],
          },
        ],
        [
          {
            level: 3,
            description: "Описание задания 1",
            gif: "ссылка на gif 1",
            options: [2, 3, 4],
          },
          {
            level: 6,
            description: "Описание задания 1",
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
  methods: {
    hideHint() {
      this.showHint = false;
    },
  },
  mounted() {
    setTimeout(() => {
      this.showHint = true;
    }, 2000); // Задержка в 5000 миллисекунд (5 секунд)
  },
};
</script>

<style scoped>
* {
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Press+Start+2P&family=Teko:wght@300&display=swap");
}
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

.hint-message button:hover {
  background-color: #9127ee;
  color: white;
}
.card-container {
  display: flex;
  justify-content: center;
  background-color: black;
  padding: 20px;
  margin-top: 70px;
  flex-wrap: wrap;
  margin-top: 70px;
}

.column {
  display: flex;
  flex-direction: column;
}

.card {
  width: 200px;
  height: 300px;
  margin: 10px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out;
  position: relative;
  color: white;
  margin-bottom: 30px;
}

.card:hover {
  box-shadow: 0px 0px 10px 3px rgba(255, 21, 21, 0.3);
  animation: bounceCard 0.3s ease-in-out infinite alternate;
  background: linear-gradient(to bottom, #9127ee, #e600ea);
}

@keyframes bounceCard {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}

.card-text {
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
