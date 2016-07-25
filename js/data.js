var table1 = [

     {
         name: "Tree systems",
         image: "images/image1.png",
		 imageGrey: "images/grey-image1.png",
         nonIntegrated: { 1: 80.7, 2: 80.7, 3: 80.7, 4: 80.7, 5: 80.7, 6:80.7, 7: 80.7, 8:80.7, 9: 80.7, 10: 80.7 },
         integrated: { 1: 0, 2: 40.36, 3: 40.36, 4: 40.36, 5: 40.36, 6: 40.36, 7: 40.36, 8: 40.36, 9: 40.36, 10: 40.36 }	,
		 highLight: [],
		 desaturate: [2, 3, 4, 5, 6, 7, 8, 9, 10]		 
     },
     {
         name: "Manifolds",
         image: "images/image2.png",
 		 imageGrey: "images/grey-image2.png",
         nonIntegrated: { 1: 19.34, 2: 19.34, 3: 19.34, 4: 19.34, 5: 19.34, 6: 19.34, 7: 19.34, 8: 19.34, 9: 19.34, 10: 19.34 },
         integrated: { 1: 0, 2: 0, 3: 8.68, 4: 8.68, 5: 8.68, 6: 8.68, 7: 8.68, 8: 8.68, 9: 8.68, 10: 8.68 },
         highLight: [],	
		 desaturate: [3, 4, 5, 6, 7, 8, 9, 10]	
     },	
     {
         name: "Controls",
         image: "images/image3.png",
		 imageGrey: "images/grey-image3.png",
         nonIntegrated: {1: 52.96, 2: 52.96, 3: 52.96, 4: 52.96, 5: 52.96, 6: 52.96, 7: 52.96, 8: 52.96, 9: 52.96, 10: 52.96},
         integrated: { 1: 0, 2: 0, 3: 0, 4: 20.84, 5: 20.84, 6: 20.84, 7: 20.84, 8: 20.84, 9: 20.84, 10: 20.84 },
		 highLight: [],
		 desaturate: [4, 5, 6, 7, 8, 9, 10]
     },  
     {
         name: "TIE-IN SYSTEMS",
         image: "images/image0.png",
		  imageGrey: "images/grey-image0.png",
         nonIntegrated: {1: 36.98, 2: 36.98, 3: 36.98, 4: 36.98, 5: 36.98, 6: 36.98, 7: 36.98, 8: 36.98, 9: 36.98, 10: 36.98},
         integrated: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 20.96, 6: 20.96, 7: 20.96, 8: 20.96, 9: 20.96, 10: 20.96 },
		 highLight: [],
		 desaturate: [5, 6, 7, 8, 9, 10]
     }
];

var table2 = [
 {
         name: "Flowlines",
		 
         image: "images/image4.png",
		 imageGrey: "images/grey-image4.png",
         nonIntegrated: { 1: 97.84, 2: 97.84, 3: 97.84, 4: 97.84, 5: 97.84, 6: 97.84, 7: 97.84, 8: 97.84, 9: 97.84, 10: 97.84 },
         integrated: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 83.28, 7: 83.28, 8: 83.28, 9: 83.28, 10: 83.28 },
		 highLight: [],
		 desaturate: [6, 7, 8, 9, 10]		
     },
	  {
         name: "Heavy Lift",
		 
         image: "images/image4.png",
		 imageGrey: "images/grey-image4.png",
         nonIntegrated: {1: 5, 2: 5, 3: 5, 4: 5, 5: 5, 6: 5, 7: 5, 8: 5, 9: 5, 10: 5},
         integrated: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
		 highLight: [],
		 desaturate: [7, 8, 9, 10]	
     },
	  {
         name: "Construction",
		 
         image: "images/image6.png",
     	 imageGrey: "images/grey-image6.png",
         nonIntegrated: {1: 19.44, 2: 19.44, 3: 19.44, 4: 19.44, 5: 19.44, 6: 19.44, 7: 19.44, 8: 19.44, 9: 19.44, 10: 19.44},
         integrated: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 10.34, 9: 10.34, 10: 10.34 },
     	 highLight: [],
		 desaturate: [8, 9, 10]	
     },
	 {
         name: "Umbilical",
		 
         image: "images/image4.png",
		 imageGrey: "images/grey-image4.png",
         nonIntegrated: {1: 51.86, 2: 51.86, 3: 51.86, 4: 51.86, 5: 51.86, 6: 51.86, 7: 51.86, 8: 51.86, 9: 51.86, 10: 51.86},
         integrated: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
		 highLight: [],
		 desaturate: [9, 10]			
     }
];

var chart = {
	totalSaving: {

		1:0,
		2: 20.17,
		3: 25.5,
		4: 41.56,
		5: 49.57,		
		6: 56.85,
		7: 59.35,
		8: 63.9,
		9: 89.83,	
		10: 89.83	
		
	},
	
	totalSavingPercent: {

		1: 0.0,
		2: 50.0,
		3: 51.0,
		4: 54.3,
		5: 52.2,  
		6: 40.0,
		7: 40.5,
		8: 40.9,
		9: 49.3, 
		10: 49.3 
		
	},
	
	graphPercent: {
		1: 0,
		2: 20,
		3: 30,
		4: 40,		
		5: 55,
		6: 70,
		7: 80,
		8: 90,
		9: 100,	
		10: 100
	}
}