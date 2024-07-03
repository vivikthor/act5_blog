import { Component, Input } from '@angular/core';
import { IBlogEntry } from '../../interfaces/i-blog-entry.interface';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
})
export class PanelComponent {
  @Input() entradas: IBlogEntry[] = [];
 

  ngOnInit() {
    this.printBlog();
  }

  // Función de creación de HTML en base a las noticias recogidas en el array
  printBlog(): string {
    let html = '';
    this.entradas.forEach((entrada: IBlogEntry) => {
      html += `<article>
        <img src="${entrada.img}" alt="${entrada.title}" />
        <small>${entrada.date}</small>
        <h2>${entrada.title}</h2>
        <p>${entrada.txt}</p>
       </article>`;
    });
    return html;
  }
}
