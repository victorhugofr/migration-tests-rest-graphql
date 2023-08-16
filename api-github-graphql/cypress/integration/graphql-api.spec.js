// describe('Buscar repositório pelo owner e nome do repositório mas owner errado', () => {
//   it('Deve buscar informações de um repositório usando API GraphQL', () => {
//     cy.request({
//       method: 'POST',
//       url: '/graphql',
//       headers: {
//         'Authorization': 'Bearer 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',
//       },
//       body: {
//         query: `
//           {
//             repository(owner: "owner_inexistente", name: "siac") {
//               name
//             }
//           }
//         `
//       },
//       failOnStatusCode: false,
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       expect(response.body.errors[0].message).to.include('Could not resolve to a Repository');
//     });
//   });
// });

// describe('Buscar repositório pelo owner e nome do repositório mas repositório errado', () => {
//   it('Deve buscar informações de um repositório usando API GraphQL', () => {
//     cy.request({
//       method: 'POST',
//       url: '/graphql',
//       headers: {
//         'Authorization': 'Bearer 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',
//       },
//       body: {
//         query: `
//           {
//             repository(owner: "victorhugofr", name: "repositorio_inexistente") {
//               name
//             }
//           }
//         `
//       },
//       failOnStatusCode: false,
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       expect(response.body.errors[0].message).to.include('Could not resolve to a Repository');
//     });
//   });
// });

// describe('Buscar repositório pelo owner e nome do repositório', () => {
//   it('Deve buscar informações de um repositório usando API GraphQL', () => {
//     cy.request({
//       method: 'POST',
//       url: '/graphql',
//       headers: {
//         'Authorization': 'Bearer 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',
//       },
//       body: {
//         query: `
//           {
//             repository(owner: "victorhugofr", name: "siac") {
//               name
//               owner {
//                 login
//               }
//               description
//             }
//           }
//         `
//       }
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       expect(response.body.data.repository).to.have.property('name', 'siac');
//       expect(response.body.data.repository.owner).to.have.property('login', 'victorhugofr');
//       expect(response.body.data.repository).to.have.property('description');
//     });
//   });
// });

// describe('Buscar atividade do repositório pelo owner e nome do repositório mas repositório errado', () => {
//   it('Deve buscar informações de um repositório usando API GraphQL', () => {
//     cy.request({
//       method: 'POST',
//       url: '/graphql',
//       headers: {
//         'Authorization': 'Bearer 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',
//       },
//       body: {
//         query: `
//           {
//             repository(owner: "victorhugofr", name: "repositorio_inexistente") {
//               name
//             }
//           }
//         `
//       },
//       failOnStatusCode: false,
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       expect(response.body.errors[0].message).to.include('Could not resolve to a Repository');
//     });
//   });
// });

// describe('Buscar atividade do repositório pelo owner e nome do repositório mas owner errado', () => {
//   it('Deve buscar informações de um repositório usando API GraphQL', () => {
//     cy.request({
//       method: 'POST',
//       url: '/graphql',
//       headers: {
//         'Authorization': 'Bearer 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',
//       },
//       body: {
//         query: `
//           {
//             repository(owner: "owner_inexistente", name: "siac") {
//               name
//             }
//           }
//         `
//       },
//       failOnStatusCode: false,
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       expect(response.body.errors[0].message).to.include('Could not resolve to a Repository');
//     });
//   });
// });

// describe('Buscar atividade do repositório pelo owner e nome do repositório', () => {
//   it('Deve buscar informações de um repositório usando API GraphQL', () => {
//     cy.request({
//       method: 'POST',
//       url: '/graphql',
//       headers: {
//         'Authorization': 'Bearer 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',
//       },
//       body: {
//         query: `
//           {
//             repository(owner: "victorhugofr", name: "siac") {
//               name
//               owner {
//                 login
//               }
//               defaultBranchRef {
//                 target {
//                   ... on Commit {
//                     history(first: 10) {
//                       totalCount
//                       nodes {
//                         committedDate
//                         author {
//                           name
//                           email
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         `
//       }
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       const commits = response.body.data.repository.defaultBranchRef.target.history.nodes;
//       expect(commits).to.be.an('array').and.to.have.length.greaterThan(0);
//     });
//   });
// });

// describe('Buscar lista de contribuidores pelo owner e nome do repositório mas repositório errado', () => {
//   it('Deve buscar informações de um repositório usando API GraphQL', () => {
//     cy.request({
//       method: 'POST',
//       url: '/graphql',
//       headers: {
//         'Authorization': 'Bearer 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',
//       },
//       body: {
//         query: `
//           {
//             repository(owner: "victorhugofr", name: "repositorio_inexistente") {
//               name
//             }
//           }
//         `
//       },
//       failOnStatusCode: false,
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       expect(response.body.errors[0].message).to.include('Could not resolve to a Repository');
//     });
//   });
// });

// describe('Buscar lista de contribuidores do repositório pelo owner e nome do repositório mas owner errado', () => {
//   it('Deve buscar informações de um repositório usando API GraphQL', () => {
//     cy.request({
//       method: 'POST',
//       url: '/graphql',
//       headers: {
//         'Authorization': 'Bearer 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',
//       },
//       body: {
//         query: `
//           {
//             repository(owner: "owner_inexistente", name: "siac") {
//               name
//             }
//           }
//         `
//       },
//       failOnStatusCode: false,
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       expect(response.body.errors[0].message).to.include('Could not resolve to a Repository');
//     });
//   });
// });

// describe('Buscar lista de contribuidores do repositório pelo owner e nome do repositório', () => {
//   it('Deve buscar informações de um repositório usando API GraphQL', () => {
//     cy.request({
//       method: 'POST',
//       url: '/graphql',
//       headers: {
//         'Authorization': 'Bearer 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',
//       },
//       body: {
//         query: `
//           {
//             repository(owner: "victorhugofr", name: "codeminio") {
//               name
//               collaborators(first: 10) {
//                 totalCount
//                 nodes {
//                   login
//                 }
//               }
//             }
//           }
//         `
//       }
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       const collaborators = response.body.data.repository.collaborators.nodes;
//       expect(collaborators).to.be.an('array').and.to.have.length.greaterThan(0);
//     });
//   });
// });

// describe('Buscar lista de linguagens do repositório pelo owner e nome do repositório mas repositório errado', () => {
//   it('Deve buscar informações de um repositório usando API GraphQL', () => {
//     cy.request({
//       method: 'POST',
//       url: '/graphql',
//       headers: {
//         'Authorization': 'Bearer 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',
//       },
//       body: {
//         query: `
//           {
//             repository(owner: "victorhugofr", name: "repositorio_inexistente") {
//               name
//             }
//           }
//         `
//       },
//       failOnStatusCode: false,
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       expect(response.body.errors[0].message).to.include('Could not resolve to a Repository');
//     });
//   });
// });

describe('Buscar lista de linguagens do repositório pelo owner e nome do repositório', () => {
  it('Deve buscar informações de um repositório usando API GraphQL', () => {
    cy.request({
      method: 'POST',
      url: '/graphql',
      headers: {
        'Authorization': 'Bearer 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',
      },
      body: {
        query: `
          {
            repository(owner: "victorhugofr", name: "codeminio") {
              name
              languages(first: 10) {
                totalCount
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        `
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      const languages = response.body.data.repository.languages.edges;
      expect(languages).to.be.an('array').and.to.have.length.greaterThan(0);
    });
  });
});