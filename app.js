angular.module('portfolioApp', [])
  .controller('PortfolioController', function($scope) {
    $scope.portfolio = {};

    $scope.generatePDF = function() {
      var doc = new jsPDF();

      doc.setFontSize(18);
      doc.text("Portfolio", 10, 10);

      doc.setFontSize(12);
      doc.text("Name: " + $scope.portfolio.name, 10, 20);
      doc.text("Email: " + $scope.portfolio.email, 10, 30);
      doc.text("Bio: " + $scope.portfolio.bio, 10, 40);
      doc.text("Skills: " + $scope.portfolio.skills, 10, 50);

      doc.save("portfolio.pdf");
    };
  });
