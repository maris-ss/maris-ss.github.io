const popupMap = {
  widgets: '#popup',
  info: '#popup2',
  fac: '#popup3',
  widgets2: '#popup4',
  divergencia: '#popup5',
  divergencia2: '#popup6',
  divergencia3: '#popup7',
  divergencia4: '#popup8'
};

function createPopup(id) {
  let popupNode = document.querySelector(id);
  let overlay = popupNode.querySelector('.overlay');
  let closeBtn = popupNode.querySelector('.close-btn');

  function openPopup() {
      popupNode.classList.add('active');
  }

  function closePopup() {
      popupNode.classList.remove('active');
  }

  overlay.addEventListener('click', closePopup);
  closeBtn.addEventListener('click', closePopup);
  return openPopup;
}

let openPopups = [];

document.querySelectorAll('.status[data-category]').forEach(div => {
  const category = div.dataset.category;
  const popupId = popupMap[category];
  const popup = createPopup(popupId);
  div.addEventListener('click', () => {
      popup();
      openPopups.push(popupId);
  });
});

document.querySelectorAll('i[data-category]').forEach(i => {
  const category = i.dataset.category;
  const popupId = popupMap[category];
  const popup = createPopup(popupId);
  i.addEventListener('click', () => {
    popup();
    openPopups.push(popupId);
  });
});
