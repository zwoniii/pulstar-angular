import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopComponent } from './shop/shop.component';
import { DescriptionComponent } from './description/description.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { GoodsComponent } from './goods/goods.component';
import { ChoiceComponent } from './choice/choice.component';
import { StoryComponent } from './story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopComponent,
    DescriptionComponent,
    AdvantagesComponent,
    GoodsComponent,
    ChoiceComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
