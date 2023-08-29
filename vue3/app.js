// Import the createApp function from Vue
import { createApp, ref } from 'https://cdn.jsdelivr.net/npm/vue@3.2.11/dist/vue.esm-bundler.js';

// Create the Vue app
const app = createApp({
	data() {
		return {
			cambio: ref(125),
			cantidad: ref(''),
			conversiones: []
		};
	},
	methods: {
		convertir() {
			const cantidad = parseFloat(this.cantidad);
			const resultado = cantidad * this.cambio;
			this.conversiones.push({
				id: Date.now(),
				text: `${cantidad} euros son ${resultado} yenes`
			});
			this.cantidad = '';
		},
		validateInput(event) {
			let inputValue = event.target.value.replace(/[^\d.]/g, '');
			this.cantidad = inputValue;
		},
		teclado(event) {
			let codigo_tecla = event.keyCode;
			if (codigo_tecla === 13) {
				this.ir_a_convertir();
			}
		},
		ir_a_convertir() {
			const cambio = this.cambio;
			let cantidad = this.cantidad;
			cantidad = (cantidad !== '') ? cantidad : 1;
			const a = this.convertir(cantidad, cambio);
			this.conversiones.push({
				id: Date.now(),
				text: `${cantidad} euros son ${a} yenes`
			});
			this.cantidad = '';
		}
	},
	mounted() {
		document.getElementById('input_cambio').value = this.cambio;
		document.getElementById('boton').addEventListener('click', this.ir_a_convertir);
		document.getElementById('dinero').addEventListener('keydown', this.teclado);

		const dineroInput = document.getElementById('dinero');
		dineroInput.addEventListener('input', this.validateInput);
	}
});

// Mount the app on the element with the ID "app"
app.mount('#app');
