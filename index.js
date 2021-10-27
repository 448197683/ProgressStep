const circle = document.querySelectorAll('.circle');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const line = document.querySelector('.line-over');
const totalNum = circle.length;

let currentNum = 1;

const handleNext = (e) => {
  currentNum++;
  if (currentNum >= totalNum) {
    nextBtn.disabled = true;
  }
  line.style.width = `${((currentNum - 1) / (totalNum - 1)) * 100}%`;
  prevBtn.disabled = false;
};

const handlePrev = (e) => {
  currentNum--;
  if (currentNum <= 1) {
    prevBtn.disabled = true;
  }
  line.style.width = `${((currentNum - 1) / (totalNum - 1)) * 100}%`;
  nextBtn.disabled = false;
  console.log(currentNum);
};

nextBtn.addEventListener('click', handleNext);
prevBtn.addEventListener('click', handlePrev);
