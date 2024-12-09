<template>
  <div class="container" id="app">
    <div class="leaders">
      <h2>Ranking</h2>
      <ul>
        <li v-for="(cat, i) in topThreeCats" :key="cat.name">
          <div class="lead-cats">
            <img src="/public/1000007284.svg" alt="Descripción de la imagen" />
            <div class="podium" :class="`pod-${i + 1}`">
              <div class="ranking-lead" :style="{ backgroundColor: catRank[i].c }">{{ i + 1 }}</div>
              <h4>{{ cat.name }}</h4>
              <p>{{ cat.points }} points</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="board">
      <h2>Puntos</h2>
      <transition-group name="slide" tag="ul" appear>
        <li v-for="(cat, i) in allCats" :key="cat.name" class="cat-item">
          <div class="cat-item__photo">
            <div class="ranking" :style="{ backgroundColor: colorOrder }">{{ rankOrder }}</div>
            <img src="/public/1000007284.svg" alt="Descripción de la imagen" />
          </div>
          <div class="cat-item__info">
            <h4>{{ cat.name }}</h4>
          </div>
          <div class="cat-item__points">
            <p>{{ cat.points }}</p>
          </div>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ranking',
  components: {
    CatListItem: {
      template: "#cat-list-item",
      props: ["cat", "rank"],
      data() {
        return {
          colors: ["#d6cd1e", "#bbbbbb", "#d6a21e"]
        };
      },
      computed: {
        rankOrder() {
          return this.rank + 1;
        },
        colorOrder() {
          return this.colors[this.rank];
        }
      },
      methods: {
        pointIncrement() {
          this.cat.points++;
        },
        pointDecrement() {
          this.cat.points--;
        }
      }
    }
  },
  data() {
    return {
      cats: [
        { name: "Milo", photo: "cat-1", points: 102 },
        { name: "Clarence", photo: "cat-2", points: 88 },
        { name: "Polly", photo: "cat-3", points: 97 },
        { name: "Baxter", photo: "cat-4", points: 100 },
        { name: "Jules", photo: "cat-5", points: 76 },
        { name: "Lani", photo: "cat-6", points: 90 }
      ],
      catRank: [
        { r: 2, c: "#d6a21e" },
        { r: 0, c: "#d6cd1e" },
        { r: 1, c: "#bbbbbb" }
      ],
      newLeader: ""
    };
  },
  computed: {
    allCats() {
      return [...this.cats].sort((a, b) => b.points - a.points);
    },
    topThreeCats() {
      let topThree = [...this.cats].sort((a, b) => b.points - a.points).slice(0, 3);
      let order = [topThree[2], topThree[0], topThree[1]];
      return order;
    },
    leadCat() {
      return this.topThreeCats.map((cat) => cat.name);
    }
  },
  watch: {
    leadCat(newValue, oldValue) {
      if (newValue[1] !== oldValue[1]) {
        this.newLeader = newValue[1];
      } else {
        this.newLeader = "";
      }
    }
  }
};
</script>



<style scoped>


a {
  text-decoration: none;
}

ul {
  list-style: none;
}

.container {
  width: 100%;
  max-width: 600px;
  padding: 2em 0;
  display: grid;
  grid-template-rows: 400px 1fr;
  grid-column-gap: 1em;
  margin: auto; /* Centra horizontal y verticalmente */
}

.leaders {
  background-color: var(--primary);
  background-image: url("https://www.transparenttextures.com/patterns/inspiration-geometry.png");
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-top: 2em;
  display: grid;
  grid-template-rows: 20% 1fr;
  justify-items: center;
}
.leaders h2 {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  padding-bottom: 40px;
  font-family: "Amatic SC", sans-serif;
  color: var(--white);
}
.leaders ul {
  width: 420px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-end;
  grid-gap: 10px;
}

.lead-cats {
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.lead-cats__photo {
  width: 108px;
  margin: 0 auto;
}

.podium {
  padding: 1em;
  text-align: center;
  background-color: var(--white);
  height: 160px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
}
.podium h4 {
  font-size: 1.8rem;
  color: var(--primary);
}
.podium p {
  color: rgb(73, 73, 73);
  margin: 5px 0;
  font-size: 0.9rem;
}

.pod-1 {
  height: 100px;
}
.pod-3 {
  height: 130px;
}

.board {
  background-color: var(--white);
  border-radius: 10px;
  padding: 1em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}
.board h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 200;
  padding: 30px 0;
  font-weight: 700;
}
.board ul {
  position: relative;
}

.cat-item {
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  grid-template-rows: minmax(30px, 1fr); /* Reducido el tamaño mínimo */
  grid-gap: 0.5em; /* Reducido el espacio entre elementos */
  align-items: center;
  border-bottom: 1px solid rgb(233, 233, 233);
  transition: background-color 0.2s;
  padding: 5px; /* Reducido el padding */
}
.cat-item:hover {
  background-color: hsla(0, 0%, 74%, 0.102);
}
.cat-item:last-child {
  border: none;
}
.cat-item img {
  height: 100%;
  width: 100%;
}
.cat-item__photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background-color: var(--primary);
  position: relative;
}
.cat-item__info h4 {
  font-size: 1.7rem;
  color: var(--primary);
  margin-left: 20px;
}
.cat-item__points {
  text-align: right;
}
.cat-item__points p {
  font-size: 1.5rem;
  color: rgb(73, 73, 73);
}
.cat-item__points img {
  width: 20px;
  cursor: pointer;
}
.cat-item__points img:last-child {
  transform: scaleY(-1);
}

.ranking {
  position: absolute;
  bottom: 0;
  right: -10px;
  z-index: 10;
  width: 20px;
  height: 20px;
  background-color: #1ca1fa;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 0.7rem;
}

.ranking-lead {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  width: 34px;
  height: 34px;
  background-color: #1cfa8b;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.slide-move {
  transition: all 0.5s ease-out;
}

.active {
  animation: rise 0.4s ease-out forwards;
}

@keyframes rise {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  80% {
    transform: translateY(-5px);
    opacity: 1;
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
