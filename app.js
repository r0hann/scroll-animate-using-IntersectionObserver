const observer = new IntersectionObserver((entries)=> {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.scrollIntoView({block:'center'})
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {threshold: 0.05})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));