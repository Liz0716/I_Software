import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Interfaz } from '../interfaz';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css']
})
export class HabitacionComponent  {
  habitacionForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.habitacionForm = this.fb.group({
      id: [null],
      nombre: ['', Validators.required],
      capacidad: [1, [Validators.required, Validators.min(1)]],
      extensionTelefonica: ['', Validators],
      camas: ['', [Validators.required]],
      tipo: ['', Validators.required],
      costo: [0, [Validators.required, Validators.min(0)]],
      ocupada: [false],
      descripcion: ['', [Validators.required]],
      imagenes: [null],
      inventario: this.fb.array([]), // Inicializamos un FormArray para el inventario
      servicios: this.fb.array([]), // Inicializamos un FormArray para los servicios
    });
  }
  guardarHabitacion() {
    const formData = this.habitacionForm.value;
    console.log(formData);
  }

  // Manejar el cambio de archivo y mostrar el nombre de la imagen o la URL
  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      const imagenesControl = this.habitacionForm.get('imagenes');
      if (imagenesControl) {
        imagenesControl.setValue(file.name || 'URL: ' + imagenesControl.value);
      }
    }
  }

  agregarInventario() {
    const inventarioArray = this.habitacionForm.get('inventario') as FormArray;
    inventarioArray.push(this.fb.group({
      nombre: [''],
      cantidad: [0],
    }));
  }

  agregarServicio() {
    const serviciosArray = this.habitacionForm.get('servicios') as FormArray;
    serviciosArray.push(this.fb.group({
      nombre: [''],
    }));
  }

}

