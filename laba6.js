function setRussian() {
    let name = document.getElementById('student');
    name.innerHTML = 'Вайц Артур, Тимошенский Александр';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Факультет  Бизнеса, ФБИ-02, 3 курс, 2022г.'

    document.getElementById('your-name').innerHTML = 'Ваше Имя';
    document.getElementById('input-name').placeholder = 'Введите Имя';
}

function setEnglish() {
    let name = document.getElementById('student');
    name.innerHTML = 'Weitz Arthur, Timoshenskiy Alex';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Faculty of Buisness, FBI-02, 3rd year, 2022y.'

    document.getElementById('your-name').innerHTML = 'Your Name';
    document.getElementById('input-name').placeholder = 'Enter your name';
}