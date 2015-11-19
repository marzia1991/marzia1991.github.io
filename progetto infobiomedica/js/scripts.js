/*funzione per far comparire i bottoni del tipo e dell'età delle crisi epilettiche solo in caso siano avvenute*/
function nascondi(){
  var radio=$('input[name="crisi"]:checked').val();
  if(radio==0){
    $("#nascosto").removeClass("show").addClass("hide"); 
    $("#nascosto1").removeClass("show").addClass("hide"); 
    $("#nascosto2").removeClass("show").addClass("hide");  
  }
  else{
    $("#nascosto").removeClass("hide").addClass("show"); 
    $("#nascosto1").removeClass("hide").addClass("show"); 
    $("#nascosto2").removeClass("hide").addClass("show"); 
  }
};


function nascondiAltro(id, idForm){
  var idSelect = '#'+id;
  var idF = '#'+idForm;
  if($(idSelect).val()=="altro"){
     $(idF).removeClass("hide").addClass("show"); 
  }
  else{
    $(idF).removeClass("show").addClass("hide");  
     
  }
};


function nascondi2(id, nome){
  var temp="#"+id;
  if (nome=="padre")
    var radio=$('input[name="padre"]:checked').val();
  else
    if(nome=="madre")
      var radio=$('input[name="madre"]:checked').val();
    else
      var radio=$('input[name="q5"]:checked').val();

  if(radio==0 || radio==-1 || radio==-2){
    $(temp).removeClass("show").addClass("hide"); 
  }
  else{
    $(temp).removeClass("hide").addClass("show"); 
  }
};


function nascondi3(){
  var radio=$('input[name="grav"]:checked').val();
  if(radio==0 || radio==-1){
    $("#nascostograv1").removeClass("show").addClass("hide"); 
    $("#nascostograv2").removeClass("show").addClass("hide"); 
    $("#nascostograv3").removeClass("show").addClass("hide"); 
  }
  else{
    $("#nascostograv1").removeClass("hide").addClass("show"); 
    $("#nascostograv2").removeClass("hide").addClass("show"); 
    $("#nascostograv3").removeClass("hide").addClass("show");
  }
};

function nascondi_check_box(id, nome){
  if($('input[name="q1"]:checked').val()=="almeno_uno" ){
    $("#nascosto_check_box").removeClass("hide").addClass("show"); 
  }
  else{
    $("#nascosto_check_box").removeClass("show").addClass("hide"); 
  }
};

function nascondiRiga2(){
  $("#riga_tab_postnatale").removeClass("hide").addClass("show"); 
}
 
function nascondiRiga(){
  var div = document.getElementById("riga_tab_postnatale").lastChild();
  var clone = div.cloneNode(true);
  document.body.appendChild(clone);
}

var rows = 1;
var rows2 = 1;

function addRow(){
  var div = document.getElementById("riga_tab_postnatale");
  var div2 = document.getElementById("riga_tab_postnatale0");
  var clone = div.cloneNode(true); //non funziona più il calendario e non so perchè
  clone.id = div.id + rows;
  div2.appendChild(clone);
  rows++;
}

function addRow2(){
  var div = document.getElementById("riga_tab_circonferenza");
  var div2 = document.getElementById("riga_tab_circonferenza0");
  var clone = div.cloneNode(true);
  clone.id = div.id + rows2;
  div2.appendChild(clone);
  rows2++;
}

