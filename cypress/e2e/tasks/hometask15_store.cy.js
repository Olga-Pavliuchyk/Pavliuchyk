describe('Api', () =>{
  const baseURL = 'https://petstore.swagger.io/v2/store';

  it('store', () => {    
    cy.request({
      method: 'POST',
      url:  `${baseURL}/order`,
      body: {
        id: 21,
        petId: 21,
        quantity: 1,
        shipDate: "2022-10-20T22:22:58.030Z",
        status: "placed",
        complete: true
        }
        }).then((response) => {            
      const { id } = response.body;
      expect(response.status).to.eq(200);
      expect(response.body.status).to.be.equal('placed');
      cy.request({
        method: 'GET',
        url:  `${baseURL}/order/${id}`}).then((response) => {
        cy.log('Response(order by id): ', JSON.stringify(response));
        expect(id).equal(21);
        cy.request({
          method: 'DELETE',
          url:  `${baseURL}/order/${id}`}).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body.status).to.be.equal(undefined);              
          })
        cy.request({
          method: 'GET',
          url:  `${baseURL}/inventory`}).then((response) => {
          expect(response.status).to.eq(200);
        })      
      });
      })
  })
})

