import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  translations: any = {
    pt: {
      solucoes: 'Soluções',
      sobre: 'Sobre Nós',
      suporte: 'Suporte',
      planos: 'Planos',
      contato: 'Contato',
      cadastrese: 'Cadastre-se'
    },
    en: {
      solucoes: 'Solutions',
      sobre: 'About Us',
      suporte: 'Support',
      planos: 'Plans',
      contato: 'Contact',
      cadastrese: 'Sign Up'
    }
  }
  language: 'pt' | 'en' = 'pt';

  applyLanguage(lang: 'pt' | 'en') {
    this.language = lang;
  }
}
