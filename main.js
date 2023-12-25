function adjustText() {
    document.getElementById('student-id').style.fontFamily = 'Arial';
    document.getElementById('name').style.fontFamily = 'Arial';
    document.getElementById('student-id').style.color = 'blue';
    document.getElementById('name').style.color = 'blue';
}

function adjustProfile() {
    document.getElementById('profile-pic').style.borderRadius = '50%';
    document.getElementById('profile-pic').style.borderWidth = '5px';
    document.getElementById('profile-pic').style.borderColor = 'red';
}

function changePhoto() {
    document.getElementById('profile-pic').src = '20231221_232400.jpg';
}
