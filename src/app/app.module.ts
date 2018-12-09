import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './parent-component/child-component/child-component.component';
import { ParentUsingLocalVarComponent } from './parent-using-local-var/parent-using-local-var.component';
import { ChildUsingLocalVarComponent } from './parent-using-local-var/child-using-local-var/child-using-local-var.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    ParentUsingLocalVarComponent,
    ChildUsingLocalVarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
