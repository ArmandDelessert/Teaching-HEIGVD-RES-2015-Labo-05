<html>
	<head>
		<title>Application WEB</title>		
		<script src="jquery-2.1.4.js"></script>
		<script type="text/javascript" src="getStudent.js"></script>
	</head>
	<body>		
		<p>
			IP du serveur qui a repondu : <?php echo $_SERVER['SERVER_ADDR']; ?>
			<br/>
		</p>
	
		<h1>Tirer une personne au hasard</h1>
		
		<p>
			<button type="button" name="getStudent" onClick="getStudent();">C'est parti !
			</button>
			
			<div id="student">
			</div>
			<br/>
		</p>
	</body>
</html>