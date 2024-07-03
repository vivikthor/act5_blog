import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IBlogEntry } from '../../interfaces/i-blog-entry.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() EntryToAdd: EventEmitter<IBlogEntry> = new EventEmitter();

  newEntry: IBlogEntry = {
    title: '',
    img: '',
    txt: '',
    date: '',
  };

  // Mensaje del formulario. Por ahora, solo devuelve un error en caso de no tener todos los input rellenados
  msgForm: string = '';

  // Función para recoger la imagen del usuario y poder usarla
  imgHandler(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.newEntry.img = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Función de recogida y validación de los datos del formulario en una instancia del interfaz. Output
  getEntry(): string {
    let nuevo = this.newEntry;
    if (
      nuevo.title != '' &&
      nuevo.img != '' &&
      nuevo.txt != '' &&
      nuevo.date != ''
    ) {
      const entry: IBlogEntry = this.newEntry;
      this.EntryToAdd.emit(entry);
      this.newEntry = {
        title: '',
        img: '',
        txt: '',
        date: '',
      };
    } else {
      this.msgForm =
        'Alguno de los campos está incompleto, revisa el formulario';
    }
    return this.msgForm;
  }
}
