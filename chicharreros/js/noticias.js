$(document).ready(function(){
    $(".resumenNoticia").click(function(e){
        noticia = e.currentTarget.getAttribute('id');
        $("#noticiaConcreta").html(noticias[noticia]);
        $('html,body').animate({
            scrollTop: $("#noticiaConcreta").offset().top
        }, 1000);
    })
})

//Mock noticias
var noticias = {
    noticia1: "<h2>Los aeropuertos canarios registran más de 3,7 millones de pasajeros en marzo</h2><div><p>Los ocho aeropuertos canarios de la red de Aena registraron el pasado mes de marzo más de 3,7 millones de pasajeros, un 4,2% más que en el mismo mes de 2016. Cabe recordar que el año pasado la Semana Santa fue en marzo y este año es en abril, lo que repercute en la comparativa llevada a cabo.</p><p>De la cifra total de pasajeros comerciales, 2.649.321 corresponden a tráfico internacional, lo que refleja una subida del 6,8%, y 1.071.374 a nacional, un 1,5% menos que el mismo mes del año pasado.</p><p>Los aeropuertos del archipiélago con mayor tráfico de pasajeros fueron los de Gran Canaria y Tenerife Sur, con 1.173.182 (+2,8%) y 1.020.884 (+6,8%) respectivamente, ocupando el cuarto y sexto puesto de la red de Aena.</p><p>Les siguen el Aeropuerto de Lanzarote con 602.411 (+6,9%); Fuerteventura con 494.806 (+2%); Tenerife Norte, 353.727 (-1,5%); La Palma, con 111.554 y el mayor incremento porcentual, un 13,5% más; El Hierro, 12.670 (-4,7%), y La Gomera, con 3.053 pasajeros, un 1,4% menos.</p><p> lo que respecta al número de operaciones, los aeropuertos del archipiélago registraron 32.435, un 2,8% más. Del tráfico comercial, 16.456 fueron internacionales (+8,1%) y 14.417 nacionales (-1,6%). El tráfico de mercancías fue de 3.590 toneladas transportadas, un 11,5% más que en marzo de 2016.</p><p>Según los datos de Aena, el total de viajeros que pasaron por los aeropuertos canarios en el primer trimestre creció un 4,9%, hasta sumar 10.624.607, lo que supone 494.015 más que en el mismo periodo del año anterior. Del total de pasajeros comerciales, 7.516.480 correspondieron a vuelos internacionales, un 7,2% más, y 2.949.306 a nacionales, un 0,4% menos.</p><p>El número de operaciones registradas durante este periodo fue de 92.892, un 4,6% más, y el tráfico de mercancías transportadas ascendió a 9,4 toneladas, lo que supone un incremento del 6,4%.</p><h3>DATOS NACIONALES.</h3><p>A nivel nacional, los aeropuertos de la red de Aena han registrado el pasado mes de marzo más de 17 millones de pasajeros, un 4,5% más que en el mismo mes de 2016. De estos, 11.477.016 viajaron en vuelos internacionales, un 5% más que en marzo de 2016, y 5.656.804 lo hicieron en vuelos nacionales, un 3,5% más.</p><p>El Aeropuerto Adolfo Suárez Madrid-Barajas registró el mayor número de pasajeros el pasado mes, con 4.196.934, lo que representa un incremento del 5,2% con respecto a marzo de 2016. Le siguen Barcelona-El Prat, con 3.466.747 (+5% más); Málaga-Costa del Sol, con 1.199.855 (+9,4%); Gran Canaria, con 1.173.182 (+2,8%); Palma de Mallorca, con 1.107.698 (-7,7%); Tenerife Sur 1.020.884 (+6,8%); Alicante-Elche, con 907.603 (+8,4%).</p><p>En el primer trimestre del año el tráfico de pasajeros en los aeropuertos de la red de Aena creció un 6,3% y sumó un total de 45.455.785 viajeros.</p><p>En cuanto al número de operaciones se refiere, en marzo se realizaron en el totalidad de la red 158.262 movimientos de aeronaves, un 4,3% más que en el mismo mes del año anterior.</p><p>El aeropuerto que contabilizó mayor número de movimientos fue Adolfo Suárez Madrid-Barajas, con 31.405 vuelos (3%), seguido de Barcelona-El Prat, con 24.207 (+3,5%); Gran Canaria, con 10.382 (-0,2%); Palma de Mallorca, con 9.861 (-3,9%); Málaga-Costa del Sol, con 9.147 (+8,6%); Alicante-Elche, con 6.432 (8,9%) y Tenerife Sur, con 6.408 (+8,8%).</p><p>Durante el pasado mes de marzo se transportaron 79.345 toneladas de mercancías lo que se traduce en un aumento del 19,6% con respecto a marzo de 2016. Los cuatro aeropuertos que registraron mayor tráfico de mercancías fueron Adolfo Suárez Madrid-Barajas, con 41.275 toneladas (+18,5%); Barcelona-El Prat, con 13.670 toneladas (18,8%); Zaragoza, con 10.709 toneladas (+25,3%) y Vitoria, 5.523 toneladas (+25%).</p></div>",
    noticia2: "<h2>El nivel de satisfacción de los usuarios del Teleférico del Teide supera su máximo histórico</h2><div><p>El índice de satisfacción de los clientes del Teleférico del Teide ha alcanzado en enero un valor de 8,94 frente a los 8,45 observados en el verano de 2016 (8,22 en agosto y 8,71 en septiembre), un registro que supera incluso el máximo histórico hasta el momento observado en febrero de 2012 (8,73).</p><p>Éstos son algunos de los datos que se extraen de la 5ª oleada de la Encuestra de Satisfacción del Cliente de Teleférico del Teide, recogidos durante el pasado mes de enero con la realización de 420 entrevistas personales.</p><p>Los atributos del servicio mejor valorados fueron la facilidad de compra del ticket, el online ticket, el cuidado y mantenimiento de senderos y miradores, la limpieza y mantenimiento de las instalaciones, la atención al cliente por parte del personal y el tiempo de espera.</p><p>Los atributos en los que más aumenta la satisfacción de los clientes, respecto a la oleada de verano, tienen que ver con las últimas inversiones en infraestructuras y mejoras técnicas que ha realizado en el Teleférico del Teide. Los usuarios valoran especialmente el descenso en los tiempo de espera, la sala de espera, parking e información en taquilla.</p><p>En el mes de septiembre, tras la implantación y asentamiento del nuevo sistema de venta de entradas con reserva horaria y la reforma de las instalaciones de la estación inferior, ya se observó una mejora significativa en los niveles de satisfacción respecto a los resultados de agosto. La satisfacción con el tiempo de espera sigue aumentando en la presente oleada de enero, mientras que la satisfacción.</p><p>Destaca el descenso en la mención del tiempo de espera, que pasa de un 50% de menciones en agosto de 2016 a un 5% en la presente oleada. También disminuyen las demandas referidas al aparcamiento, la información en general o las aglomeraciones y desaparecen menciones a aspectos como la gestión de las colas, el cumplimiento de horarios del online ticket o la falta de sombra. La investigación fue realizada por la empresa Servicios Avanzados de Opinión.</p></div>",
    noticia3: "<h2>El Teide bate su récord de visitantes en 2016, con más de cuatro millones</h2><div><p>El Parque Nacional del Teide, declarado Patrimonio Mundial por la Unesco en 2007, logró el pasado año la cifra récord de 4.079.823 visitantes, lo que supone un aumento de 790.378 personas con respecto al año 2015. El anterior máximo histórico era de 3.836.683 visitantes y se produjo en el año 1999.</p><p>Este dato ha sido dado a conocer en la presentación del vídeo 'Teide enamorado', con el que se ha querido destacar la belleza y excelencias del Parque Nacional, y que ha contado con el presidente del Cabildo, Carlos Alonso; el consejero de Sostenibilidad y Medioambiente, José Antonio Valbuena; el director del Parque, Manuel Durban; el tenor Celso Albelo; el autor de la letra y música del tema 'Teide enamorado', Fernando Estévez, y el alcalde de La Orotava, Francisco Linares.</p><p>Las causas del aumento en el número de visitantes viene determinado por varios aspectos: la cantidad de ocupantes registrados en los muestreos de ocupación de vehículos, que esta vez es bastante elevada en relación a los datos de los últimos años; y el aumento del turismo producido en los últimos meses y el gran aumento de vehículos registrados por los aforadores, sobre todo en determinadas épocas del año.</p><p>En lo que se refiere a visitantes turistas, julio fue el mes con mayor número (algo similar ocurrió en 2011) y enero el que recibió el mínimo.</p><p>Otros motivos que han propiciado que el Parque Nacional del Teide haya batido su récord de visitantes coincide con el incremento de las visitas a la isla de Tenerife y al alto número de personas que visitaron este espacio natural debido a la floración del tajinaste en mayo del año pasado. Si bien no hay datos de 2016, estas cifras sitúan al Teide entre los Parques Nacionales más visitados de España.</p><h3>'TEIDE ENAMORADO'</h3><p>El Parque Nacional del Teide celebra este año su décimo aniversario como Patrimonio de la Humanidad y para conmemorar esta fecha se ha realizado el vídeo musical 'Teide enamorado', un proyecto con el objetivo de resaltar y promocionar la belleza y excelencias del Parque.</p><p>Para ello ha contado con la participación de Celso Albelo, tenor tinerfeño de renombre internacional y Medalla de Oro de la isla, al que acompaña la Asociación Instrumental y Vocal Amigos del Arte de Güímar que, juntos, han dado vida al vídeo, cuya letra y música son autoría de Fernando Estévez.</p><p>Carlos Alonso agradeció la participación del tenor y de Amigos del Arte y destacó que este vídeo 'supone otra manera de llevar el Teide a todos'. El presidente recordó que la Corporación insular está en el camino 'por relanzar los valores del Parque Nacional vinculado al nuevo modelo de gestión que quiere implantar el Cabildo'.</p><p>Para José Antonio Valbuena, este vídeo une dos enclaves únicos de Tenerife: el Teide y Anaga, macizo que en junio de 2015 fue declarado Reserva de la Biosfera. 'Estamos trabajando para realzar sus valores a través de una gestión más participativa', explicó el consejero.</p><p>'El Teide está enamorado perdidamente de Anaga', canta Celso Albelo en este vídeo que muestra imágenes de enorme belleza de distintos puntos del Parque Nacional, de su vegetación de su formación geológica y donde también se hace referencia al tradicional mar de nubes, a las palmeras y a dos municipios referentes como La Orotava y el Puerto de la Cruz, pasando por el mar y recorriendo la silueta de las montañas de Anaga.</p><p>Celso Albelo dijo sentirse 'orgulloso y agradecido' por haber participado en este proyecto que 'resume y demuestra qué es lo que nos diferencia del resto y que no es otra cosa que el talento que hay en esta isla combinado con un entorno natural inigualable'. Por su parte, Fernando Estévez reconoció sentir una 'alegría enorme' por ver este proyecto finalizado.</p><p>El alcalde de La Orotava, Francisco Linares, señaló que el Teide es santo y seña de Tenerife y seña de identidad de su municipio. Añadió que iniciativas como ésta 'contribuyen a que los jóvenes sepan qué es el Teide: un aula abierta'. Además, recordó que sigue trabajando para que su municipio también sea considerado Patrimonio Mundial.</p><p>El Parque Nacional, situado en el centro de la isla, es el mayor y más antiguo de los cuatro existentes en Canarias. Fue declarado Parque Nacional en 1954 y en 1989 recibió el Diploma Europeo a la Conservación en su categoría máxima. Posee dos centros de visitantes, uno en el Portillo y otro en el Parador Nacional, dedicados respectivamente a la naturaleza y a los usos tradicionales de Las Cañadas.</p></div>",
    noticia4: "<h2>Lanzan una campaña para sensibilizar sobre la conservación de los acantilados de Los Gigantes</h2><div><p>El Cabildo de Tenerife, a través de la Oficina de Gestión del Parque Rural de Teno, ha puesto en marcha una campaña de sensibilización que pretende minimizar los impactos negativos en los acantilados de Los Gigantes.</p><p>Este enclave que pertenece a Santiago del Teide se ha convertido en un lugar de elevada afluencia de visitantes que llegan para observar cetáceos, realizar deportes náuticos, senderismo y otras actividades que no siempre se realizan respetando los valores naturales.</p><p>Durante los últimos días, los agentes de Medio Ambiente del Cabildo han repartido información a los propietarios de embarcaciones, empresas del sector turístico-recreativo o gestión de los puertos deportivos. Asimismo, en colaboración con la Unidad Funcional de Fauna del Cabildo, se están llevando a cabo servicios de vigilancia y seguimiento ambiental en toda la costa.</p><p>Los Gigantes es un lugar singular, donde se encuentra la mayor concentración de especies amenazadas de todo el país. Estas paredes gigantes sostienen frágiles formas de vida y constituyen un espacio que alberga una gran riqueza natural. Especies animales y vegetales gravemente amenazadas y/o únicas en el mundo conviven en este majestuoso paisaje.</p><p>El Águila Pescadora (ahora mismo en periodo de nidificación y cría), el Halcón Tagarote, el Petrel de Bulwer y el Lagarto Gigante de Teno, entre otras, habitan en estos acantilados junto a la Col de Risco, la Siempreviva de Teno y otras especies vegetales.</p><p>A través de esta campaña se pide la colaboración y la aplicación de una serie de buenas prácticas para respetar el ecosistema: No tirar basura ni en el mar ni en tierra, no dar de comer a las gaviotas ni a los gatos (este último es el principal cazador del Lagarto Gigante de Teno), no acampar, evitar ruidos fuertes y megafonía que asusten a las aves, no fondear a menos de 250 metros de la costa, evitar las aglomeraciones de embarcaciones o disminuir la velocidad de las mismas al acercarse al acantilado, son algunas de las medidas planteadas en esta campaña.</p><p>Además, se recuerda que la zona que abarca desde la Punta del Diente de Ajo hasta la desembocadura del Barranco de Masca, donde nidifican un número importante de aves marinas y rapaces y donde vive el Lagarto Gigante de Teno, se encuentra clasificada como Zona de Uso Restringido, prohibiéndose explícitamente el acceso a las playas, acantilados y desembocaduras de los barrancos de esta zona entre el 1 de febrero y el 30 de junio, por lo que no se deben apoyar, mediante prestación de servicios, actividades desarrolladas en esta zona y que carezcan de la correspondiente autorización.</p></div>",
    noticia5: "<h2>Los atractivos turísticos de Tenerife, protagonistas de programas de televisión en Dinamarca, Chequia y Bélgica</h2><div><p>Los principales atractivos turísticos de Tenerife protagonizan estas semanas las emisiones televisivas en Chequia, Bélgica o Dinamarca, unas emisiones que suman en conjunto más de tres millones de espectadores, según informa el Cabildo.</p><p>El consejero insular de Turismo, Alberto Bernabé, explicó que 'la imagen de la isla en dichos países se verá reforzada con esos programas, lo que a su vez contribuirá a que potenciales viajeros se decanten por Tenerife para sus próximas vacaciones'.</p><p>'Los espectadores podrán conocer los principales recursos que hacen de la Isla un lugar tan atractivo para los viajeros, desde el clima agradable durante todo el año a la variedad de actividades que es posible realizar pasando por una oferta alojativa de primer nivel, por citar solo algunos aspectos', destacó.</p><p>Por su parte, la televisión danesa Channel DK4 estuvo en Tenerife del 6 al 16 de marzo para grabar tres programas de 45 minutos de duración cada uno. En ellos se mostrarán aspectos como la diversidad de espacios naturales protegidos o la riqueza gastronómica, paisajística y cultural isleña.</p><p>Cada programa cuenta con 1,8 millones de telespectadores. El primero de los episodios se emitirá este viernes, día 14 de abril; el segundo, el día 21 y el tercero, el 28 del mismo mes.</p><p>También un equipo de la televisión pública checa estuvo en la Isla el pasado mes de febrero, donde grabó el documental de viajes On The Road para el canal CT2, especializado en la parte desconocida y de naturaleza de los diferentes destinos turísticos que visita.</p><p>El reportaje, de 25 minutos de duración, se ha emitido recientemente, y su audiencia estimada se situó en un millón de espectadores. Entre las localizaciones elegidas se incluyó el Loro Parque, el Auditorio de Tenerife Adán Martín de Tenerife, Masca, La Laguna, Santa Cruz o el parque etnográfico Pirámides de Güímar, además de la sede de la afilarmónica Ni Fu-Ni Fa como muestra del Carnaval tinerfeño.</p><p>En cuanto a Bélgica, el programa de la televisión Bartel Goes Wild se ha decantado igualmente por Tenerife para grabar una de sus entregas, cada una de las cuales posee una audiencia superior a los 400.000 espectadores. Se trata de una emisión televisiva de aventuras en la que dos personajes famosos de ese país participan en un desafío de supervivencia de tres días haciendo senderismo.</p></div>",
    noticia6: "<h2>El lunes se abre el plazo de reserva de mesas para el Baile de Magos de Santa Cruz</h2><div><p>El Ayuntamiento de Santa Cruz de Tenerife, a través del Organismo Autónomo de Fiestas y Actividades Recreativas (OAFAR), abrirá este lunes el plazo de reserva de mesas para el Baile de Magos de las Fiestas de Mayo, que se celebrará el 2 de mayo en la calle de La Noria y alrededores.</p><p>Los interesados podrán solicitar hasta un máximo de cuatro mesas por persona del total de 665, con diez sillas cada una, que se distribuirán entre las calles de La Noria, Candelaria, Bravo Murillo, Afilarmónica Ni Fú-Ni Fá y Campo Castro, y las plazas de Europa y de La Concepción. El plazo finalizará una vez se complete la solicitud de la totalidad de las unidades.</p><p>El precio de la reserva será de diez euros por mesa. Con la finalidad de facilitar los trámites del abono de este importe a los ciudadanos, el Ayuntamiento y Cajasiete renuevan el acuerdo por el que la firma bancaria vuelve a convertirse en patrocinadora de las Fiestas de Mayo de Santa Cruz.</p><p>Dicho convenio permitirá realizar el pago a través de los datáfonos que la entidad bancaria instalará en la sede de Fiestas. De esta manera, los interesados podrán elegir la mesa sobre el plano que tendrán a su disposición en las oficinas municipales, ubicadas en la calle de La Noria número 7, y realizar el pago mediante tarjeta de crédito o débito en una sola gestión.</p><p>Además, Cajasiete habilitará las alternativas de pago habituales, como son el ingreso en efectivo en los cajeros de la entidad o en cualquiera de las 14 oficinas que tiene Cajasiete en Santa Cruz, junto con el abono a través de internet en la web www.cajasiete.com</p><p>El lunes también finalizan los plazos de inscripción para las candidatas a reinas de las Fiestas de Mayo, en sus modalidades adulta e infantil, así como para los participantes en concursos de Cruces Escolares y de Cruces de Flores y para intervenir en la Exposición de Flores, Plantas y Artesanía Tradicional Canaria. Por otra parte, la inscripción para los concursantes en los certámenes de trajes regionales y de comidas típicas permanecerán abiertos hasta el 19 de mayo.</p><p>Las Fiestas de Mayo 2017 darán comienzo el miércoles 26 de abril con la lectura del pregón de las fiestas, que este año correrá a cargo de Andrés Orozco. Esta primera cita se celebrará en la Fuente de los Cisnes del parque García Sanabria a las 20.00 horas.</p></div>"
}
