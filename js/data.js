var table1 = [

     {
         name: "Tree systems",
         image: "images/image1.png",
		 imageGrey: "images/grey-image1.png",
         nonIntegrated: { 1: 97.55, 2: 97.55, 3: 97.55, 4: 97.55, 5: 97.55, 6:97.55, 7: 97.55, 8:97.55, 9: 97.55, 10: 97.55 },
         integrated: { 1: 0, 2: 24.39, 3: 24.39, 4: 24.39, 5: 24.39, 6: 24.39, 7: 24.39, 8: 24.39, 9: 24.39, 10: 24.39 }	,
		 highLight: [],
		 desaturate: [2, 3, 4, 5, 6, 7, 8, 9, 10]		 
     },
     {
         name: "Manifolds",
         image: "images/image2.png",
 		 imageGrey: "images/grey-image2.png",
         nonIntegrated: { 1: 32.53, 2: 32.53, 3: 32.53, 4: 32.53, 5: 32.53, 6: 32.53, 7: 32.53, 8: 32.53, 9: 32.53, 10: 32.53 },
         integrated: { 1: 0, 2: 0, 3: 8.69, 4: 8.69, 5: 8.69, 6: 8.69, 7: 8.69, 8: 8.69, 9: 8.69, 10: 8.69 },
         highLight: [],	
		 desaturate: [3, 4, 5, 6, 7, 8, 9, 10]	
     },	
     {
         name: "Controls",
         image: "images/image3.png",
		 imageGrey: "images/grey-image3.png",
         nonIntegrated: {1: 30.69, 2: 30.69, 3: 30.69, 4: 30.69, 5: 30.69, 6: 30.69, 7: 30.69, 8: 30.69, 9: 30.69, 10: 30.69},
         integrated: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
		 highLight: [],
		 desaturate: [4, 5, 6, 7, 8, 9, 10]
     },  
     {
         name: "TIE-IN SYSTEMS",
         image: "images/image0.png",
		  imageGrey: "images/grey-image0.png",
         nonIntegrated: {1: 23.78, 2: 23.78, 3: 23.78, 4: 23.78, 5: 23.78, 6: 23.78, 7: 23.78, 8: 23.78, 9: 23.78, 10: 23.78},
         integrated: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 24.16, 6: 24.16, 7: 24.16, 8: 24.16, 9: 24.16, 10: 24.16 },
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
         integrated: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 83.3, 7: 83.3, 8: 83.3, 9: 83.3, 10: 83.3 },
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
         integrated: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 9.28, 9: 9.28, 10: 9.28 },
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
		2: 36.5,
		3: 48.4,
		4: 63.9,
		5: 63.7,		
		6: 71,
		7: 73.5,
		8: 78.6,
		9: 104.5,	
		10: 104.5	
		
	},
	
	graphPercent: {
		1: 0,
		2: 6,
		3: 15,
		4: 25,		
		5: 40,
		6: 50,
		7: 55,
		8: 80,
		9: 90,	
		10: 100
	}
}