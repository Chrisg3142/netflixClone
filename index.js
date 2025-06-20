const trendingRow = document.getElementById('trendingRow');
const leftBtn = document.querySelector('.leftBTN');
const rightBtn = document.querySelector('.rightBTN');

const scrollAmount = 650; 

leftBtn.addEventListener('click', () => {
  trendingRow.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  trendingRow.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});
