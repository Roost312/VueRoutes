<template>
  <div class="container">
    <h1>MORE ANIMATIONS</h1>
    <div class="square"></div>
    <div class="line"></div>
    <h1 class="text">WOAH!!</h1>
  </div>
</template>

<style>
  .text {
    font-size: 48px;
    color: purple;
    position: relative;
    animation: runText 5s linear 2s infinite alternate;
    z-index: 10;
  }

  .square {
    height: 60px;
    width: 60px;
    background-color: darkcyan;
    position: relative;
    animation: runSquare 10s linear 2s infinite alternate;
    z-index: 5;
  }

  .line {
    width: 100px;
    height: 50px;
    position: relative;
    background-color: orange;
    animation: runLine 5s linear 2s infinite alternate;
    z-index: 0;
  }

  @keyframes runText {
    0% {
      color: purple; left: 0px; top: 0px;
    }
    25% {
      color: darkmagenta; left: 200px; top: 50px; transform: rotateX(90deg); 
    }
    50% {
      color: magenta; left: 50px; top: 200px; transform: rotateX(-90deg); 
    }
    75% {
      color: darkorchid; left: 50px; top: -150px; transform: rotateX(40deg); 
    }
    100% {
      color: purple; left: 0px; top: 0px; transform: rotateX(-40deg); 
    }
  }

  @keyframes runLine {
    0% {
      background-color: orange; left: 0px;
    }
    50% {
      background-color: lightblue; left: 300px;
    }
    100% {
      background-color: orange; left: 0px;
    }
  }

  @keyframes runSquare {
    0% {
      background-color: darkcyan; left: 0px; top: 0px;
    }
    25% {
      background-color: rgb(124, 136, 136); left: 300px; top: 0px;
    }
    50% {
      background-color: rgb(6, 102, 97); left: 300px; top: 300px;
    }
    75% {
      background-color: rgb(16, 20, 20); left: 0px; top: 300px;
    }
    100% {
      background-color: darkcyan; left: 0px; top: 0px;
    }
  }
</style>

