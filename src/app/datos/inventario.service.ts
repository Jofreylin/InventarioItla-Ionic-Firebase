import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore'
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {ProductInfo} from '../logica/productInfo.class' 


@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private inventarioCollection: AngularFirestoreCollection<ProductInfo>;
  private inventario: Observable<ProductInfo[]>;

  constructor(private db: AngularFirestore) { 
    //definir la coleccion
    this.inventarioCollection = this.db.collection<ProductInfo>('productos');
    //Obtener la coleccion
    this.inventario = this.inventarioCollection.snapshotChanges().pipe(
      map(
      actions =>{
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
  }


  //obteniendo todo el inventario
  getInventario(): Observable<ProductInfo[]>{
    return this.inventario;
  }



  getProducto(id:string){
    return this.inventarioCollection.doc<ProductInfo>(id).valueChanges();
  }

  updateInventario(producto:ProductInfo, id: string){
    return this.inventarioCollection.doc(id).update(producto);
  }

  //crear nuevo producto
  addInventario(producto: ProductInfo){
    return this.inventarioCollection.add(producto);
  }

  deleteInventario(id:string){
    return this.inventarioCollection.doc(id).delete();
  }
}
