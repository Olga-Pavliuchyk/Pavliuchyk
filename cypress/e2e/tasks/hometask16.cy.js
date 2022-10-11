/*
Comments:
1. Не надо всегда использовать failOnStatusCode: false, это скорее исключение из правил чем правило.
2. Body снова выносим из реквеста в переменную.

Вот еще пример: 


/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

И так домашнее задание:
Home work: 
1.Если не закончили с практическим заданием - дописываем
2. Дописать тесты на https://gorest.co.in/
PUT / Path и DELETE (по аналогии с практическим)
 
curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ec18a526fd2eae8eff3b910dc464ee93806dace7fecc897cd46e536cd9203a50" -XGET "https://gorest.co.in/public/v2/users"

curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ec18a526fd2eae8eff3b910dc464ee93806dace7fecc897cd46e536cd9203a50" -XPOST "https://gorest.co.in/public/v2/users" -d '{"name":"Tenali Ramakrishna", "gender":"male", "email":"tenalid.ramakrishna@15ce.com", "status":"active"}'

curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ACCESS-TOKEN" -XPATCH "https://gorest.co.in/public/v2/users/13" -d '{"name":"Allasani Peddana", "email":"allasani.peddana@15ce.com", "status":"active"}'

curl-i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ACCESS-TOKEN" -XDELETE "https://gorest.co.in/public/v2/users/13"

describe("GoRest test", () => {
 
  it.only("PUT/PATCH", () => {
    const bearerToken =
      "Bearer ec18a526fd2eae8eff3b910dc464ee93806dace7fecc897cd46e536cd9203a50";
    const baseUrl = "https://gorest.co.in/public/v2/";
    const randomEmail = faker.internet.email();
    const randomName = faker.name.fullName();
    const defaultBody = {
      name: randomName,
      gender: "female",
      email: randomEmail,
      status: "active",
    };

    const updatedBody = {
      name: randomName,
      email: randomEmail,
      status: "active",
    };
    cy.request({
      method: "POST",
      url: `${baseUrl}/users`,
      headers: {
        Authorization: bearerToken,
      },
      body: defaultBody,
    }).then((response) => {
      const { id } = response.body;
      cy.log("Result ", id);
      cy.request({
        method: "PUT",
        url: `${baseUrl}/users/${id}`,
        headers: {
          Authorization: bearerToken,
        },
        body: updatedBody,
      }).then(() => {
        cy.request({
          method: "DELETE",
          url: `${baseUrl}/users/${id}`,
          headers: {
            Authorization: bearerToken,
          },
        })
          .its("status")
          .should("equal", 204);
      });
    });
  });
});


*/


///<reference types= "Cypress"/>
import { faker } from '@faker-js/faker';
 
describe('Api', () => {
const accessToken = 'Bearer 264baf1a3f6c57b745580d93d569e05d61a2cde87d9b9a7e115244b867274de0';
const genEmail = faker.internet.email();
const baseUrl = 'https://gorest.co.in/public/v1/users'

    it('Create/Put/Delete', () => {
        cy.request({
        method: 'POST',
        url: `${baseUrl}`,
        headers:{
              Authorization: accessToken
            },
        body:{
            name:"Name Test",
            gender:"male",
            email: genEmail,
            status:"active"
            }      
        }).then((response) => {
        expect(response).to.have.property('status', 201);
        const userID = response.body.data.id;
        cy.request({
        method: 'PATCH',   /* одинаково работает с PUT или PATCH */
        url: `${baseUrl}/${userID}`,
        headers:{
              Authorization: accessToken
            },
        body:{
            name:"Name Updated",
            email: genEmail,
            status:"active"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.name).to.be.equal('Name Updated');
            cy.request({
                method: 'DELETE',
                url: `${baseUrl}/${userID}`,
                failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body.data.message).to.be.equal('Resource not found');
            })
        })
        })
    })
})
