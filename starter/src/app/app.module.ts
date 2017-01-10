import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { MyModalComponent } from './my-modal/my-modal.component'
import { AppComponent } from './app.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MyModalComponent ],
  bootstrap: [AppComponent]
})

export class AppModule { }