function salvataggio(){

  var json;

  //controlli per tutti i querySelector se null

  var input_sesso = document.querySelector('input[name="sesso"]');
  var sesso = input_sesso.checked ? input_sesso.val : '';
  
  var input_crescita = document.querySelector('input[name = "crescita"]');
  var crescita = input_crescita.checked ? input_crescita.val : '';
  
  var input_viso = document.querySelector('input[name = "viso"]');
  var viso = input_viso.checked ? input_viso.val : '';
  
  var input_snc = document.querySelector('input[name = "snc"]');
  var snc = input_snc.checked ? input_snc.val : '';
  
  var input_snc_def = document.querySelector('input[name = "snc_def"]');
  var snc_def = input_snc_def.checked ? input_snc_def.val : '';

  var input_alcol = document.querySelector('input[name = "alcol"]');
  var alcol = input_alcol.checked ? input_alcol.val : '';

  var input_crisi = document.querySelector('input[name = "crisi"]');
  var crisi = input_crisi.checked ? input_crisi.val : '';

  var input_q1 = document.querySelector('input[name = "q1"]');
  var q1 = input_q1.checked ? input_q1.val : '';

  var input_q2 = document.querySelector('input[name = "q2"]');
  var q2 = input_q2.checked ? input_q2.val : '';

  var input_q3 = document.querySelector('input[name = "q3"]');
  var q3 = input_q3.checked ? input_q3.val : '';

  var input_q4 = document.querySelector('input[name = "q4"]');
  var q4 = input_q4.checked ? input_q4.val : '';

  var input_q5 = document.querySelector('input[name = "q5"]');
  var q5 = input_q5.checked ? input_q5.val : '';

  var input_q6 = document.querySelector('input[name = "q6"]');
  var q6 = input_q6.checked ? input_q6.val : '';

  var input_prenatali = document.querySelector('input[name = "prenatali"]');
  var prenatali = input_prenatali.checked ? input_prenatali.val : '';

  var input_gravidanza_multipla = document.querySelector('input[name = "gravidanza_multipla"]');
  var gravidanza_multipla = input_gravidanza_multipla.checked ? input_gravidanza_multipla.val : '';

  var input_cure_prenatali = document.querySelector('input[name = "cure_prenatali"]');
  var cure_prenatali = input_cure_prenatali.checked ? input_cure_prenatali.val : '';

  var input_madre = document.querySelector('input[name = "madre"]');
  var madre = input_madre.checked ? input_madre.val : '';

  var input_padre = document.querySelector('input[name = "padre"]');
  var padre = input_padre.checked ? input_padre.val : '';

  var input_postnatali = document.querySelector('input[name = "postnatali"]');
  var postanatali = input_postnatali.checked ? input_postnatali.val : '';

  var input_abuso_fisico = document.querySelector('input[name = "abuso_fisico"]');
  var abuso_fisico = input_abuso_fisico.checked ? input_abuso_fisico.val : '';

  var input_abuso_sessuale = document.querySelector('input[name = "abuso_sessuale"]');
  var abuso_sessuale = input_abuso_sessuale.checked ? input_abuso_sessuale.val : '';

  /*[{"data_1":document.getElementById("data_1").value,
  "età_1":document.getElementById("età_1").value.trim(),
  "tipo_età_1":document.getElementById("tipo_età_1").value.trim(),
  "altezza_1_cm":document.getElementById("altezza_1_cm").value.trim(),
  "altezza_1_percentili":document.getElementById("altezza_1_percentili").value.trim(),
  "peso_1_kg":document.getElementById("peso_1_kg").value.trim(),
  "peso_1_percentili":document.getElementById("peso_1_percentili").value.trim(),},
  //if press aggiungi riga than put other 
  ],*/
  


  /*non va bene da rifare con map e vedere anche gli indici incrementali degli oggetti che hanno sempre lo stesso indice
  var crescita_postnatale=new Array();
  var numero_righe_tab_postnatale=document.getElementById("riga_tab_postnatale0").childElementCount;
  var cont=1;
  var a;
  var app;
  while(cont<=numero_righe_tab_postnatale){
    app="data_"+cont;
    app='"'+app+'"';
    a={app:document.getElementById(app).value,
      "età_"+cont:document.getElementById("età_"+cont).value.trim(),
      "tipo_età_"+cont:document.getElementById("tipo_età_"+cont).value.trim(),
      "altezza_"+cont+"_cm":document.getElementById("altezza_"+cont+"_cm").value.trim(),
      "altezza_"+cont"_percentili":document.getElementById("altezza_"+cont"_percentili").value.trim(),
      "peso_"+cont+"_kg":document.getElementById("peso_"+cont+"_kg").value.trim(),
      "peso_"+cont+"_percentili":document.getElementById("peso_"+cont+"_percentili").value.trim(),};
    crescita_postnatale.push(a);
    cont++;
  }*/
  
  document.getElementById("riga_tab_postnatale0").children.map(function(item){});

  json=JSON.stringify({"info_fasd":{"medico":"001","clinica":"002","data_info_base":document.getElementById("data_info_base").value,"paziente":"003",},
  "medico":{"id":"001","nome_medico":document.getElementById("nome_medico").value.trim(),},
  
  "clinica":{"id":"002","nome_clinica":document.getElementById("nome_clinica").value.trim(),}, 
  
  "paziente":{"id":"003","nome_paziente":document.getElementById("nome_paziente").value.trim(),"età_paziente":document.getElementById("età_paziente").value.trim(),
  "tipo_età_paziente":document.getElementById("tipo_età_paziente").value.trim(),
  "data_nascita_paziente":document.getElementById("data_nascita_paziente").value, 
  "sesso":sesso,
  "razza":document.getElementById("razza").value.trim(),
  "diagnosi":document.getElementById("diagnosi").value.trim(),
  "griglia":[{"crescita":crescita,
  "viso":viso,
  "snc":snc,
  "snc_def":snc_def,
  "alcol":alcol,}],
  "report_misure":"004",
  "test_madre":"005",
  "altri_eventi_pre_e_postnatali":"006",
  "da_anni_abcscore":document.getElementById("da_anni_abcscore").value.trim(),
  "a_anni_abcscore":document.getElementById("a_anni_abcscore").value.trim(),},

  "report_misure":{"id":"004","misure_nascita":{"data_nascita":document.getElementById("data_nascita").value,
  "età_gestazionale":document.getElementById("età_gestazionale").value.trim(),
  "lunghezza_cm":document.getElementById("lunghezza_cm").value.trim(),
  "lunghezza_percentili":document.getElementById("lunghezza_percentili").value.trim(),
  "peso_g":document.getElementById("peso_g").value.trim(),
  "peso_percentili":document.getElementById("peso_percentili").value.trim(),},
  "crescita_postnatale":[crescita_postnatale],
  "altezza_madre":document.getElementById("altezza_madre").value.trim(),
  "altezza_padre":document.getElementById("altezza_padre").value.trim(),
  "media_altezza":document.getElementById("media_altezza").value.trim(),
  "codice_correlazione":document.getElementById("codice_correlazione").value.trim(),
  "altezza_correlata":document.getElementById("altezza_correlata").value.trim(),
  "percentili_correlati":document.getElementById("percentili_correlati").value.trim(),
  "report_facciale":document.getElementById("report_facciale").value.trim(),
  "circonferenza_cranica":[{"cm_1":document.getElementById("cm_1").value.trim(),
  "percentili_1":document.getElementById("percentili_1").value.trim(),
  "età_1":document.getElementById("età_1").value.trim(),
  "tipo_cranico_età_1":document.getElementById("tipo_cranico_età_1").value.trim(),},
  //if press aggiungi riga than put other 
  ],
  "anomalie_strutturali":document.getElementById("anomalie_strutturali").value.trim(),
  "altro_strutturali":document.getElementById("altro_strutturali").value.trim(),
  "crisi": crisi,
  "tipo_crisi":document.getElementById("tipo_crisi").value.trim(),
  "età_esordio":document.getElementById("età_esordio").value.trim(),
  "tipo_età_esordio":document.getElementById("tipo_età_esordio").value.trim(),
  "altri_neurologici":document.getElementById("altri_neurologici").value.trim(),
  },

  "test_madre":{"id":"005",
  "prima_gravidanza":{
    "ua_occasione_prima":document.getElementById("ua_occasione_prima").value.trim(),
    "ua_max_prima":document.getElementById("ua_max_prima").value.trim(),
    "ua_settimana_prima":document.getElementById("ua_settimana_prima").value.trim(),
    "tipo_alcol_prima":document.getElementById("tipo_alcol_prima").value.trim(),
    "altro_alcol_prima":document.getElementById("altro_alcol_prima").value.trim(),
  },
  "durante_gravidanza":{
    "ua_occasione_durante":document.getElementById("ua_occasione_durante").value.trim(),
    "ua_max_durante":document.getElementById("ua_max_durante").value.trim(),
    "ua_settimana_durante":document.getElementById("ua_settimana_durante").value.trim(),
    "tipo_alcol_durante":document.getElementById("tipo_alcol_durante").value.trim(),
    "altro_alcol_durante":document.getElementById("altro_alcol_durante").value.trim(),
  },
  "domande":{
    "q1":q1,
    "q2":q2,
    "q3":q3,
    "q4":q4,
    "q5":q5,
    "conferma":document.getElementById("conferma").value.trim(),
    "q6":q6,
  },
  "altre_info_gravidanza":document.getElementById("altre_info_gravidanza").value.trim(),
  },

  "altri_eventi_pre_e_postnatali":{"id":"006",
    "prenatali":prenatali,
    "gravidanza_multipla":gravidanza_multipla,
    "da":document.getElementById("da").value.trim(),
    "a":document.getElementById("a").value.trim(),
    "cure_prenatali":cure_prenatali,
    "complicanze":document.getElementById("complicanze").value.trim(),
    "madre":madre,
    "altre_info_madre":document.getElementById("altre_info_madre").value.trim(),
    "padre":padre,
    "altre_info_madre":document.getElementById("altre_info_madre").value.trim(),
    "altre_condizioni_ereditarie":document.getElementById("altre_condizioni_ereditarie").value.trim(),
    "esposizione_prenatale":document.getElementById("esposizione_prenatale").value.trim(),
    "postanatali":postanatali,
    "apgar":document.getElementById("apgar").value.trim(),
    "abuso_fisico":abuso_fisico,
    "abuso_sessuale":abuso_sessuale,
    "adottato":document.getElementById("adottato").value.trim(),
    "altro_traumi":document.getElementById("altro_traumi").value.trim(),
    "altri_problemi":document.getElementById("altri_problemi").value.trim(),
  }

  }, null, '\t');
  
  console.log(json);
}

