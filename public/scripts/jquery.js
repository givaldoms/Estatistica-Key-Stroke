var coeficienteDeVariacao = 0;

$(function () {
  $("#li_quartis").click(function (e) {
    e.preventDefault();
    location.href = "quartis.html";
  });
});

$(function () {
  $("#li_frequencia").click(function (e) {
    e.preventDefault();
    location.href = "frequencia.html";
  });
});

$(function () {
  $("#li_curva").click(function (e) {
    e.preventDefault();
    location.href = "curvas.html";
  });
});

$(function () {
  $("#li_inicio").click(function (e) {
    e.preventDefault();
    location.href = "inicio.html";
  });
});

$(function () {
  $("#li_inicio2").click(function (e) {
    e.preventDefault();
    location.href = "inicio.html";
  });
});

$(function () {
  $("#li_estatistica").click(function (e) {
    e.preventDefault();
    location.href = "estatistica.html";
  });
});

$(function () {
  $("#li_probabilidade").click(function (e) {
    e.preventDefault();
    location.href = "probabilidade.html";
  });
});

$(function () {
  $("#li_simulador").click(function (e) {
    e.preventDefault();
    location.href = "simulador.html";
  });
});

$(function () {
  $("#li_sobre").click(function (e) {
    e.preventDefault();
    location.href = "sobre.html";
  });
});

$(function () {
  $("#li_sair").click(function (e) {
    if(confirm("Deseja realmente sair?")){
      e.preventDefault();
      location.href = "index.html";
    }
  });
});
