/*
Comments:
1.Надо выносить body в отдельную переменнную (иногда бывает даже в отдельный файл и обращаться как к константе)
body: [{
                id: userId,
                username: "testName1",
                firstName: "firstTestName1",
                lastName: "lastTestName1",
                email: genEmail,
                password: genPass,
                phone: genPhone,
                userStatus: 0
            },
            {
                id: userId,
                username: "testName2",
                firstName: "firstTestName2",
                lastName: "lastTestName2",
                email: genEmail,
                password: genPass,
                phone: genPhone,
                userStatus: 0
            }]

2. Это можно через фейкер тоже

                username: "userName01",
                firstName: "firstTestName01",
                lastName: "lastTestName01",
                
                
3. `${baseURL}/login?username=${usName}&password=%22${usPass}%22`, - %22 это символ значит кавычку, его не надо добавлять, браузер сам добавит.      

4.   failOnStatusCode: false. - подругому тут никак, тоже посидела попробовала. 
*/


///<reference types>="Cypress"/>
import { faker } from '@faker-js/faker'

describe('Api', () =>{
    const baseURL = 'https://petstore.swagger.io/v2/user';
    const genEmail = faker.internet.email();
    const genPass = faker.internet.password();
    const genPhone = faker.internet.phone;
    const userId = faker.datatype.number(100);
      
    it('Create with Array+List', () => {
        cy.request({
            method: 'POST',        /* POST /user/createWithArray */
            url:  `${baseURL}/createWithArray`,
            body: [{
                id: userId,
                username: "testName1",
                firstName: "firstTestName1",
                lastName: "lastTestName1",
                email: genEmail,
                password: genPass,
                phone: genPhone,
                userStatus: 0
            },
            {
                id: userId,
                username: "testName2",
                firstName: "firstTestName2",
                lastName: "lastTestName2",
                email: genEmail,
                password: genPass,
                phone: genPhone,
                userStatus: 0
            }]
        }).then((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq('ok');
        })
        cy.request({
            method: 'POST',    /* POST /user/createWithList */
            url:  `${baseURL}/createWithList`,
            body: [{
                id: userId,
                username: "testName3",
                firstName: "firstTestName3",
                lastName: "lastTestName3",
                email: genEmail,
                password: genPass,
                phone: genPhone,
                userStatus: 0
            },
            {
                id: userId,
                username: "testName4",
                firstName: "firstTestName4",
                lastName: "lastTestName4",
                email: genEmail,
                password: genPass,
                phone: genPhone,
                userStatus: 0
            }]
        }).then((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq('ok');
        })
    })

    it('Create+Get+Login+Update+Delete', () => {
        
        cy.request({
            method: 'POST',            /* POST /user Create user */
            url:  `${baseURL}`,
            body: {
                id: userId,
                username: "userName01",
                firstName: "firstTestName01",
                lastName: "lastTestName01",
                email: genEmail,
                password: genPass,
                phone: genPhone,
                userStatus: 0
            }            
        }).then((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body.message).to.be.equal(`${userId}`);
            const userName = 'userName01';
            cy.request({
                method: 'GET',         /* GET /user/{username} Get user by user name */
                url: `${baseURL}/${userName}`
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.username).to.be.equal(`${userName}`);
                const usName = response.body.username;
                const usPass = response.body.password;
                cy.request({
                    method: 'GET',       /* GET /user/login Logs user into the system */
                    url: `${baseURL}/login?username=${usName}&password=%22${usPass}%22`,
                }).then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.message).contains('logged in user session');
                    cy.request({
                        method: 'PUT',  /* PUT /user/{username} Updated user */
                        url: `${baseURL}/${usName}`,
                        body: {
                            id: userId,
                            username: "userName02",
                            firstName: "firstTestName02",
                            lastName: "lastTestName02",
                            email: genEmail,
                            password: genPass,
                            phone: genPhone,
                            userStatus: 0
                        }
                    }).then((response) =>{
                        expect(response.status).to.eq(200);
                        cy.request({
                            method: 'DELETE',  /* DELETE /user/{username} */
                            url: `${baseURL}/${usName}`,
                            failOnStatusCode: false
                        }).then((response) =>{
                            expect(response.status).to.eq(404);
                            expect(response.body).to.eq(''); 
                    })                                 
                })
            })                    
        })
    })                    
    })
    
    it('Create+Login+Logout', () =>{
        cy.request({
            method: 'POST',            /* POST /user Create user */
            url:  `${baseURL}`,
                body: {
                    id: 444,
                    username: "userName03",
                    firstName: "firstTestName03",
                    lastName: "lastTestName03",
                    email: genEmail,
                    password: genPass,
                    phone: genPhone,
                    userStatus: 0
                }
            }).then((response) =>{
                expect(response.status).to.eq(200);
                const usName3 = response.body.username;
                const usPass3 = response.body.password;
                cy.request({
                    method: 'GET',       /* GET /user/login Logs user into the system */
                    url: `${baseURL}/login?username=${usName3}&password=%22${usPass3}%22`
                }).then((response) =>{
                    expect(response.status).to.eq(200);
                    expect(response.body.message).contains('logged in user session');
                    cy.request({
                        method: 'GET',
                        url: `${baseURL}/logout`    /* GET /user/logout Logs out current logged in user session */ 
                    }).then((answer) =>{
                        expect(answer.status).to.eq(200);
                        expect(answer.body.message).to.be.equal('ok');
                    })
                })
            })
})
})
