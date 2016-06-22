var table1 = [

     {
         name: "Tree system",
         image: "images/image1.png",
         nonIntegrated: { 1: 91, 2: 91, 3: 91, 4: 91, 5: 91, 6: 91, 7: 91, 8: 91, 9: 91, 10: 91 },
         integrated: { 1: 0, 2: 50, 3: 50, 4: 50, 5: 50, 6: 50, 7: 60, 8: 60, 9: 60, 10: 60 }	,
		 highLight: [],
		 desaturate: [2, 3, 4, 5]		 
     },
     {
         name: "Manifold / Plet",
         image: "images/image2.png",
         nonIntegrated: { 1: 30, 2: 30, 3: 30, 4: 30, 5: 30, 6: 30, 7: 30, 8: 30, 9: 30, 10: 30 },
         integrated: { 1: 0, 2: 0, 3: 35, 4: 45, 5: 45, 6: 45, 7: 45, 8: 45, 9: 55, 10: 55 },
         highLight: [],	
		 desaturate: [3, 4, 5]	
     },	
     {
         name: "Controls",
         image: "images/image3.png",
         nonIntegrated: {1: 34, 2: 34, 3: 34, 4: 34, 5: 34, 6: 34, 7: 34, 8: 34, 9: 34, 10: 34},
         integrated: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
		 highLight: [],
		 desaturate: [4, 5]
     },  
     {
         name: "TIE-IN SYSTEMS",
         image: "images/image0.png",
         nonIntegrated: {1: 80, 2: 80, 3: 80, 4: 80, 5: 80, 6: 80, 7: 80, 8: 80, 9: 80, 10: 80},
         integrated: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 80, 6: 80, 7: 80, 8: 80, 9: 80, 10: 80 },
		 highLight: [],
		 desaturate: [5]
     }
];

var table2 = [
 {
         name: "Flowlines",
		 subname: "(deep blue)",
         image: "images/image4.png",
         nonIntegrated: { 1: 83, 2: 83, 3: 83, 4: 83, 5: 83, 6: 83, 7: 83, 8: 83, 9: 83, 10: 83 },
         integrated: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 28, 7: 38, 8: 38, 9: 38, 10: 38 },
		 highLight: [],
		 desaturate: [6, 7, 8, 9]		
     },
	  {
         name: "Heavy Lift",
		 subname: "(Global 1200)",
         image: "images/image4.png",
         nonIntegrated: {1: 79, 2: 79, 3: 79, 4: 79, 5: 79, 6: 79, 7: 79, 8: 79, 9: 79, 10: 79},
         integrated: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 43, 8: 43, 9: 43, 10: 43 },
		 highLight: [],
		 desaturate: [7, 8, 9]	
     },
	  {
         name: "Construction",
		 subname: "(normand pioneer)",
         image: "images/image6.png",
         nonIntegrated: {1: 86, 2: 86, 3: 86, 4: 86, 5: 86, 6: 86, 7: 86, 8: 86, 9: 86, 10: 86},
         integrated: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 45, 9: 45, 10: 45 },
     	 highLight: [],
		 desaturate: [8, 9]	
     },
	 {
         name: "Umbilical",
		 subname: "(deep energy)",
         image: "images/image4.png",
         nonIntegrated: {1: 58, 2: 58, 3: 58, 4: 58, 5: 58, 6: 58, 7: 58, 8: 58, 9: 58, 10: 58},
         integrated: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 35, 10: 35 },
		 highLight: [],
		 desaturate: [9]			
     }
];

var chart = {
	totalSaving: {
		1: 30,
		2: 60,
		3: 90,
		4: 120,		
		5: 150,
		6: 180,
		7: 210,
		8: 240,
		9: 270,	
		10: 300
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