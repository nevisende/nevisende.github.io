/* eslint-disable linebreak-style */
const menuButton = document.getElementById('menu-button');
const menuIcon = document.getElementById('menu-icon');
const header = document.querySelector('header');
const body = document.querySelector('body');
const inveteesList = document.querySelector('.invitees-list');
const moreInviteeButton = document.querySelector('.invitee-button');

const invitees = [{
  name: 'Furkan Denizhan',
  photo: './content/generated_photos_1.jpg',
  job: 'Full Stack Developer',
  desc: 'Denizhan studies as Full Stack Developer.He builds 2 aplication for the startup.',
},
{
  name: 'Safa Keleş',
  photo: './content/generated_photos_2.jpg',
  job: 'Accountant',
  desc: 'Safa Keleş develops great ideas and continues to do so.',
},
{
  name: 'Temitope Ogunleye',
  photo: './content/generated_photos_3.jpg',
  job: 'Front End Developer',
  desc: 'Ogunleye is a front end developer and uses mostly React.JS in his projects.',
},
{
  name: 'Evren Ersoy',
  photo: './content/generated_photos_4.jpg',
  job: '',
  desc: 'Evren is interested in Frontend ...',
},
{
  name: 'Atilla Taha Kördüğüm',
  photo: './content/generated_photos_5.jpg',
  job: 'Full Stack Developer',
  desc: 'He is a geological engineer and a web developer and extremely committed to business ethics,He has been working as a full-stack software developer for 6 years.',
},
{
  name: 'Armağan Amcalar',
  photo: './content/generated_photos_6.jpg',
  job: 'Software architect',
  desc: 'He is a/an (Software architect, leader, lecturer, public speaker, mentor, entrepreneur, JS evangelist, electronics engineer, guitarist, singer, radio host :=)',
}];

menuButton.addEventListener('click', () => {
  header.classList.toggle('mobile-menu');
  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
});

function addInvitee(invitee) {
  const li = document.createElement('li');
  li.classList.add('invitee');
  const inviteePPContainer = document.createElement('div');
  inviteePPContainer.classList.add('invitee-pp-container');
  const imgTag = document.createElement('img');
  imgTag.setAttribute('src', invitee.photo);
  const descInviteDiv = document.createElement('div');
  descInviteDiv.classList.add('desc-invitee');
  const h3 = document.createElement('h3');
  h3.innerText = invitee.name;
  const span1 = document.createElement('span');
  span1.classList.add('red-text');
  span1.innerText = invitee.job;
  const span2 = document.createElement('span');
  const pTag = document.createElement('p');
  pTag.innerText = invitee.desc;
  descInviteDiv.append(h3, span1, span2, pTag);
  inviteePPContainer.appendChild(imgTag);
  li.appendChild(inviteePPContainer);
  li.appendChild(descInviteDiv);
  inveteesList.appendChild(li);
}

body.onload = () => {
  if (window.outerWidth >= 768) {
    invitees.forEach((invitee) => {
      addInvitee(invitee);
    });
  } else {
    invitees.filter((_, index) => index < 3).forEach((invitee) => {
      addInvitee(invitee);
    });
  }
};

moreInviteeButton.addEventListener('click', (e) => {
  e.preventDefault();
  invitees.filter((_, index) => index >= 3).forEach((invitee) => {
    addInvitee(invitee);
  });
  moreInviteeButton.style.display = 'none';
});