import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProfessionalsListComponent } from './components/professionals-list/professionals-list.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ProfessionalsListComponent,
    AboutComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  title = 'espaco-terapeutizar';

  ngAfterViewInit() {
    // Adicionar evento de scroll suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();

        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);

          // Verificar se o elemento é um HTMLElement antes de acessar offsetTop
          if (target instanceof HTMLElement) {
            window.scrollTo({
              top: target.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }
}
