let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
const title = document.createElement('h1');
title.innerText = 'Courses and duration';
wrapper.appendChild(title);

for (const course of coursesAndDurationArray) {
    const courseList = document.createElement('ul');
    courseList.classList.add('courseList');
    const courseListItem = document.createElement('li');
    courseListItem.classList.add('courseListItem');
    courseList.appendChild(courseListItem);
    courseListItem.innerText = `${course.title} - ${course.monthDuration}`;
    wrapper.appendChild(courseList);
}


document.body.appendChild(wrapper);