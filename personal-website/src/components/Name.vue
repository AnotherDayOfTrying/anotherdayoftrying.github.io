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
    <h1>Justin Javier</h1>
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
    bottom: 1.5rem;
    left: 1.5rem;
    z-index: 9999;
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
    /* background-color: ; */
    display: flex;
    place-content: center;
}
</style>