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
			img: "assets/emerson-vieira-3wzps8KbdCQ-unsplash.jpg",
			description: "Conjunto de utensílios de cozinha coloridos: Para transformar sua cozinha em um arco-íris culinário - afinal, cozinhar fica muito mais divertido quando você tem uma colher de pau rosa choque!",
			price: "R$ 46,37"
		},
		{
			img: "assets/emerson-vieira-3wzps8KbdCQ-unsplash.jpg",
			description: "Jogo de facas de chef de alta qualidade: Porque cortar vegetais não precisa ser uma batalha épica digna de um filme de ação. Prepare-se para fatiar e picar como um verdadeiro mestre ninja da culinária!",
			price: "R$ 46,37"
		},
		{
			img: "assets/emerson-vieira-3wzps8KbdCQ-unsplash.jpg",
			description: "Tapete de entrada personalizado: Dê as boas-vindas aos seus convidados com um tapete que grita Entre por sua própria conta e risco - brindes iincluem piadas ruins e café fresco.",
			price: "R$ 46,37"
		},
		{
			img: "assets/emerson-vieira-3wzps8KbdCQ-unsplash.jpg",
			description: "Conjunto de toalhas de mesa e guardanapos: Para aqueles momentos em que as refeições ficam um pouco... desajeitadas. Afinal, não há vergonha em ter um guardanapo pronto para a batalha!",
			price: "R$ 46,37"
		},
		{
			img: "assets/emerson-vieira-3wzps8KbdCQ-unsplash.jpg",
			description: "esse é um presente inesquecível",
			price: "R$ 46,37"
		}
	]

}

// *ngFor="let gift of giftlist"
