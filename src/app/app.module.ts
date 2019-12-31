import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Forms module
import { FormsModule } from '@angular/forms';

// Components
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsProofComponent } from './items-proof/items-proof.component';
import { ItemsCodeComponent } from './items-code/items-code.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCreateComponent,
    ItemEditComponent,
    ItemsListComponent,
    ItemsProofComponent,
    ItemsCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
