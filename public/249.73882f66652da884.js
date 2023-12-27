"use strict";var m=(v,g,u)=>{if(g.has(v))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(v):g.set(v,u)};(self.webpackChunkencuestas_app=self.webpackChunkencuestas_app||[]).push([[249],{7249:(v,g,u)=>{var x,A,C,y,q,U,k;u.r(g),u.d(g,{EncuestaModule:()=>dt});var l=u(6895),p=u(3158),w=u(5226),d=u.n(w),t=u(8256),T=u(4621),F=u(3469);function I(n,r){1&n&&(t.TgZ(0,"span",25),t._uU(1,"No"),t.qZA())}function J(n,r){1&n&&(t.TgZ(0,"span",26),t._uU(1,"Si"),t.qZA())}function D(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td",8),t._uU(2),t.qZA(),t.TgZ(3,"td",9),t._uU(4),t.qZA(),t.TgZ(5,"td",10),t._uU(6),t.ALo(7,"slice"),t.qZA(),t.TgZ(8,"td",11),t._uU(9),t.ALo(10,"date"),t.qZA(),t.TgZ(11,"td",12),t.YNc(12,I,2,0,"span",13),t.YNc(13,J,2,0,"span",14),t.qZA(),t.TgZ(14,"td")(15,"button",15),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.verResumen(null==a?null:a.id))}),t._UZ(16,"i",16),t.qZA(),t.TgZ(17,"button",17),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.verEncuesta(null==a?null:a.hash))}),t._UZ(18,"i",18),t.qZA(),t.TgZ(19,"button",19),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.publicarEncuesta(a.id))}),t._UZ(20,"i",20),t.qZA(),t.TgZ(21,"button",21),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.eliminarEncuesta(a.id))}),t._UZ(22,"i",22),t.qZA(),t.TgZ(23,"button",23),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.editarEncuesta(a.id))}),t._UZ(24,"i",24),t.qZA()()()}if(2&n){const e=r.$implicit;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.titulo),t.xp6(2),t.hij("",t.Dn7(7,6,e.descripcion,0,27),"..."),t.xp6(3),t.Oqu(t.xi3(10,10,e.fechaFinal,"short")),t.xp6(3),t.Q6J("ngIf",!e.estado),t.xp6(1),t.Q6J("ngIf",e.estado)}}const Y=function(){return["nueva-encuesta"]};let S=(()=>{class n{constructor(e,i,o){this.encuestaService=e,this.router=i,this.cookie=o,this.encuestas=[]}ngAfterViewInit(){setTimeout(()=>{this.id=this.cookie.get("id"),this.obtenerEncuestas()},200)}ngOnInit(){}obtenerEncuestas(){this.encuestaService.obtenerEncuestas(this.id).subscribe(e=>{this.encuestas=e})}publicarEncuesta(e){this.encuestaService.publicarEncuesta(e).subscribe(i=>{this.obtenerEncuestas()})}editarEncuesta(e){this.router.navigateByUrl("/home/encuestas/editar-encuesta/"+e)}verEncuesta(e){this.router.navigateByUrl("/home/encuestas/ver-encuesta/"+e)}verResumen(e){this.router.navigateByUrl("/home/encuestas/resumen/"+e)}eliminarEncuesta(e){d().fire({title:"Estas seguro?",text:"Estos cambios no podran ser revertidos!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!",cancelButtonText:"Cancelar"}).then(i=>{i.isConfirmed&&this.encuestaService.eliminarEncuesta(e).subscribe(o=>{this.obtenerEncuestas(),d().fire("Deleted!","El registro ha sido eliminado.","success")})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T.Y),t.Y36(p.F0),t.Y36(F.N))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-listado-encuesta"]],decls:24,vars:3,consts:[[1,"section","row"],[1,"header"],[1,"header__title"],[1,"btn","btn-sm","btn-success",3,"routerLink"],[1,"table-responsive"],[1,"table"],[1,"action"],[4,"ngFor","ngForOf"],["data-label","Codigo"],["data-label","T\xedtulo"],["data-label","Descripci\xf3n"],["data-label","Fecha cierre"],["data-label","Publicado"],["class","badge text-bg-danger",4,"ngIf"],["class","badge text-bg-success",4,"ngIf"],["title","Lista de respuestas",1,"button",3,"click"],[1,"fa-solid","fa-people-group"],["title","Ver",1,"button","btn-info",3,"click"],[1,"fa-regular","fa-eye"],["title","Publicar",1,"button","button-primary",3,"click"],[1,"fa-solid","fa-bullhorn"],["title","Eliminar",1,"button","delete-button",3,"click"],[1,"fa-regular","fa-trash-can"],["title","Modifica",1,"button","btn-warning",3,"click"],[1,"fa-regular","fa-pen-to-square"],[1,"badge","text-bg-danger"],[1,"badge","text-bg-success"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0)(1,"header",1)(2,"h3",2),t._uU(3,"Listado de encuesta"),t.qZA(),t.TgZ(4,"a",3),t._uU(5,"Agregar"),t.qZA()(),t.TgZ(6,"div",4)(7,"table",5)(8,"thead")(9,"tr")(10,"th"),t._uU(11,"C\xf3digo"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"T\xedtulo"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Descripci\xf3n"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Fecha cierre"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Publicado"),t.qZA(),t.TgZ(20,"th",6),t._uU(21,"Acciones"),t.qZA()()(),t.TgZ(22,"tbody"),t.YNc(23,D,25,13,"tr",7),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("routerLink",t.DdM(2,Y)),t.xp6(19),t.Q6J("ngForOf",i.encuestas))},dependencies:[l.sg,l.O5,p.yS,l.OU,l.uU]}),n})();var s=u(433);function L(n,r){1&n&&(t.TgZ(0,"small",18),t._uU(1,"El titulo de la encuesta es obligatorio."),t.qZA())}function P(n,r){1&n&&(t.TgZ(0,"small",18),t._uU(1,"La descripcion de la encuesta es obligatoria."),t.qZA())}function G(n,r){1&n&&(t.TgZ(0,"small",18),t._uU(1,"Debe ingresar una fecha de cierre para la encuesta."),t.qZA())}function B(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"input",19),t.qZA(),t.TgZ(5,"td")(6,"button",20),t.NdJ("click",function(){const a=t.CHM(e).index,c=t.oxw();return t.KtG(c.eliminarGrupo(a))}),t._uU(7,"Borrar"),t.qZA()()()}if(2&n){const e=r.index;t.xp6(2),t.Oqu(e+1),t.xp6(2),t.Q6J("formControlName",e)}}const R=function(){return["/home/encuestas"]};let $=(()=>{class n{constructor(e,i,o){this.encuestaService=e,this.router=i,this.cookie=o,this.encuestaForm=new s.cw({titulo:new s.NI("",s.kI.required),descripcion:new s.NI("",s.kI.required),idUsuario:new s.NI(""),fechaFinal:new s.NI("",s.kI.required),grupos:new s.Oe([])}),this.formSubmit=!1}ngOnInit(){let e=parseInt(this.cookie.get("id"));this.encuestaForm.get("idUsuario")?.setValue(e)}get grupos(){return this.encuestaForm.get("grupos")}guardarEncuesta(){this.formSubmit=!0,!this.encuestaForm.invalid&&this.encuestaService.guardarEncuesta(this.encuestaForm.value).subscribe(e=>{e&&this.router.navigateByUrl("/home/encuestas")})}validarInput(e){return!(!this.encuestaForm.get(e).invalid||!this.formSubmit)}agregarGrupo(){this.grupos.push(new s.NI("",s.kI.required))}eliminarGrupo(e){this.grupos.removeAt(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T.Y),t.Y36(p.F0),t.Y36(F.N))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-agregar-encuesta"]],decls:44,vars:7,consts:[[1,"section"],[1,"d-flex"],[1,"btn","btn-sm","btn-primary",3,"routerLink"],[3,"formGroup","submit"],[1,"row","mx-auto"],[1,"col-md-6"],[1,"mb-3"],["for",""],["type","text","formControlName","titulo","placeholder","Ingrese el titulo de la encuesta",1,"form-control"],["class","text-danger",4,"ngIf"],["type","text","formControlName","descripcion","placeholder","Descripcion",1,"form-control"],["type","datetime-local","formControlName","fechaFinal","placeholder","Fecha de cierre",1,"form-control"],[1,"btn","btn-sm","btn-success"],[1,"table"],[1,"thead-dark"],["formArrayName","grupos"],[4,"ngFor","ngForOf"],["type","button",1,"btn","btn-sm","btn-primary",3,"click"],[1,"text-danger"],["type","text",1,"form-control",3,"formControlName"],["type","button",1,"btn","btn-sm","btn-danger",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"a",2),t._uU(4,"Volver"),t.qZA()()(),t.TgZ(5,"form",3),t.NdJ("submit",function(){return i.guardarEncuesta()}),t.TgZ(6,"div",4)(7,"div",5)(8,"h3"),t._uU(9,"Agregar encuesta"),t.qZA(),t.TgZ(10,"div",6)(11,"label",7),t._uU(12,"Titulo de la encuesta"),t.qZA(),t._UZ(13,"input",8),t.YNc(14,L,2,0,"small",9),t.qZA(),t.TgZ(15,"div",6)(16,"label",7),t._uU(17,"Descripcion"),t.qZA(),t._UZ(18,"textarea",10),t.YNc(19,P,2,0,"small",9),t.qZA(),t.TgZ(20,"div",6)(21,"label",7),t._uU(22,"Fecha de cierre"),t.qZA(),t._UZ(23,"input",11),t.YNc(24,G,2,0,"small",9),t.qZA(),t.TgZ(25,"div",6)(26,"button",12),t._uU(27,"Registrar"),t.qZA()()(),t.TgZ(28,"div",5)(29,"h3"),t._uU(30,"Clasificacion"),t.qZA(),t.TgZ(31,"table",13)(32,"thead",14)(33,"tr")(34,"th"),t._uU(35,"ID"),t.qZA(),t.TgZ(36,"th"),t._uU(37,"Grupo"),t.qZA(),t.TgZ(38,"th"),t._uU(39,"Borrar"),t.qZA()()(),t.TgZ(40,"tbody",15),t.YNc(41,B,8,2,"tr",16),t.qZA()(),t.TgZ(42,"button",17),t.NdJ("click",function(){return i.agregarGrupo()}),t._uU(43,"Agregar"),t.qZA()()()()()),2&e&&(t.xp6(3),t.Q6J("routerLink",t.DdM(6,R)),t.xp6(2),t.Q6J("formGroup",i.encuestaForm),t.xp6(9),t.Q6J("ngIf",i.validarInput("titulo")),t.xp6(5),t.Q6J("ngIf",i.validarInput("descripcion")),t.xp6(5),t.Q6J("ngIf",i.validarInput("fechaFinal")),t.xp6(17),t.Q6J("ngForOf",i.grupos.controls))},dependencies:[l.sg,l.O5,p.yS,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,s.CE]}),n})();var M=u(9841),O=u(2340),N=u(529);let Q=(()=>{class n{constructor(e){this.http=e,this.url=O.N.url}obtenerPreguntas(e){return this.http.get(`${this.url}/preguntas/listar/${e}`)}guardarPregunta(e){return this.http.post(`${this.url}/preguntas/guardar/`,e)}eliminarPregunta(e){return this.http.delete(`${this.url}/preguntas/eliminar/${e}`)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(N.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),V=(()=>{class n{constructor(e){this.http=e,this.url=O.N.url}listarOpciones(e){return this.http.get(`${this.url}/opciones/listar/${e}`)}guardarOpcion(e){return this.http.post(`${this.url}/opciones/guardar`,e)}eliminarOpcion(e){return this.http.delete(`${this.url}/opciones/eliminar/${e}`)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(N.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function K(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"input",26),t.qZA(),t.TgZ(5,"td")(6,"button",27),t.NdJ("click",function(){const a=t.CHM(e).index,c=t.oxw();return t.KtG(c.eliminarGrupo(a))}),t._uU(7,"Borrar"),t.qZA()()()}if(2&n){const e=r.index;t.xp6(2),t.Oqu(e+1),t.xp6(2),t.Q6J("formControlName",e)}}function j(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"ol",28)(1,"li",29)(2,"div",30)(3,"div",31),t._uU(4),t.qZA()(),t.TgZ(5,"span")(6,"button",32),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.editarPregunta(a))}),t._uU(7,"Editar"),t.qZA(),t.TgZ(8,"button",33),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.eliminarPregunta(a.codigo))}),t._uU(9,"Eliminar"),t.qZA()()()()}if(2&n){const e=r.$implicit;t.xp6(4),t.Oqu(e.titulo)}}function H(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"ul",34)(1,"div",35),t._UZ(2,"input",36),t.TgZ(3,"label",37)(4,"i",38),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.eliminarOpcion(a.id))}),t.qZA(),t._uU(5),t.qZA()()()}if(2&n){const e=r.$implicit;t.xp6(5),t.AsE(" ( ",e.valor,") - ",e.descripcion," ")}}const z=function(){return["/home/encuestas"]};let X=(()=>{class n{constructor(e,i,o,a,c){this.encuestaService=e,this.router=i,this.activateRouter=o,this.preguntaService=a,this.opcionService=c,this.pregunta="",this.idPregunta=0,this.encuestaForm=new s.cw({id:new s.NI("",s.kI.required),titulo:new s.NI("",s.kI.required),descripcion:new s.NI("",s.kI.required),idUsuario:new s.NI(""),fechaFinal:new s.NI("",s.kI.required),grupos:new s.Oe([])}),this.preguntas=[],this.opciones=[]}ngOnInit(){this.id=this.activateRouter.snapshot.params.id,this.getEncuesta(this.id)}getEncuesta(e){(0,M.a)([this.encuestaService.obtenerEncuestasPorId(e),this.preguntaService.obtenerPreguntas(e)]).subscribe(([i,o])=>{this.consutruirEncuesta(i),this.preguntas=o})}guardarEncuesta(){this.encuestaService.actualizarEncuesta(this.encuestaForm.value).subscribe(e=>{e&&this.router.navigateByUrl("/home/encuestas")})}consutruirEncuesta(e){this.encuestaForm.get("id")?.setValue(e.id),this.encuestaForm.get("titulo")?.setValue(e.titulo),this.encuestaForm.get("descripcion")?.setValue(e.descripcion),this.encuestaForm.get("fechaFinal")?.setValue(e.fechaFinal),this.grupos.clear(),e.grupos.forEach(i=>{this.grupos.push(new s.NI(i.nombre,s.kI.required))})}agregarPregunta(){let e,i;d().fire({title:"Login Form",html:'\n        <input type="text" id="descripcion" class="swal2-input" placeholder="Descripcion de la pregunta"><br>\n        \n        <input type="checkbox" id="escala" value="false">\n        <label>Desea generar las escalas del 1 al 5 automaticamente?</label>\n      ',confirmButtonText:"Agregar",focusConfirm:!1,didOpen:()=>{const o=d().getPopup();e=o.querySelector("#descripcion"),i=o.querySelector("#escala"),e.onkeyup=a=>"Enter"===a.key&&d().clickConfirm(),i.onkeyup=a=>"Enter"===a.key&&d().clickConfirm()},preConfirm:()=>{console.log(i.checked);const o=e.value,a=i.checked;return o||d().showValidationMessage("Por favor ingrese la descripcion"),{descripcion:o,escala:a}}}).then(o=>{if(o.isConfirmed){let a={titulo:o.value.descripcion,generarScala:Boolean(o.value.escala),idEncuesta:this.id,idTipoPregunta:1};this.preguntaService.guardarPregunta(a).subscribe(c=>{c&&this.getEncuesta(c.idEncuesta)})}})}eliminarPregunta(e){this.preguntaService.eliminarPregunta(e).subscribe(i=>{i&&(this.pregunta="",this.getEncuesta(this.id),this.listarOpciones(this.id))})}editarPregunta(e){this.pregunta=`${e.titulo}`,this.idPregunta=e.codigo,this.listarOpciones(this.idPregunta)}agregarOpcion(){d().fire({title:"Opcion",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Agregar",showLoaderOnConfirm:!0,preConfirm:e=>e,allowOutsideClick:()=>!d().isLoading()}).then(e=>{e.isConfirmed&&(0==e.value.length?d().fire("Error!","El campo no puede estar vacio!","error"):this.opcionService.guardarOpcion({descripcion:e.value,idPregunta:this.idPregunta}).subscribe(i=>{i&&this.listarOpciones(this.idPregunta)}))})}listarOpciones(e){this.opcionService.listarOpciones(e).subscribe(i=>{this.opciones=i})}eliminarOpcion(e){this.opcionService.eliminarOpcion(e).subscribe(i=>{this.listarOpciones(this.idPregunta)})}get grupos(){return this.encuestaForm.get("grupos")}agregarGrupo(){this.grupos.push(new s.NI("",s.kI.required))}eliminarGrupo(e){this.grupos.removeAt(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T.Y),t.Y36(p.F0),t.Y36(p.gz),t.Y36(Q),t.Y36(V))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-editar-encuesta"]],decls:63,vars:7,consts:[[1,"section"],[1,"d-flex"],[1,"btn","btn-primary",3,"routerLink"],[3,"formGroup","submit"],[1,"row","mx-auto"],[1,"col-md-6"],[1,"mb-3"],["for",""],["type","text","formControlName","titulo","placeholder","Ingrese el titulo de la encuesta",1,"form-control"],["type","text","formControlName","descripcion","placeholder","Descripcion",1,"form-control"],["type","datetime-local","formControlName","fechaFinal","placeholder","Fecha de cierre",1,"form-control"],[1,"button","button-primary"],[1,"table"],[1,"thead-dark"],["formArrayName","grupos"],[4,"ngFor","ngForOf"],["type","button",1,"btn","btn-sm","btn-primary",3,"click"],[1,"row","pt-3"],[1,"col-md-8"],[1,"card"],[1,"card-header","d-flex","justify-content-between"],[1,"button","button-primary","mb-2",3,"click"],[1,"card-body"],["class","list-group",4,"ngFor","ngForOf"],[1,"col-md-4"],["class","nav",4,"ngFor","ngForOf"],["type","text",1,"form-control",3,"formControlName"],["type","button",1,"btn","btn-sm","btn-danger",3,"click"],[1,"list-group"],[1,"list-group-item","d-flex","justify-content-between","align-items-start"],[1,"ms-2","me-auto"],[1,"fw-bold"],[1,"button","btn-info",3,"click"],[1,"button","delete-button",3,"click"],[1,"nav"],[1,"form-check"],["type","radio","name","flexRadioDefault","id","flexRadioDefault1",1,"form-check-input"],["for","flexRadioDefault1",1,"form-check-label"],[1,"fas","fa-backspace","pointer",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"a",2),t._uU(4,"Volver"),t.qZA()()(),t.TgZ(5,"form",3),t.NdJ("submit",function(){return i.guardarEncuesta()}),t.TgZ(6,"div",4)(7,"div",5)(8,"h3"),t._uU(9,"Editar encuesta"),t.qZA(),t.TgZ(10,"div",6)(11,"label",7),t._uU(12,"Titulo de la encuesta"),t.qZA(),t._UZ(13,"input",8),t.qZA(),t.TgZ(14,"div",6)(15,"label",7),t._uU(16,"Descripcion"),t.qZA(),t.TgZ(17,"textarea",9),t._uU(18,"    \n                    "),t.qZA()(),t.TgZ(19,"div",6)(20,"label",7),t._uU(21,"Fecha de cierre"),t.qZA(),t._UZ(22,"input",10),t.qZA(),t.TgZ(23,"div",6)(24,"button",11),t._uU(25,"Actualizar"),t.qZA()()(),t.TgZ(26,"div",5)(27,"h3"),t._uU(28,"Clasificacion"),t.qZA(),t.TgZ(29,"table",12)(30,"thead",13)(31,"tr")(32,"th"),t._uU(33,"ID"),t.qZA(),t.TgZ(34,"th"),t._uU(35,"Grupo"),t.qZA(),t.TgZ(36,"th"),t._uU(37,"Borrar"),t.qZA()()(),t.TgZ(38,"tbody",14),t.YNc(39,K,8,2,"tr",15),t.qZA()(),t.TgZ(40,"button",16),t.NdJ("click",function(){return i.agregarGrupo()}),t._uU(41,"Agregar"),t.qZA()()()(),t.TgZ(42,"div",17)(43,"div",18)(44,"div",19)(45,"div",20)(46,"h3"),t._uU(47,"Preguntas"),t.qZA(),t.TgZ(48,"button",21),t.NdJ("click",function(){return i.agregarPregunta()}),t._uU(49," + "),t.qZA()(),t.TgZ(50,"div",22),t.YNc(51,j,10,1,"ol",23),t.qZA()()(),t.TgZ(52,"div",24)(53,"div",19)(54,"div",20)(55,"h3"),t._uU(56,"Opciones"),t.qZA(),t.TgZ(57,"button",21),t.NdJ("click",function(){return i.agregarOpcion()}),t._uU(58," + "),t.qZA()(),t.TgZ(59,"div",22)(60,"p"),t._uU(61),t.qZA(),t.YNc(62,H,6,2,"ul",25),t.qZA()()()()()),2&e&&(t.xp6(3),t.Q6J("routerLink",t.DdM(6,z)),t.xp6(2),t.Q6J("formGroup",i.encuestaForm),t.xp6(34),t.Q6J("ngForOf",i.grupos.controls),t.xp6(12),t.Q6J("ngForOf",i.preguntas),t.xp6(10),t.Oqu(i.pregunta),t.xp6(1),t.Q6J("ngForOf",i.opciones))},dependencies:[l.sg,p.yS,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,s.CE]}),n})();class W{constructor(r,e){this._document=e;const i=this._textarea=this._document.createElement("textarea"),o=i.style;o.position="fixed",o.top=o.opacity="0",o.left="-999em",i.setAttribute("aria-hidden","true"),i.value=r,i.readOnly=!0,this._document.body.appendChild(i)}copy(){const r=this._textarea;let e=!1;try{if(r){const i=this._document.activeElement;r.select(),r.setSelectionRange(0,r.value.length),e=this._document.execCommand("copy"),i&&i.focus()}}catch{}return e}destroy(){const r=this._textarea;r&&(r.remove(),this._textarea=void 0)}}const h=class{constructor(r){this._document=r}copy(r){const e=this.beginCopy(r),i=e.copy();return e.destroy(),i}beginCopy(r){return new W(r,this._document)}};let f=h;x=new WeakMap,A=new WeakMap,m(f,x,h.\u0275fac=function(e){return new(e||h)(t.LFG(l.K0))}),m(f,A,h.\u0275prov=t.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}));const tt=new t.OlP("CDK_COPY_TO_CLIPBOARD_CONFIG"),Z=class{constructor(r,e,i){this._clipboard=r,this._ngZone=e,this.text="",this.attempts=1,this.copied=new t.vpe,this._pending=new Set,i&&null!=i.attempts&&(this.attempts=i.attempts)}copy(r=this.attempts){if(r>1){let e=r;const i=this._clipboard.beginCopy(this.text);this._pending.add(i);const o=()=>{const a=i.copy();a||!--e||this._destroyed?(this._currentTimeout=null,this._pending.delete(i),i.destroy(),this.copied.emit(a)):this._currentTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(o,1))};o()}else this.copied.emit(this._clipboard.copy(this.text))}ngOnDestroy(){this._currentTimeout&&clearTimeout(this._currentTimeout),this._pending.forEach(r=>r.destroy()),this._pending.clear(),this._destroyed=!0}};let E=Z;C=new WeakMap,y=new WeakMap,m(E,C,Z.\u0275fac=function(e){return new(e||Z)(t.Y36(f),t.Y36(t.R0b),t.Y36(tt,8))}),m(E,y,Z.\u0275dir=t.lG2({type:Z,selectors:[["","cdkCopyToClipboard",""]],hostBindings:function(e,i){1&e&&t.NdJ("click",function(){return i.copy()})},inputs:{text:["cdkCopyToClipboard","text"],attempts:["cdkCopyToClipboardAttempts","attempts"]},outputs:{copied:"cdkCopyToClipboardCopied"}}));const _=class{};let b=_;function et(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",9),t._uU(1," Enlace copiado al portapapeles "),t.TgZ(2,"button",10),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.cerrar())}),t.qZA()()}}function nt(n,r){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ( ",e.valor,")")}}function it(n,r){if(1&n&&(t.TgZ(0,"ul",15)(1,"div",16),t._UZ(2,"input",17),t.TgZ(3,"label",18),t.YNc(4,nt,2,1,"span",19),t._uU(5),t.qZA()()()),2&n){const e=r.$implicit;t.xp6(4),t.Q6J("ngIf",0!==e.valor),t.xp6(1),t.hij(" - ",e.descripcion," ")}}function rt(n,r){if(1&n&&(t.TgZ(0,"div",11)(1,"div",12)(2,"label",13),t._uU(3),t.qZA(),t.YNc(4,it,6,2,"ul",14),t.qZA()()),2&n){const e=r.$implicit;t.xp6(3),t.Oqu(e.titulo),t.xp6(1),t.Q6J("ngForOf",e.opciones)}}q=new WeakMap,U=new WeakMap,k=new WeakMap,m(b,q,_.\u0275fac=function(e){return new(e||_)}),m(b,U,_.\u0275mod=t.oAB({type:_})),m(b,k,_.\u0275inj=t.cJS({}));const ot=function(){return["/home/encuestas"]};let st=(()=>{class n{constructor(e,i,o,a){this.encuestaService=e,this.activateRoute=i,this.clipboard=o,this.copy=!1}cerrar(){this.copy=!1}ngOnInit(){this.hash=this.activateRoute.snapshot.params.hash,this.obtenerEncuesta(this.hash)}copiar(){let e=this.obtenerUrl();this.copy=!0,this.clipboard.copy(`${e}/realizar-encuesta/${this.encuestaDto.hash}`)}obtenerEncuesta(e){this.encuestaService.obtenerEncuestasPorhash(e).subscribe(i=>{this.encuestaDto=i})}obtenerUrl(){let e=document.location.href.split("/");return e[0]+"//"+e[2]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T.Y),t.Y36(p.gz),t.Y36(f),t.Y36(l.K0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-ver-encuesta"]],decls:16,vars:6,consts:[[1,"section"],["class","alert alert-warning alert-dismissible fade show","role","alert",4,"ngIf"],[1,"d-flex","justify-content-between"],[1,"btn","btn-primary",3,"routerLink"],[1,"btn","btn-info",3,"click"],[1,"row"],[1,"text-center"],[1,"row","w-50","justify-content-center","mx-auto"],["class","col-md-12",4,"ngFor","ngForOf"],["role","alert",1,"alert","alert-warning","alert-dismissible","fade","show"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close",3,"click"],[1,"col-md-12"],[1,"mb-3"],["for",""],["class","mt-2",4,"ngFor","ngForOf"],[1,"mt-2"],[1,"form-check"],["type","radio","name","flexRadioDefault","id","flexRadioDefault1",1,"form-check-input"],["for","flexRadioDefault1",1,"form-check-label"],[4,"ngIf"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,et,3,0,"div",1),t.TgZ(2,"div",2)(3,"div")(4,"a",3),t._uU(5,"Volver"),t.qZA()(),t.TgZ(6,"div")(7,"a",4),t.NdJ("click",function(){return i.copiar()}),t._uU(8,"Copiar enlace"),t.qZA()()(),t.TgZ(9,"div",5)(10,"h3",6),t._uU(11),t.qZA(),t.TgZ(12,"p",6),t._uU(13),t.qZA()(),t.TgZ(14,"div",7),t.YNc(15,rt,5,2,"div",8),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("ngIf",i.copy),t.xp6(3),t.Q6J("routerLink",t.DdM(5,ot)),t.xp6(7),t.Oqu(null==i.encuestaDto?null:i.encuestaDto.titulo),t.xp6(2),t.Oqu(null==i.encuestaDto?null:i.encuestaDto.descripcion),t.xp6(2),t.Q6J("ngForOf",null==i.encuestaDto?null:i.encuestaDto.preguntas))},dependencies:[l.sg,l.O5,p.yS]}),n})();var at=u(5002);function ct(n,r){if(1&n&&(t.TgZ(0,"tr")(1,"td",6),t._uU(2),t.qZA(),t.TgZ(3,"td",7),t._uU(4),t.qZA(),t.TgZ(5,"td",8),t._uU(6),t.qZA(),t.TgZ(7,"td",9),t._uU(8),t.qZA()()),2&n){const e=r.$implicit;t.xp6(2),t.Oqu(e.identificacion),t.xp6(2),t.Oqu(e.nombre),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.carrera)}}const ut=function(){return["/home/encuestas"]},lt=[{path:"",component:S},{path:"nueva-encuesta",component:$},{path:"editar-encuesta/:id",component:X},{path:"ver-encuesta/:hash",component:st},{path:"resumen/:id",component:(()=>{class n{constructor(e,i){this.encuestadoService=e,this.activateRouter=i,this.encuestados=[],this.idEncuesta=0,this.idEncuesta=parseInt(this.activateRouter.snapshot.params.id)}ngOnInit(){this.obtenerListaDeEncuestados()}obtenerListaDeEncuestados(){this.encuestadoService.listarEncuestados(this.idEncuesta).subscribe(e=>{this.encuestados=e})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(at.h),t.Y36(p.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-resumen"]],decls:20,vars:4,consts:[[1,"section"],[1,"d-flex","justify-content-between"],[1,"btn","btn-primary",3,"routerLink"],[1,"text-center"],[1,"table"],[4,"ngFor","ngForOf"],["data-label","Identificacion"],["data-label","Nombre"],["data-label","Email"],["data-label","Grupo"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div")(3,"a",2),t._uU(4,"Volver"),t.qZA()()(),t.TgZ(5,"h3",3),t._uU(6),t.qZA(),t.TgZ(7,"table",4)(8,"thead")(9,"tr")(10,"th"),t._uU(11,"Identificacion"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Nombre"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Email"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Grupo"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,ct,9,4,"tr",5),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("routerLink",t.DdM(3,ut)),t.xp6(3),t.hij("Total de personas: ",i.encuestados.length,""),t.xp6(13),t.Q6J("ngForOf",i.encuestados))},dependencies:[l.sg,p.yS]}),n})()}];let pt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(lt),p.Bz]}),n})(),dt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,pt,s.UX,b]}),n})()}}]);