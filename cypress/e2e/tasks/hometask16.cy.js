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