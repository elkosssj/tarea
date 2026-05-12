const TABS = ['er11','er12','er13','er14','er15'];

function showTab(id) {
  TABS.forEach(t => {
    document.getElementById(t).classList.remove('active');
  });
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.tab-btn')[TABS.indexOf(id)].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggle(hdr) {
  hdr.classList.toggle('open');
  hdr.nextElementSibling.classList.toggle('open');
}

function showAF(btn, paneId) {
  const body = btn.closest('.sec-body');
  body.querySelectorAll('.af-tab').forEach(b => b.classList.remove('active'));
  body.querySelectorAll('.af-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(paneId).classList.add('active');
}
