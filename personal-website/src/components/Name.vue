<script>
export default {
  data() {
    return {rating: 'loading'}
  },
  created() {
    fetch("https://alfa-leetcode-api.onrender.com/ijfh/contest")
    .then(response => response.json())
    .then(data => (this.rating = parseInt(data.contestRating)));
  }
}
</script>

<template>
  <div class="screen">
    <h1 id="my-name">Justin Javier</h1>
  </div>
    <div class="overview">
        <div class="marquee">
            <div class="track">
                <div>Current Leetcode Rating: <span class='highlight'>{{rating}}</span> · DevOps Intern · Frontend Developer · Research Assistant · Current Leetcode Rating: <span class='highlight'>{{rating}}</span> · DevOps Intern · Frontend Developer · Research Assistant ·</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-family: 'SaucerBB';
    font-size: 2rem;
    position: absolute;
    bottom: 30px;
    left: 30px;
    z-index: 9999;
    transform-origin: center bottom;
    transition: 
      left 2s ease-in-out,
      bottom 2s ease-in-out,
      font-size 2s ease-in-out;
}

.screen {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}

.marquee {
  position: relative;
  width: 30vw;
  max-width: 100%;
  height: 200px;
  overflow-x: hidden;
  color: var(--color-text)
}

.track {
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 10s linear infinite;
}

.highlight {
  color: #ed6b35;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.overview {
    position: absolute;
    top: 5vh;
    right: 5vw;
    width: 30vw;
    height: 20px;
    display: flex;
    place-content: center;
    z-index: 9999;
}

  @media (max-width: 1024px) {
    .overview {
      z-index: 2;
    }

    h1 {
      z-index: 2;
    }
  }

</style>