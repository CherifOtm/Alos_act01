# Alos_act01
### I) Exercice rendre sur moodle  :
   Question 1) pour voir uniquement les 10 premières valeurs, nous pouvons utiliser cette requete :
   
     http://localhost:3000/nfts?_limit=10


   Question 2) Pour voir uniquement les données qui commencent par la lettre M, nous pouvons utiliser cette requête :
   

    "GET", "http://localhost:3000/nfts"
	
    "les noms commencant par la lettre M:",response.body.filter((nfts) => nfts.name.startsWith("M")
	
	
   Question 3) signification de la ligne Num 6 : "response" peut ètre stocké dans le cache si validé par le serveur d'origine, mème si "response" est non-cacheable
   
### II) les étapes de tp :

        - Installation NodeJs : https://practicalprogramming.fr/tuto-install-node-js-windows
		
		- Installation le package json-server avec la commande : npm install -g json-server
		
		- Générer 100 enregistrements 
		
		- Sauvegarder les données générés dans un fichier "db.json"
		
		- Lancement le premier service : (la commande) json-server db.json 
		
		- Installation la bibliothèque unirest : (la commande) npm install unirest
		
		- Lancer la fonction :  node nft_index.js 
		





   
	 
    
