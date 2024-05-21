class menuprincipal extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
   
<style type="text/css">
 * {					/*elinina todos los margenes a todo alinea todos los li al borde*/
			margin:0px;
				padding:0px;
			}	
     ul {
				list-style:none;  /*quita el formato de punto y guiones de inicio de la lista */
			} 
 
 @media not screen and (max-width: 720px){   
      .menu {
          width: 100%;
          height: 50px;
         
          padding: 20px 10%;
          
          background-image: url(../imagenes/cabezera1.jpg)}	
			.menu > li {   /*li directos se refiere al primer nivel*/      				
			float:left;
               
		/*	box-shadow: 2px 2px 1px 1px #fff; /*sombreado*/
			}
 	.menu li a {    /*actua sobre todos los elementos de la clase menu  y los selectores a que esten dentro del li*/

				
				background-color:rgba(59,93,148,1);;
				color:#fff;     /*color texto*/
				text-decoration:none;/*elimina el subrayado de los enlaces*/
				padding:10px 12px; /*10 pixles de altura y 10 pixel largo*/
				display:block;
				width: 90px;/*tamanño del bloque*/
				height: 30px;
				box-shadow: 2px 2px 1px 1px #0062ff; /*sombreado*/				
				border: solid 1px #fff;/*borde en blanco*/
				text-align: center;
				border-radius: 5px;
                margin: 1px;
                
			}
			
			.menu li a:hover { /*actua sobre todos los elementos al pasar el raton*/
				color:#CF3;
				background-color:#603;
				
			}
     
     

			
			.menu li ul { /* a todos los submenus */
				display:none;/*todos los submenus desaparecen del segundo nivel en adelante*/
				position:absolute; /*con respeto al menu */
				min-width:140px;
			}
			
			.menu li:hover > ul {/* al menu de segundo nivel al pasar el raton se vuelve visible al recuperar la propiedad display:block que antes tenia display:none*/
				display:block;
			}
			
			.menu li ul li { /* los li derech que esten dentro de ul que esten dentro de li, osea para los submenus*/
				position:relative; /* lo pone para poder poner los submenus al lado*/
			}
			
			.menu li ul li ul {/* al tener posicion relativa los podemos desplazar -140 pix a la derecha*/				
				right:-115px; /*este se aplica a todos los submenus*/
				top:0px;
			}   
    
  }
    
/*ELEMENTOS RESPONSIVOS -----------------------------------------------------------*/

.icon__menu{
    font-size: 26px;
    color: white;
    cursor: pointer;
    width: 26px;
    height: 100%;
    display: none;
    margin-left: 50px;
   
   
}

#label__check{
   /* width: 26px;*/
    width:100%;
    height: 100%;
    background-attachment:fixed;
    background-image: url(../imagenes/cabezera.jpg);
     
   
}
    
#check__menu{
    display: none;
}
    
