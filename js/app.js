
document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('.form');
    const userList = document.querySelector('.user-list');


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let nameInput = form[0];
        let numberInput = form[1];

        const user = document.createElement('li');
        user.setAttribute('class', 'user');

        /*        const userData = document.createElement('div');
                userData.setAttribute('class', 'user-data');*/

        user.innerHTML = `
            <div class="user-data">
                <div class="user-name">${nameInput.value}</div>
                <div class="user-phone">${numberInput.value}</div>
            </div>
            <button type="button" class="btn user-delete">
                Usuń
            </button>
        `
        /*        const btnDelate = document.createElement('button');
                Object.assign(btnDelate, {
                    type: 'button',
                    className: 'btn user-delete'
                });

                btnDelate.innerHTML = 'Usuń';

                user.appendChild(btnDelate)*/
        
        if (nameInput.value != "" && numberInput.value != "") {

            if (!Number.isNaN(Number(numberInput.value))) {

                userList.appendChild(user);

                nameInput.value = "";
                numberInput.value = "";

            }else{
                alert('Wprowadź numer');
            }

        }
    });



    //    Delete Users


    userList.addEventListener('click', (e) => {
        let contain = /user-delete/;
        if (contain.test(e.target.className) == true) {
            let parent = e.target.closest('.user');
            parent.parentElement.removeChild(parent);
        };
    });

});
