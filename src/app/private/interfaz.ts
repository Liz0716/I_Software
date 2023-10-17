export interface Interfaz {
  id: number;
  nombre: string;
  capacidad: number;
  extensionTelefonica: string;
  camas: string;
  tipo: 'junior' | 'platinum' | 'master';
  costo: number;
  ocupada: boolean; // Indica si la habitacion esta ocupada
  inventario?: InventarioItem[];
  descripcion: string;
  imagenes?: string[]; // Imágenes de la habitacion
  servicios: ServiciosItem[]; //Servicios de la habitacion
}

export interface InventarioItem {
  nombre: string; // Nombre del objeto del inventario
  cantidad: number; // Cantidad en la habitación
}

export interface ServiciosItem {
  nombre: string;
}
