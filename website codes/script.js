var Aboutus = document.querySelector("#Aboutus");
var Products = document.querySelector("#Products");
var Feedback = document.querySelector("#Feedback");

var visiblePage = Aboutus;

function showAboutus() {
    if (visiblePage != Aboutus) 
	{visiblePage.style.display = "none";
        Aboutus.style.display = "block";
        visiblePage = Aboutus;
    }
}

function showProducts() {
    if (visiblePage != Products) 
	{visiblePage.style.display = "none";
        Products.style.display = "block";
        visiblePage = Products;
    }
}

function showFeedback() {
    if (visiblePage != Feedback) 
	{visiblePage.style.display = "none";
        Feedback.style.display = "block";
        visiblePage = Feedback;
    }
}