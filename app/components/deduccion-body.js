import Ember from 'ember';
import { formularizar } from 'dn-play/helpers/formularizar';

// TODO: mover todo esto a helpers/clases para poder testearlo
const REGLAS = [
  { id: 'ed', nombre: 'E ⋁', parametros: 3 },
  { id: 'id', nombre: 'I ⋁', parametros: 1 },
  { id: 'ec', nombre: 'E ⋀', parametros: 1 },
  { id: 'ic', nombre: 'I ⋀', parametros: 2 },
  { id: 'en', nombre: 'E ¬', parametros: 2 },
  { id: 'in', nombre: 'I ¬', parametros: 0 },
  { id: 'ei', nombre: 'E →', parametros: 2 },
  { id: 'ii', nombre: 'I →', parametros: 0 },
  { id: 'efsq', nombre: 'EFSQ', parametros: 0 }
];

var reglaConNombre = function (id) {
  return REGLAS.findBy('id', id);
};

var imprimirRegla = function (id, parametro1, parametro2, parametro3) {
  var regla = reglaConNombre(id);
  var resultado = `${regla.nombre} `;
  var parametros = reglaConNombre(id).parametros;
  if (parametros > 0) { resultado += parametro1; }
  if (parametros > 1) { resultado += `, ${parametro2}`; }
  if (parametros > 2) { resultado += `, ${parametro3}`; }
  return resultado;
};

export default Ember.Component.extend({
  editandoResultado: true,
  pasos: [],
  cantidadDePasos: Ember.computed.alias('pasos.length'),
  formula: '',
  motivo: 'premisa',
  reglas: REGLAS,
  nombreRegla: 'ed',
  parametro1: '1',
  parametro2: '2',
  parametro3: '3',
  cantidadDeParametros: Ember.computed('nombreRegla', function () {
    return reglaConNombre(this.get('nombreRegla')).parametros;
  }),
  actions: {
    editarResultado() {
      this.toggleProperty('editandoResultado');
    },
    actualizarResultado() {
      this.toggleProperty('editandoResultado');
      this.set('resultadoEsperado', formularizar(this.get('resultadoEsperado')));
    },
    agregarPaso() {
      var motivo = this.get('motivo');
      if (motivo === 'regla') {
        motivo = imprimirRegla(
          this.get('nombreRegla'),
          this.get('parametro1'),
          this.get('parametro2'),
          this.get('parametro3')
        );
      }
      this.get('pasos').pushObject({
        formula: formularizar(this.get('formula')),
        motivo: motivo
      });
      this.set('formula', '');
    }
  }
});
