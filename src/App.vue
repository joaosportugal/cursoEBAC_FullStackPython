<script setup>
import { reactive } from 'vue';

const estado = reactive({
  a: 0,
  b: 0,
  operacaoMatematica: "",
  variavel: "",
})

function calculaResultado(num1, num2, operacaoMatematica) {
  let resultado = 0;

  switch (operacaoMatematica) {
    case "+":
      resultado = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    default:
      console.log("Operação inválida");
      break;
  }

  return resultado
}

</script>

<template>
  <div class="container d-flex flex-column vh-100 justify-content-center">
  <header class="text-center mb-4">
    <h1>Calculadora VueJS EBAC</h1>
  </header>
  <main>
    <div class="row justify-content-center mb-4">
      <div class="col-md-4">
        <select v-model="estado.operacaoMatematica" class="form-select">
          <option disabled value="">Escolha uma operação</option>
          <option value="+">Soma</option>
          <option value="-">Diferença</option>
          <option value="*">Multiplicação</option>
          <option value="/">Divisão</option>
        </select>
      </div>
    </div>
    <div class="row justify-content-center mb-4 align-items-center">
      <div class="col-md-4">
        <input @keyup="e => estado.a = e.target.value"  type="number" class="form-control" placeholder="Digite o primeiro número">
      </div>
      <div class="col-md-1 text-center">
        <span class="fw-bold fs-2">{{ estado.operacaoMatematica }}</span>
      </div>
      <div class="col-md-4">
        <input @keyup="e => estado.b = e.target.value" type="number" class="form-control" placeholder="Digite o segundo número">
      </div>
      <div class="col-md-1 text-center">
        <span class="fw-bold fs-2">=</span>
      </div>
      <div class="col-md-2">
        <span class="form-control" readonly>{{ calculaResultado(estado.a, estado.b, `${estado.operacaoMatematica}`) }}</span>
      </div>
    </div>
  </main>
</div>

</template>

<style scoped>
main {
  background-color: antiquewhite;
  padding: 20px;
  border-radius: 32px;
}
header h1 {
  color: rgb(231, 188, 131);
}
</style>
