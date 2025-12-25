import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
	giftlist = [
		{
      img: "assets/cafeteira.jpg",
			description: "Máquina de Café Expresso pra fazer hora extra",
			price: "R$ 400,00",
      pixurl: "https://nubank.com.br/cobrar/q8h3/6602125e-26a5-4982-a3e4-f106701a2338"
		},
		{
      img: "assets/cortina.jpg",
			description: "Cortina da sala pra dormir até mais tarde",
			price: "R$ 128,00",
      pixurl: "https://nubank.com.br/cobrar/q8h3/660212c2-c2dd-46b2-bbf7-c1aede45298a"
		},
		{
      img: "assets/ferramentas.jpg",
			description: "Kit de Ferramentas pra não depender de ninguém",
			price: "R$ 153,00",
      pixurl: "https://nubank.com.br/cobrar/q8h3/66021304-58e5-431b-8ff9-47259dac34f2"
		},
		{
      img: "assets/cama.jpg",
			description: "Conjunto de cama pras visitas não morrerem de frio",
			price: "R$ 67,00",
      pixurl: "https://nubank.com.br/cobrar/q8h3/6602134c-0cc2-43c6-901f-79ec51371830"
		},
    {
      img: "assets/potes.jpg",
			description: "Kit tupperware pra fazer o rancho em dia de festa do sidi",
			price: "R$ 51,00",
      pixurl: "https://nubank.com.br/cobrar/q8h3/66021381-80e4-44de-9f0f-0d7a54ece94f"
		},
    {
      img: "assets/cadeira.jpg",
      description: "Cadeira de escritório pra não ficar com dor nas costas",
      price: "R$ 280,00",
      pixurl: "https://nubank.com.br/cobrar/q8h3/660213e7-8f1b-4f18-a643-71e16ce5a615"
    },
    {
      img: "assets/relogio.jpg",
      description: "Relógio de parede pra não perder a hora de ir trabalhar",
      price: "R$ 46,00",
      pixurl: "https://nubank.com.br/cobrar/q8h3/6602141c-225f-46c5-9005-6c982ec9612a"
    },
    {
      img: "assets/planta.jpg",
      description: "Planta artificial porque a gente não tem tempo pra cuidar",
      price: "R$ 35,00",
      pixurl: "https://nubank.com.br/cobrar/q8h3/66021464-6128-4c75-8851-d3e269652396"
    },
    {
      img: "assets/retrato.jpg",
      description: "Porta retratos pra não esquecer a familia",
      price: "R$ 80,00",
      pixurl: "https://nubank.com.br/cobrar/q8h3/66021491-3997-40ce-816e-2d76d717d4b5"
    },
    {
      img: "assets/roteador.jpg",
      description: "Um mês de fibra otica porque depois disso tu se vira",
      price: "R$ 100,00",
      pixurl: "https://nubank.com.br/cobrar/q8h3/660214db-ac71-469f-9e8e-e946b26afe14"
    },
    {
      img: "assets/vinho.jpg",
      description: "Kit de vinhos pra receber os amigos",
      price: "R$ 202,00",
      pixurl: "https://nubank.com.br/cobrar/q8h3/66021502-05fb-49f2-822d-dc0b76b783d3"
    },
    {
      img: "assets/luminario.jpg",
      description: "Luminária de mesa pra trabalhar depois do horário",
      price: "R$ 97,00",
      pixurl: "https://nubank.com.br/cobrar/q8h3/6602152b-81e7-4aeb-be1a-5cfc52ebfecc"
    },
    {
      img: "assets/ventilador.jpg",
      description: "Ventilador para os dias quentes",
      price: "R$ 141,00",
      pixurl: "https://nubank.com.br/cobrar/q8h3/66021561-e184-4f0c-b766-761341290a93"
    },
    {
      img: "assets/sad.jpg",
      description: "Nem gosto tanto assim de ti...",
      price: "R$ 1,99",
      pixurl: "https://nubank.com.br/cobrar/q8h3/66021589-57d2-4766-a1a2-2229d8dea3cd"
    },
    {
      img: "assets/panelas.jpg",
			description: "Jogo de Panelas Tramontina (Vale 01 Jantar no Apartamento)",
			price: "R$ 515,00",
      pixurl: "https://nubank.com.br/cobrar/q8h3/660215b4-1eaf-498f-ba74-e9a06e26c694"
		},
	]

}

// *ngFor="let gift of giftlist"
