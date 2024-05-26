var ComingSoon = function () {

    return {
        //main function to initiate the module
        init: function () {
            var austDay = new Date();
            austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
            $('#defaultCountdown').countdown({until: austDay});
            $('#year').text(austDay.getFullYear());

            $.backstretch([
		            "../assets/pages/media/bg/1.jpg",
		            "../assets/pages/media/bg/2.jpg",
		            "../assets/pages/media/bg/3.jpg",
		    		"../assets/pages/media/bg/4.jpg"
		        ], {
		        fade: 750,
		        duration: 5000
		   });
        }

    };

}();

jQuery(document).ready(function() {    
   ComingSoon.init(); 
});