/*   MEDIA SCREEN  --------------------------------------------------------------  */    
  @media screen and (max-width: 720px){      
    
    .header__superior{
        padding: 10px;
    }
			
  /*  .menu{background-color: black;}	*/	
      .menu {background-image: url(../imagenes/cabezera.jpg)}	
	.menu >  li {   /*li directos se refiere al primer nivel*/      				
			display: flex;
             opacity: 0;
              visibility: hidden;
                height: 0px;
            }
    
    .menu >  li ul li {   /*li directos se refiere al segundo  nivel*/      				
			display: flex;
        flex-direction: row;
 			}
  			.menu li  a {    /*actua sobre todos los elementos de la clase menu  y los selectores a que esten dentro del li*/

				
				background-color:rgba(59,93,148,1);
				color:#fff;     /*color texto*/
				text-decoration:none;/*elimina el subrayado de los enlaces*/
				padding:10px 12px; /*10 pixles de altura y 10 pixel largo*/
				display:block;
              
				width: 90px;/*tamanño del bloque*/
				height: 30px;
								
				border: solid 1px #fff;/*borde en blanco*/
				text-align: center;
				border-radius: 5px;
                margin: 1px;
                
			}
			
			.menu li a:hover { /* propiedades al pasar el raton*/
				color:#CF3;
				background-color:#603;
				
			}
    
    	.menu li ul {
				display:none;/*todos los submenus desaparecen*/
				position:absolute; /*con respeto al menu */
				min-width:140px;
			}
    
    
    	.menu li:hover > ul{/* los li de menu al pasar el raton que sean directos de ul (esto lo dicho pero no le entiendo) aparecen el menu*/
				display: flex;
            flex-direction: row;
            
            left: 120px;
			}
    
    .menu li ul li:hover > ul{/* los li de menu al pasar el raton que sean directos de ul (esto lo dicho pero no le entiendo) aparecen el menu*/
     display:block;
        top:50px;
				 left: 80px;
             }        
        #label__check{
        display: block;
    }

    .icon__menu{
        display: flex;
    }

    #check__menu:checked ~ .menu > li{
   
       height: 50px;
        visibility: visible;
        opacity: 1;
    }
}
		
 </style>

   
     <input type="checkbox" id="check__menu">
                <label for="check__menu" id="label__check">
                   <img class="icon__menu" src="../imagenes/icono.png"/>
                </label>    
  <ul class="menu"> 
   <li> <a href="../index.html" >Inicio</a></li> 
    <li> <a href="../webRobotica/robotica.html" >Robotica</a></li> 
   <li> <a href="../webInterior/Interior.html" >vivienda</a> 
       <ul> 
           <li> <a href="../webInterior/interior.html" >Interior</a>   			
      	   </li>  
          <li> <a href="../webDomotica/Domotica.html">Domotica</a>    			 
   		  </li> 
       </ul>  
   </li> 
   <li> <a href="../webAutomatismos/index.html" >Automatismos</a> 
       <ul> 
           <li> <a href="../webAutomatismos/cableados.html">Cableados</a> 
      			 <ul> 
           			<li> <a href="../webAutomatismos/cableados.html">Control de Motores</a></li> 
           			<li> <a href="../webAutomatismos/cableados_analizar.html">Ejercicios A.Cableados</a></li> 
      			</ul>  
      	   </li>  

          <li> <a href="../webAutomatismos/programados.html">Programados</a> 
      			 <ul> 
           			<li> <a href="../webAutomatismos/programados.html">S7-200</a> 
           			<li> <a href="../webAutomatismos/logo.html">LOGO</a> 
           			<li> <a href="../webAutomatismos/tiaportal.html">TIA-PORTAL</a> 
      			</ul>  
   		  </li> 
       </ul>  
   </li> 

   <li> <a href="#" >Motor/Variador</a> 
       <ul> 
   		   <li> <a href="../webMotores/motores.html" >Motores</a> 
           <li> <a href="../webMotores/variadores.html">Variadores</a> 
           <li> <a href="../webMotores/variadores_practicas.html">Practicas Variadores</a> 
       </ul>  
   </li> 
   <li> <a href="../webRenovables/renovables.html" >Renovables</a></li> 
   <li> <a href="">Varios</a> 
       <ul> 
         <li> <a href="../webenlaces/enlaces.html">Enlaces</a></li> 
          <li> <a href="../arduino/index.html">Arduino</a></li> 
          <li> <a href="https://cifpmedinadelcampo.es/iea/" >CIFP Electricidad</a></li> 
         

       </ul>  
   </li> 
 </ul>



    `;
    }
}

window.customElements.define('menu-principal', menuprincipal);









class menuprincipalindex extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
   
<style type="text/css">
 * {					/*elinina todos los margenes a todo alinea todos los li al borde*/
			margin:0px;
				padding:0px;
			}	
     ul {
				list-style:none;  /*quita el formato de punto y guiones de inicio de la lista */
			} 
 
 @media not screen and (max-width: 720px){   
      .menu {
          width: 100%;
          height: 50px;
         
          padding: 20px 10%;
          
          background-image: url(imagenes/cabezera1.jpg)}	
			.menu > li {   /*li directos se refiere al primer nivel*/      				
			float:left;
               
			}
 	.menu li a {   
				
				background-color:rgba(59,93,148,1);;
				color:#fff;     
				text-decoration:none;
				padding:10px 12px; /*10 pixles de altura y 10 pixel largo*/
				display:block;
				width: 90px;/*tamanño del bloque*/
				height: 30px;
				box-shadow: 2px 2px 1px 1px #0062ff; /*sombreado*/				
				border: solid 1px #fff;/*borde en blanco*/
				text-align: center;
				border-radius: 5px;
                margin: 1px;
                
			}
			
			.menu li a:hover { /*actua sobre todos los elementos al pasar el raton*/
				color:#CF3;
				background-color:#603;
				
			}
     
     

			
			.menu li ul { /* a todos los submenus */
				display:none;/*todos los submenus desaparecen del segundo nivel en adelante*/
				position:absolute; /*con respeto al menu */
				min-width:140px;
			}
			
			.menu li:hover > ul {/* al menu de segundo nivel al pasar el raton se vuelve visible al recuperar la propiedad display:block que antes tenia display:none*/
				display:block;
			}
			
			.menu li ul li { /* los li derech que esten dentro de ul que esten dentro de li, osea para los submenus*/
				position:relative; /* lo pone para poder poner los submenus al lado*/
			}
			
			.menu li ul li ul {/* al tener posicion relativa los podemos desplazar -140 pix a la derecha*/				
				right:-115px; /*este se aplica a todos los submenus*/
				top:0px;
			}   
    
  }
    
/*ELEMENTOS RESPONSIVOS -----------------------------------------------------------*/

.icon__menu{
    font-size: 26px;
    color: white;
    cursor: pointer;
    width: 26px;
    height: 100%;
    display: none;
    margin-left: 50px;
   
   
}

#label__check{
   /* width: 26px;*/
    width:100%;
    height: 100%;
    background-attachment:fixed;
    background-image: url(imagenes/cabezera.jpg);
     
   
}
    
#check__menu{
    display: none;
}
    
/*   MEDIA SCREEN  --------------------------------------------------------------  */    
  @media screen and (max-width: 720px){      
    
    .header__superior{
        padding: 10px;
    }
			
  /*  .menu{background-color: black;}	*/	
      .menu {background-image: url(imagenes/cabezera.jpg)}	
	.menu >  li {   /*li directos se refiere al primer nivel*/      				
			display: flex;
             opacity: 0;
              visibility: hidden;
                height: 0px;
            }
    
    .menu >  li ul li {   /*li directos se refiere al segundo  nivel*/      				
			display: flex;
        flex-direction: row;
 			}
  			.menu li  a {    /*actua sobre todos los elementos de la clase menu  y los selectores a que esten dentro del li*/

				
				background-color:rgba(59,93,148,1);
				color:#fff;     /*color texto*/
				text-decoration:none;
				padding:10px 12px; 
				display:block;
              
				width: 90px;/*tamanño del bloque*/
				height: 30px;
				border: solid 1px #fff;
				text-align: center;
				border-radius: 5px;
                margin: 1px;
                
			}
			
			.menu li a:hover { /* propiedades al pasar el raton*/
				color:#CF3;
				background-color:#603;
				
			}
    
    	.menu li ul {
				display:none;/*todos los submenus desaparecen*/
				position:absolute; /*con respeto al menu */
				min-width:140px;
			}
    
    
    	.menu li:hover > ul{/* los li de menu al pasar el raton que sean directos de ul (esto lo dicho pero no le entiendo) aparecen el menu*/
				display: flex;
            flex-direction: row;
            
            left: 120px;
			}
    
    .menu li ul li:hover > ul{/* los li de menu al pasar el raton que sean directos de ul (esto lo dicho pero no le entiendo) aparecen el menu*/
     display:block;
        top:50px;
				 left: 80px;
             }        
        #label__check{
        display: block;
    }

    .icon__menu{
        display: flex;
    }

    #check__menu:checked ~ .menu > li{
   
       height: 50px;
        visibility: visible;
        opacity: 1;
    }
}
		
 </style>

   
     <input type="checkbox" id="check__menu">
                <label for="check__menu" id="label__check">
                   <img class="icon__menu" src="imagenes/icono.png"/>
                </label>    
  <ul class="menu"> 
   <li> <a href="index.html" >Inicio</a></li> 
    <li> <a href="webRobotica/robotica.html" >Robotica</a></li> 
   <li> <a href="webInterior/interior.html" >vivienda</a> 
       <ul> 
           <li> <a href="webInterior/Interior.html" >Interior</a>   			
      	   </li>  
          <li> <a href="webDomotica/Domotica.html">Domotica</a>    			 
   		  </li> 
       </ul>  
   </li> 
   <li> <a href="webAutomatismos/index.html" >Automatismos</a> 
       <ul> 
           <li> <a href="webAutomatismos/cableados.html">Cableados</a> 
      			 <ul> 
           			<li> <a href="webAutomatismos/cableados.html">Control de Motores</a></li> 
           			<li> <a href="webAutomatismos/cableados_analizar.html">Ejercicios A.Cableados</a></li> 
      			</ul>  
      	   </li>  

          <li> <a href="webAutomatismos/programados.html">Programados</a> 
      			 <ul> 
           			<li> <a href="webAutomatismos/programados.html">S7-200</a> 
           			<li> <a href="webAutomatismos/logo.html">LOGO</a> 
           			<li> <a href="webAutomatismos/tiaportal.html">TIA-PORTAL</a> 
      			</ul>  
   		  </li> 
       </ul>  
   </li> 

   <li> <a href="#" >Motor/Variador</a> 
       <ul> 
   		   <li> <a href="webMotores/motores.html" >Motores</a> 
           <li> <a href="webMotores/Variadores.html">Variadores</a> 
           <li> <a href="webMotores/variadores_practicas.html">Practicas Variadores</a> 
       </ul>  
   </li> 
   <li> <a href="webRenovables/renovables.html" >Renovables</a></li> 
   <li> <a href="">Varios</a> 
       <ul> 
         <li> <a href="webenlaces/enlaces.html">Enlaces</a></li> 
          <li> <a href="arduino/index.html">Arduino</a></li> 
          <li> <a href="https://cifpmedinadelcampo.es/iea/" >CIFP Electricidad</a></li> 
         

       </ul>  
   </li> 
 </ul>



    `;
    }
}

window.customElements.define('menu-principal-index', menuprincipalindex);
