function getStudent()
{	
	$.getStudent("/api", function(result)
	{		
	
		$.each(result, function(name, value)
		{				
			$("#student").append(name + " => " + value + "<br/>");
		});
		
		$("#student").show();
	});
}