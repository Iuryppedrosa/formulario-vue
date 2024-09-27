<template>
  <div class="container">
    <div class="row">
      <div class="col-6 bg-light">
        <span class="fs-4">ENTRADA DE DADOS</span>
        <hr />
        <form>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Nome:</label>
            <div class="col">
              <input type="text" class="form-control" v-model.lazy="form.nome" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">E-mail:</label>
            <div class="col">
              <input type="email" class="form-control" v-model="form.email" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Senha:</label>
            <div class="col">
              <input type="password" class="form-control" v-model.trim="form.senha" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Idade:</label>
            <div class="col">
              <input type="number" class="form-control" v-model.number="form.idade" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Gênero:</label>
            <div class="col">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  :value="Number(1)"
                  v-model="form.sexo"
                />
                <label class="form-check-label"> Feminino </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-bind:value="Number(2)"
                  v-model="form.sexo"
                />
                <label class="form-check-label"> Masculino </label>
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-3 col-form-label">Licença:</label>
            <div class="col">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="form.licenca"
                  true-value="SIM"
                  false-value="NAO"
                />
                <label class="form-check-label">Li e aceito os termos</label>
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-3 col-form-label">Interesses:</label>
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="JavaScript"
                  v-model="form.interesses"
                />
                <label class="form-check-label"> JavaScript </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="VueJS"
                  v-model="form.interesses"
                />
                <label class="form-check-label"> VueJS </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Angular"
                  v-model="form.interesses"
                />
                <label class="form-check-label"> Angular </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="NodeJS"
                  v-model="form.interesses"
                />
                <label class="form-check-label"> NodeJS </label>
              </div>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Telefone:</label>
            <div class="col">
              <MaskInput
                type="text"
                class="form-control"
                v-model="form.telefone"
                mask="(##) #####-####"
              />
              <small class="text-muted">Formato: 11 97777-5555</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CEP:</label>
            <div class="col">
              <MaskInput type="text" class="form-control" v-model="form.cep" mask="#####-###" />
              <small class="text-muted">Formato: 38412-389</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CPF:</label>
            <div class="col">
              <MaskInput
                type="text"
                class="form-control"
                v-model="form.cpf"
                mask="###-###-###-##"
              />
              <small class="text-muted">Formato: 012-482-546-00</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CPNJ:</label>
            <div class="col">
              <MaskInput
                type="text"
                class="form-control"
                v-model="form.cpnj"
                mask="###.###.###/####-##"
              />
              <small class="text-muted">Formato: 123.345.455.0000-11</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CARTAO:</label>
            <div class="col">
              <MaskInput
                type="text"
                class="form-control"
                v-model="form.cartaoDeCredito"
                mask="# #### #### ####"
              />
              <small class="text-muted">Formato: 1 1111 1111 1111</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Placa Veiculo:</label>
            <div class="col">
              <MaskInput
                type="text"
                class="form-control"
                v-model="form.placaVeiculo"
                mask="AAAA-####"
              />
              <small class="text-muted">Formato: AAAA-1234</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Placa de Veiculo MercoSul:</label>
            <div class="col">
              <MaskInput
                type="text"
                class="form-control"
                v-model="form.placaVeiculoMercoSul"
                mask="AAA#A##"
              />
              <small class="text-muted">Formato: AAAA1A11</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">RG:</label>
            <div class="col">
              <MaskInput type="text" class="form-control" v-model="form.RG" mask="##.###.###-#" />
              <small class="text-muted">Formato: 11.111.111.1</small>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-3 col-form-label">Data:</label>
            <div class="col">
              <input type="date" class="form-control" v-model="form.data" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Data/hora local:</label>
            <div class="col">
              <input type="datetime-local" class="form-control" v-model="form.dataHoraLocal" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Mês:</label>
            <div class="col">
              <input type="month" class="form-control" v-model="form.mes" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Semana:</label>
            <div class="col">
              <input type="week" class="form-control" v-model="form.semana" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Hora:</label>
            <div class="col">
              <input type="time" class="form-control" v-model="form.hora" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Cor:</label>
            <div class="col">
              <input type="color" class="form-color col-12" v-model="form.cor" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Valor limite:</label>
            <div class="col">
              <input
                type="range"
                class="form-range"
                min="0"
                max="255"
                step="0.3"
                v-model="form.alcance"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Escondido:</label>
            <div class="col">
              <input type="hidden" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Upload:</label>
            <div class="col">
              <input type="file" class="form-control" />
            </div>
          </div>
          <hr />
          <div class="mb-3 row">
            <div class="col d-flex justify-content-between">
              <button class="btn btn-secondary" type="reset">Limpar</button>
              <button class="btn btn-success" type="button">Enviar (btn)</button>
              <button class="btn btn-success" type="submit">Enviar (submit)</button>
            </div>
          </div>
        </form>
      </div>

      <div class="col-6" :style="{ backgroundColor: form.cor, color: computedFontColor }">
        <span class="fs-4">ESTADO DO OBJETO</span>
        <hr />
        <div class="mb-5 row">
          <span>{{ form }}</span>
        </div>

        <span class="fs-4">SAÍDA DE DADOS</span>
        <hr />
        <div class="mb-3 row">
          <span>Nome: {{ form.nome }}</span>
        </div>
        <div class="mb-3 row">
          <span>E-mail: {{ form.email }}</span>
        </div>
        <div class="mb-3 row">
          <span>Senha: {{ form.senha }}</span>
        </div>
        <div class="mb-3 row">
          <span>Idade: {{ form.idade }}</span>
        </div>
        <div class="mb-3 row">
          <span>Gênero: {{ form.sexo }}</span>
        </div>
        <div class="mb-3 row">
          <span>Licença: {{ form.licenca }}</span>
        </div>
        <div class="mb-3 row">
          <span
            >Interesses:
            <ul>
              <li v-for="index in form.interesses" :key="index">{{ index }}</li>
            </ul>
          </span>
        </div>
        <div class="mb-3 row">
          <span>Telefone: {{ form.telefone }}</span>
        </div>
        <div class="mb-3 row">
          <span>CEP: {{ form.cep }}</span>
        </div>
        <div class="mb-3 row">
          <span>CPF: {{ form.cpf }}</span>
        </div>
        <div class="mb-3 row">
          <span>CPNJ: {{ form.cnpj }}</span>
        </div>
        <div class="mb-3 row">
          <span>Cartao de Credito: {{ form.cartaoDeCredito }}</span>
        </div>
        <div class="mb-3 row">
          <span>Placa Veiculo: {{ form.placaVeiculo }}</span>
        </div>
        <div class="mb-3 row">
          <span>Placa de Veiculo MercoSUL: {{ form.placaVeiculoMercoSul }}</span>
        </div>
        <div class="mb-3 row">
          <span>RG: {{ form.RG }}</span>
        </div>
        <div class="mb-3 row">
          <span>Data: {{ form.data }} -> {{ moment(form.data).format('DD-MM-YYYY') }}</span>
        </div>
        <div class="mb-3 row">
          <span>Data/hora local: {{ form.dataHoraLocal }}</span>
        </div>
        <div class="mb-3 row">
          <span>Mês: {{ form.mes }}</span>
        </div>
        <div class="mb-3 row">
          <span>Semana: {{ form.semana }}</span>
        </div>
        <div class="mb-3 row">
          <span>Hora: {{ form.hora }}</span>
        </div>
        <div class="mb-3 row">
          <span>Cor: {{ form.cor }}</span>
        </div>
        <div class="mb-3 row">
          <span>Alcance: {{ form.alcance }} {{ computedFontColor }}</span>
        </div>
        <div class="mb-3 row">
          <span>Escondido:</span>
        </div>
        <div class="mb-3 row">
          <span>Upload: </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MaskInput } from 'vue-3-mask'
