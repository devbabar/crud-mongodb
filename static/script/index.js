$(document).ready(function(){

	// Without refreshing the page, on submit, will submit the form and load the List table
	$('#add-form').on('submit',function(e){
		e.preventDefault();
		var $url = $(this).attr('action');
		$.ajax({
			url:$url,
			data: $('form').serialize(),
			dataType:'json',
			type:'POST',
			success: function(data){
				var $url2 = $('#list-btn').attr('href');
				$('#main-container').load($url2,'#test');
			},

			error: function(error){
				console.log(error);
			}
		});
	});

	// Without refreshing the page, on submit, will submit the form and load the List table
	$('#update-form').on('submit',function(e){
		e.preventDefault();
		var $url = $(this).attr('action');
		$.ajax({
			url:$url,
			data: $('form').serialize(),
			// dataType:'json',
			type:'POST',
			success: function(){
				var $url2 = $('#list-btn').attr('href');
				$('#main-container').load($url2,'#test');
			},

			error: function(error){
				console.log(error);
			}
		});
	});

	//Custom function to avoid rewriting the code
	function formSubmitOperation(divId){	
		$(divId).click(function(e){
			e.preventDefault();

			var value = $(this).attr('id');
			var $url = $(this).attr('href');

			$('#main-container').load($url,'#test',function(){
				if( value == 'delete-btn'){
					$(".show-delete-btn").removeClass("hidden");
				}else if(value == 'update-btn'){
					$(".show-btn").removeClass("hidden");
				}
			});
		});					
	}

	

	// caching the DOM elements for later use
	var add = $("#add-btn");
	var update = $("tbody#body > tr > td> #update-form-ajax");
	var delBtn = $("#delete-btn");
	var updateBtn = $('#update-btn');
	var listBtn = $('#list-btn');
	var del = $("tbody#body > tr > td> #delete-ajax");

	// Load Create form without refreshing the page
	$(add).click(formSubmitOperation(add));

	// Load Update form without refreshing the page
	$(update).click(formSubmitOperation(update));

	// Load Delete page without refreshing the page
	$(delBtn).click(formSubmitOperation(delBtn));

	// Load Update page without refreshing the page		
	$(updateBtn).click(formSubmitOperation(updateBtn));

	// Load List page without refreshing the page
	$(listBtn).click(formSubmitOperation(listBtn));

	// Load Delete item without refreshing the page
	$(del).click(formSubmitOperation(del));


});
















































