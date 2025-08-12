// script.js - small interactions
document.addEventListener('DOMContentLoaded', function(){
  // set footer year
  const yr = new Date().getFullYear();
  const yearElem = document.getElementById('year');
  if(yearElem) yearElem.textContent = yr;

  // Whatsapp floating click (optional)
  const waBtn = document.getElementById('whatsapp-btn');
  if(waBtn) waBtn.addEventListener('click', function(){
    const url = 'https://wa.me/919350158754?text=Hello%20LUMEN%20Clinic,%20I%20want%20to%20book%20an%20appointment';
    window.open(url, '_blank');
  });
});