import moment from 'moment'

export default {
  name: 'FormularioComponent',
  components: {
    MaskInput
  },
  data: () => ({
    moment: moment,
    start: false,
    form: {
      nome: '',
      email: '',
      senha: '',
      idade: '',
      licenca: 'SIM',
      interesses: [],
      sexo: '',
      telefone: '',
      cep: '',
      cpf: '',
      cnpj: '',
      cartaoDeCredito: '',
      placaVeiculo: '',
      placaVeiculoMercoSul: '',
      RG: '',
      data: '',
      dataHoraLocal: '',
      mes: '',
      semana: '',
      hora: '',
      cor: '#999999',
      alcance: 5
    }
  }),
  created() {
    this.moment = moment

    // this.form.data = this.moment().format('YYYY-MM-DD')
    // this.form.dataHoraLocal = this.moment().format('YYYY-MM-DDTHH:mm')
    // this.form.mes = this.moment().format('YYYY-MM')
    // this.form.semana = this.moment().format('YYYY-WW')
    // this.form.hora =,
    this.moment().format('HH:mm')
  },
  computed: {
    computedFontColor() {
      const alcance = this.form.alcance
      const adjustedValue = Math.min(alcance * 10, 255) // Ajuste para limitar entre 0-255
      return `rgba(${adjustedValue}, ${adjustedValue}, ${adjustedValue}, 1)`
    }
  }
}
</script>
