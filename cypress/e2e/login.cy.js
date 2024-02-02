 describe('Автотесты на форму логина и пароля', function () {
   it('Вводим верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible');  // Проверка что текст('Авторизация прошла успешно') виден 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка что текст совпадает
   })

})        

it('Проверяем функцию забыли пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#forgotEmailButton').should('be.visible'); // Проверка что кнопка видна
        cy.get('#forgotEmailButton').click(); // Нажали кнопку Забыли пароль
        cy.get('#forgotForm > .header').should('be.visible'); // Проверка запись Восстановите пароль видна
        cy.get('#mailForgot').type('123@mail.ru'); // Ввели email для восстановления
        cy.get('#restoreEmailButton').click(); // Нажали Отправить код
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст "Успешно отправили пароль на e-mail" виден
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка что текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
   })


it('Проверка на негативный кейс авторизации1', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio2'); // Ввели НЕ верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible');  // Проверка что текст('Такого логина или пароля нет') виден 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка что текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
   })

it('Проверка на негативный кейс авторизации2', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('german@dolnikovp.ru'); // Ввели НЕ верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели  верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible');  // Проверка что текст('Такого логина или пароля нет') виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка что текст совпадает 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
   })

it('Проверка на негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввели не валидный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible');  // Проверка что текст('Нужно исправить проблему валидации') виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка что текст совпадает 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
   })

it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели валидный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible');  // Проверка что текст('Авторизация прошла успешно') виден 
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка что текст "Авторизация прошла успешно" совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
   })