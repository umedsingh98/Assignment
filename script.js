
document.querySelectorAll('.box input[type="radio"]').forEach(radio => {

  radio.addEventListener('change', function() {

    document.querySelectorAll('.box').forEach(box => {
      box.classList.remove('active');
    }
  );
    radio.closest('.box').classList.add('active');
  });
 }
);


const prices = { box1: 9.00, box2: 16.00, box3: 21.00 };

function totalAmount(selectedBoxId) {
 
  const total = document.querySelector('.total span');
  const price = prices[selectedBoxId]; 
  total.textContent = `Total: $${price.toFixed(2)} USD`;
}
document.querySelectorAll('.box input[type="radio"]').forEach((radio) => {
  radio.addEventListener('change', (event) => {
    const selectedBox = event.target.closest('.box'); 
    totalAmount(selectedBox.id); 
  });
});

totalAmount('box2');