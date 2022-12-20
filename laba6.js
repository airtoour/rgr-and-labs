function setRussian() {
    let name = document.getElementById('student');
    name.innerHTML = 'Вайц Артур, Тимошенский Александр';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Факультет  Бизнеса, ФБИ-02, 3 курс, 2022г.'

    document.getElementById('your-name').innerHTML = 'Ваше Имя';
    document.getElementById('input-name').placeholder = 'Введите Имя';

    document.getElementById('your-surname').innerHTML = 'Ваша Фамилия';
    document.getElementById('input-surname').placeholder = 'Введите Фамилию';

    document.getElementById('your-age').innerHTML = 'Ваш возраст';
    document.getElementById('input-age').placeholder = 'Введите Возраст';

    document.getElementById('ok-button').value = 'ок';
    document.getElementById('reset-button').value = 'сброс';
}

function setEnglish() {
    let name = document.getElementById('student');
    name.innerHTML = 'Veitz Arthur, Timoshenskiy Alex';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Faculty of Buisness, FBI-02, 3rd year, 2022y.'

    document.getElementById('your-name').innerHTML = 'Your Name';
    document.getElementById('input-name').placeholder = 'Enter your name';

    document.getElementById('your-surname').innerHTML = 'Your Surname';
    document.getElementById('input-surname').placeholder = 'Enter your surname';

    document.getElementById('your-age').innerHTML = 'Your age';
    document.getElementById('input-age').placeholder = 'Enter your age';

    document.getElementById('ok-button').value = 'ok';
    document.getElementById('reset-button').value = 'reset';
}

function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    
    alert('Привет, ' + userName + ' ' + userSurname + '\n' + 'Ваш возраст: ' + userAge);
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.background = color;
    }

    function showAlert2() {
        alert ('Привет! Это Имя и Фамилия студента');
        let r = Math.round(Math.random()*255);
        let g = Math.round(Math.random()*255);
        let b = Math.round(Math.random()*255);
        let color = 'rgb(' + r + ',' + g + ',' + b + ')';
        document.getElementById('student').style.background = color;
    }
        
    function showAlert3() {
            alert ('Привет! Это Факультет, группа, курс и год!');
            let r = Math.round(Math.random()*255);
            let g = Math.round(Math.random()*255);
            let b = Math.round(Math.random()*255);
            let color = 'rgb(' + r + ',' + g + ',' + b + ')';
            document.getElementById('footer').style.background = color;
    }