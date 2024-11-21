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

for (const course of coursesAndDurationArray) {

    const title = document.createElement('h2');
    title.innerText = `${course.title}`;
    const mouthDuration  = document.createElement('p');
    mouthDuration.innerText = `${course.monthDuration}`;
    wrapper.append(title, mouthDuration);
}
document.body.appendChild(wrapper);