describe('Buscar repositório pelo owner e nome do repositório mas owner errado', () => {
  it('Deve buscar informações de um repositório usando API REST', () => {
    cy.request({
      method: 'GET',
      url:'/repos/victasdasorhugofr/siac',
      failOnStatusCode: false
    })
      .should((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('message', 'Not Found');
      });
  });
});

describe('Buscar repositório pelo owner e nome do repositório mas repositório errado', () => {
  it('Deve buscar informações de um repositório usando API REST', () => {
    cy.request({
      method: 'GET',
      url:'/repos/victorhugofr/siasdaac',
      failOnStatusCode: false
    })
      .should((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('message', 'Not Found');
      });
  });
});
  
  
describe('Buscar repositório pelo owner e nome do repositório', () => {
    it('Deve buscar informações de um repositório usando API REST', () => {
      cy.request('/repos/victorhugofr/siac')
        .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('name', 'siac');
          expect(response.body).to.have.property('owner');
          expect(response.body).to.have.property('description');
        });
    });
});

describe('Buscar atividade do repositório pelo owner e nome do repositório mas repositório errado', () => {
  it('Deve buscar informações de um repositório usando API REST', () => {
    cy.request({
      method: 'GET',
      url:'/repos/victorhugofr/siasdaac/activity',
      failOnStatusCode: false
    })
      .should((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('message', 'Not Found');
      });
  });
});

describe('Buscar atividade do repositório pelo owner e nome do repositório mas owner errado', () => {
  it('Deve buscar informações de um repositório usando API REST', () => {
    cy.request({
      method: 'GET',
      url:'/repos/victoasdasdsdasasasrhugofr/siac/activity',
      failOnStatusCode: false
    })
      .should((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('message', 'Not Found');
      });
  });
});

describe('Buscar atividade do repositório pelo owner e nome do repositório', () => {
  it('Deve buscar informações de um repositório usando API REST', () => {
    cy.request('/repos/victorhugofr/siac/activity')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array').and.to.have.length.greaterThan(0);
      });
  });
});

describe('Buscar lista de contribuidores pelo owner e nome do repositório mas repositório errado', () => {
  it('Deve buscar informações de um repositório usando API REST', () => {
    cy.request({
      method: 'GET',
      url:'/repos/victorhugofr/siasdaac/contributors',
      failOnStatusCode: false
    })
      .should((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('message', 'Not Found');
      });
  });
});

describe('Buscar lista de contribuidores do repositório pelo owner e nome do repositório mas owner errado', () => {
  it('Deve buscar informações de um repositório usando API REST', () => {
    cy.request({
      method: 'GET',
      url:'/repos/victoasdasdsdasasasrhugofr/siac/contributors',
      failOnStatusCode: false
    })
      .should((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('message', 'Not Found');
      });
  });
});

describe('Buscar lista de contribuidores do repositório pelo owner e nome do repositório', () => {
  it('Deve buscar informações de um repositório usando API REST', () => {
    cy.request('/repos/public-apis/public-apis/contributors')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array').and.to.have.length.greaterThan(0);
      });
  });
});

describe('Buscar lista de contribuidores pelo owner e nome do repositório mas repositório errado', () => {
  it('Deve buscar informações de um repositório usando API REST', () => {
    cy.request({
      method: 'GET',
      url:'/repos/victorhugofr/siasdaac/languages',
      failOnStatusCode: false
    })
      .should((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('message', 'Not Found');
      });
  });
});

describe('Buscar lista de contribuidores do repositório pelo owner e nome do repositório mas owner errado', () => {
  it('Deve buscar informações de um repositório usando API REST', () => {
    cy.request({
      method: 'GET',
      url:'/repos/victoasdasdsdasasasrhugofr/siac/languages',
      failOnStatusCode: false
    })
      .should((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('message', 'Not Found');
      });
  });
});

describe('Buscar lista de contribuidores do repositório pelo owner e nome do repositório', () => {
  it('Deve buscar informações de um repositório usando API REST', () => {
    cy.request('/repos/public-apis/public-apis/languages')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.empty;
      });
  });
});
  