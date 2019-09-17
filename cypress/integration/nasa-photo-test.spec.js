import { isTSAnyKeyword } from "@babel/types";


  //test to determine if the title can be found on the page
  describe("Nasa Photo of the Day Test", function() {
    it('Visits Nasa Photo of the Day React App', function() {
      cy.visit("http://localhost:3000")

      cy.contains("photo")           
      
    })
  })
