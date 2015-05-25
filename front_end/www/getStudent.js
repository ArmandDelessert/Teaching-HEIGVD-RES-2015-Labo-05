function getStudent()
{	
	$.getJSON("/api", function(result)
	{		
	
		$.each(result, function(name, value)
		{				
			$("#student").append("Etudiant tire au sort :" + value + "<br/>");
		});
		
		$("#student").show();
	});
}