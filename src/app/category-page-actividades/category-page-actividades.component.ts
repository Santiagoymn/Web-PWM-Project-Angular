import {Component, Input, OnInit} from '@angular/core';
import {Categoria} from "../objetos";
import {tap} from "rxjs";
import {GetterJsonService} from "../getter-json.service";

@Component({
  selector: 'app-category-page-actividades',
  templateUrl: './category-page-actividades.component.html',
  styleUrls: ['./category-page-actividades.component.css']
})
export class CategoryPageActividadesComponent implements OnInit {

  categorias!: Categoria[];
  @Input() categoria!: Categoria;
  constructor(private getterJsonService: GetterJsonService) {
  }

  ngOnInit(): void {
    this.getterJsonService.getCategorias()
      .pipe(
        tap((categories: Categoria[]) => this.categorias = categories)
      )
      .subscribe();
  }

  comparacion(){
    return localStorage.getItem("category");
  }

  sustituirEspacios(nombre: any){
    return nombre.replaceAll(" ", "")
  }

}
