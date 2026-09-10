
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#bookingForm');
  if(form){
    form.addEventListener('submit', e => {
      e.preventDefault();
      const msg = document.querySelector('#formMessage');
      msg.hidden = false;
      msg.textContent = 'Demo submission successful — no live reservation was created.';
      form.reset();
    });
  }
  document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-tab]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.tab;
      document.querySelectorAll('[data-cat]').forEach(row => {
        row.style.display = (cat === 'all' || row.dataset.cat === cat) ? 'flex' : 'none';
      });
    });
  });
});
